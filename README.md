# Lit Webpack Component Library Starter

## Structure

Folders and files in this project: 
1. `/src/components` - all components the library exposes 
2. `/src/themes/default.css` - default theme variables like colors, fonts etc. 
2. `/src/components/**/styles.css` - Styles for each component. Gives styling to the component. Also defines component spesific color variables like --button-hover-color, and preferably those variables use the variables from default theme, like `--button-hover-color: --primary-color`
3. `/src/exports.ts` - exports components for library consumers to import from "lit-component-library"
4. `/src/react-exports.ts` - exports components for library consumers who are using react to import. They will need to import the components from "lit-component-library/react"
5. `/playground/index.html` - you can develop and test components here when you run `npm run dev` 
## Setup

Install dependencies:

```bash
npm i
```

## Dev Server

To start the dev server run (by default on _localhost:5077_):

```bash
npm run dev
```

## Build

In this repo TypeScript compiler is used to produce JavaScript that runs in modern browsers. 
Also, ESLint is used along with it - they are executed in fix mode before every build.
So, you might want to configure linting rules in `.eslintrc.js` to make them fit your code style.

To build the library (output files will be in _build_ folder) run:

```bash
npm run build
```

## Importing to test the library locally in another project

After building the library, run:

```bash
npm link
```

Then, in the project where you want to test the library, run:

```bash
npm link lit-component-library
```

Now the library is added to the project's _node_modules_ folder and you can import it like this:

```javascript
import { VeryCoolComponentNameHere } from 'lit-component-library';
```

or for React users:

```javascript
import { VeryCoolComponentNameHere } from 'lit-component-library/react';
```

Warning: If you run `npm i` again, the library will be unlinked and you'll have to type `npm link lit-component-library` again.

## Stats

You can also generate build and _stats.json_ file, that can later be used for bundle analysis ([this tool](https://alexkuz.github.io/webpack-chart/)) for example.

```bash
npm run build:stats
```

