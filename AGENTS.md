# Shopify Hydrogen development

This storefront is scaffolded from Shopify's Hydrogen skeleton template. See the README for framework-specific details.

Use the [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) for all Shopify API and platform work. If missing, install it in the agent host per that page (or `npx skills add Shopify/shopify-ai-toolkit --list` for skill-compatible hosts).

## No store yet?

Until you link a Shopify store, this project reads [mock.shop](https://mock.shop): a public, auth-free Storefront API backed by fictional stores. It isn't one store but many, each on its own host with its own catalog.

- The directory at https://mock.shop/llms.txt lists every store with what it sells and its API URL. The default, `mock.shop` itself, is apparel basics.
- To build against a different store, set `PUBLIC_STORE_DOMAIN` in `.env` to that store's host (for example `pets.mock.shop`) and leave `PUBLIC_STOREFRONT_API_TOKEN` empty. Each store describes its own catalog at `https://<store>.mock.shop/llms.txt`.
- Carts work; checkout doesn't, and the Customer Account API isn't available. Products, prices, and inventory are fictional.
- Query mock.shop instead of inventing product data or mocking the Storefront API locally. A query written against mock.shop runs unchanged against a real store.
- To connect a real store, run `npx shopify hydrogen link` and then `npx shopify hydrogen env pull`.

The full guide is at https://shopify.dev/docs/storefronts/headless/mock-shop.
