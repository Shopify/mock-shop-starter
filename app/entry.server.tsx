import { createContentSecurityPolicy } from "@shopify/hydrogen";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { ServerRouter, type EntryContext, type RouterContextProvider } from "react-router";

import { NonceProvider } from "~/lib/csp";
import { envContext } from "~/lib/env";
import { getMockShopDomain, getStoreDomain, shouldUseMockShop } from "~/lib/shop";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
  context: RouterContextProvider,
) {
  const env = context.get(envContext);

  const csp = createContentSecurityPolicy({
    // sandbox-preview-csp: Hydrogen's default `frame-ancestors 'none'` blocks the embedded
    // preview panes in CodeSandbox, StackBlitz, and Bolt. Allow those hosts to frame the DEV
    // server only; production builds keep the default.
    ...(import.meta.env.DEV
      ? {
          directives: {
            frameAncestors: [
              "'self'",
              "https://codesandbox.io",
              "https://*.csb.app",
              "https://stackblitz.com",
              "https://*.stackblitz.io",
              "https://bolt.new",
            ],
          },
        }
      : {}),
    shop: {
      storeDomain: shouldUseMockShop(env) ? getMockShopDomain(env) : getStoreDomain(env),
      checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
    },
  });

  const body = await renderToReadableStream(
    <NonceProvider value={csp.nonce}>
      <ServerRouter context={reactRouterContext} url={request.url} nonce={csp.nonce} />
    </NonceProvider>,
    {
      nonce: csp.nonce,
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get("user-agent"))) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  csp.applyResponseHeaders(responseHeaders);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
