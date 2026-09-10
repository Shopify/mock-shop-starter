// Re-applies this repo's small edits to skeleton-owned files after the weekly re-scaffold.
// Idempotent: running it twice changes nothing. Fails loudly if an anchor disappears, so the
// freshness PR shows that the skeleton changed underneath us.
import fs from 'node:fs';

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
      '          frameAncestors: [',
      '            "\'self\'",',
      "            'https://codesandbox.io',",
      "            'https://*.csb.app',",
      "            'https://stackblitz.com',",
      "            'https://*.stackblitz.io',",
      "            'https://bolt.new',",
      '          ],',
      '        }',
      '      : {}),',
      '',
    ].join('\n'),
  },
];

for (const p of patches) {
  const src = fs.readFileSync(p.file, 'utf8');
  if (src.includes(p.marker)) {
    console.error(`${p.file}: already patched (${p.marker})`);
    continue;
  }
  const i = src.indexOf(p.anchor);
  if (i === -1) {
    console.error(
      `${p.file}: anchor not found for ${p.marker}; the skeleton changed, update scripts/patch-skeleton.mjs`,
    );
    process.exit(1);
  }
  const at = i + p.anchor.length;
  fs.writeFileSync(p.file, src.slice(0, at) + p.insert + src.slice(at));
  console.error(`${p.file}: applied ${p.marker}`);
}
