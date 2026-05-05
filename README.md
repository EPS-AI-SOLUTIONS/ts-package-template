# @eps-ai-solutions/TEMPLATE_PACKAGE_NAME

TEMPLATE_DESCRIPTION

## Install

```bash
bun add @eps-ai-solutions/TEMPLATE_PACKAGE_NAME
```

Configure `.npmrc`:

```
@eps-ai-solutions:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Optional: shared UI package

Once `@eps-ai-solutions/ui` is published to GitHub Packages, consumers
can opt in:

```bash
bun add @eps-ai-solutions/ui
```

It is intentionally NOT a default dependency of this template — the
package is not yet published, so adding it here would break
`bun install`.

## License

MIT
