## Setup node dependencies

1. Create Next.js repo with Typescript as templated

```bash
npx create-next-app@latest app-name
```

2. Install yarn dependencies + remove default `package.lock.json`

```bash
yarn
```

3. Add @apollo/client graphql

```bash
yarn add @apollo/client graphql
```

4. Adding styled-components

```bash
yarn add styled-components
```

- Add config to `package.json`

```json
 "resolutions": {
    "styled-components": "^5"
  },
```

- Add babel plugin to compile the styled-components naming

```bash
 yarn add babel-plugin-styled-components --dev
```

- Add babel config in `.babelrc` file at route folder

```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true, "displayName": true }]]
}
```
