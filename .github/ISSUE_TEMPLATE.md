---
name: 'Bug report'
about: Something in the starter is not working
labels: 'Type: Bug'
---

# Issue summary

Before opening this issue, I have:

- [ ] Run `npm install` on a fresh clone and copied `.env.example` to `.env`
- [ ] Checked which store I am pointed at (`PUBLIC_STORE_DOMAIN` in `.env`, or the default `mock.shop`)
- [ ] Confirmed the store answers directly: `curl -X POST https://<store>.mock.shop/api -H "Content-Type: application/json" -d '{"query":"{ shop { name } }"}'`
- [ ] Looked for similar issues in this repository

If mock.shop itself returns an error for a query that works against a real Shopify store, please say so; that is a mock.shop bug rather than a starter bug and we will route it.

## Expected behavior

## Actual behavior

## Steps to reproduce

1.
2.

## Environment

- Node version:
- Operating system:
- Store host (`PUBLIC_STORE_DOMAIN`):
