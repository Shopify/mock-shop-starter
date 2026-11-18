// Re-applies this repo's edits to template-owned files after the weekly re-scaffold.
// Idempotent: running it twice changes nothing. Exits non-zero when the template has changed
// underneath an edit, so the weekly run fails and names what to update instead of silently
// dropping the edit.
import fs from 'node:fs';

const NAME = 'mock-shop-starter';

function fail(message) {
  console.error(`${message}; update scripts/patch-template.mjs`);
  process.exit(1);
}

// package.json and package-lock.json: this repo's package name, plus the store-directory script.
// The lockfile is edited as JSON instead of being regenerated, so apart from the name it stays
// exactly the template's, whichever npm version the runner has.
function editJson(file, edit) {
  const before = fs.readFileSync(file, 'utf8');
  const data = JSON.parse(before);
  edit(data);
  const after = `${JSON.stringify(data, null, 2)}\n`;
  if (after !== before) fs.writeFileSync(file, after);
  console.error(`${file}: ${after === before ? 'already patched' : 'applied'}`);
}

editJson('package.json', (pkg) => {
  pkg.name = NAME;
  pkg.scripts['update-stores'] = 'node scripts/update-store-directory.mjs';
  delete pkg.packageManager;
});
editJson('package-lock.json', (lock) => {
  lock.name = NAME;
  lock.packages[''].name = NAME;
});

const patches = [
  {
    file: 'app/entry.server.tsx',
    marker: 'sandbox-preview-csp',
    anchor: 'createContentSecurityPolicy({\n',
    insert: [
      "    // sandbox-preview-csp: Hydrogen's default `frame-ancestors 'none'` blocks the embedded",
      '    // preview panes in CodeSandbox, StackBlitz, and Bolt. Allow those hosts to frame the DEV',
      '    // server only; production builds keep the default.',
      '    ...(import.meta.env.DEV',
      '      ? {',
      '          directives: {',
      '            frameAncestors: [',
      '              "\'self\'",',
      '              "https://codesandbox.io",',
      '              "https://*.csb.app",',
      '              "https://stackblitz.com",',
      '              "https://*.stackblitz.io",',
      '              "https://bolt.new",',
      '            ],',
      '          },',
      '        }',
      '      : {}),',
      '',
    ].join('\n'),
    // The allowance is spread in ahead of the template's own options, so a `directives` key the
    // template passed in the same call would replace it without any error.
    conflict: {
      pattern: /\bdirectives\s*:/g,
      message: 'the template now passes its own CSP directives, which would replace the sandbox frame-ancestors',
    },
  },
  {
    // The template's AGENTS.md already explains mock.shop. This is what the starter adds to it.
    file: 'AGENTS.md',
    marker: 'Query mock.shop instead of inventing product data',
    append: [
      'Query mock.shop instead of inventing product data or mocking the Storefront API locally. A query written against mock.shop runs unchanged against a real store. The full guide is at https://shopify.dev/docs/storefronts/headless/mock-shop.',
      '',
    ].join('\n'),
  },
];

for (const p of patches) {
  let src = fs.readFileSync(p.file, 'utf8');
  if (src.includes(p.marker)) {
    console.error(`${p.file}: already patched`);
  } else {
    if (p.append) {
      // One blank line after whatever the template ends with, then the addition.
      src = `${src.replace(/\n*$/, '\n')}\n${p.append}`;
    } else {
      const i = src.indexOf(p.anchor);
      if (i === -1) fail(`${p.file}: anchor not found for ${p.marker}; the template changed`);
      const at = i + p.anchor.length;
      src = src.slice(0, at) + p.insert + src.slice(at);
    }
    fs.writeFileSync(p.file, src);
    console.error(`${p.file}: applied`);
  }
  if (p.conflict && src.match(p.conflict.pattern).length > 1) {
    fail(`${p.file}: ${p.conflict.message}`);
  }
}
