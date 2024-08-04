# Lit Webpack Component Library Starter

## Structure

Folders and files in this project: 
1. `/src/components` - all components the library exposes 
2. `/src/exports.ts` - exports components for library consumers to import from "lit-component-library"
3. `/src/react-exports.ts` - exports components for library consumers who are using react to import. They will need to import the components from "lit-component-library/react"
4. `/src/playground/index.html` - you can develop and test components here when you run `npm run dev` 
5. `/src/assets/to-root` - on build, contents from this folder are copied to the root of the build
6. `/src/assets/to-root/index.css` - this is the css file for the /src/playground/index.html

## Setup

Install dependencies:

```bash
npm i
```

## Dev Server

To start the dev server run (by default on _localhost:2797_):

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

