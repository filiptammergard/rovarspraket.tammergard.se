# rovarspraket.tammergard.se

A playful site that translates to and from robber language (Swedish:
_rövarspråket_), with a JSON API.

Built with [Astro](https://astro.build) and powered by the
[`@tammergard/robber`](https://www.npmjs.com/package/@tammergard/robber)
npm package.

## Development

```bash
pnpm install
pnpm dev
```

## API

The API is documented at [`/api`](https://rovarspraket.tammergard.se/api).

- `GET /api/v1/to/{text}` — translate plain text to robber language
- `GET /api/v1/from/{robber}` — translate robber language back to plain text
- `GET /api/v1/validate/{robber}` — check whether a string is valid robber language
