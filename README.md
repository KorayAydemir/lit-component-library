# Lit Webpack Project Starter

This project can be used as starting point for creating a multipage application with Lit. It also uses Typescript, Webpack and SCSS.

Fell free to clone it and start your project with bundle build configuration what works like a charm out of the box.

## Structure

Folders and files in this project: 
1. `/src/playground` - place for developing and testing components
2. `/src/playground/index.html` - base html file used for page generation
3. `/src/components` - all other components in the project
5. `/src/utils` - place for useful function that can be used anywhere in project
6. `/src/assets/styles` - global styles (theming, layouts, mixins, etc.) - it's recommended to split global styles in different files here because tree-shaking will only remove entire files (not parts of files)
7. `/src/assets/to-root` - on build contents from this folder are copied to the root of the build (useful for files like `robots.txt` and `favicon.ico`)
8. `/src/global.ts` - contains global variables, styles for all components/pages and globally executed scripts, for example analytics

## Setup

Install dependencies:

```bash
npm i
```

Don't forget to change name of the project in `package.json`!

## Dev Server

To start the dev server run (by default on _localhost:2797_):

```bash
npm run dev
```

## Build

In this repo TypeScript compiler is used to produce JavaScript that runs in modern browsers. 
Also, ESLint is used along with it - they are executed in fix mode before every build.
So, you might want to configure linting rules in `.eslintrc.js` to make them fit your code style.

To build full app bundle (output files will be in _build_ folder) run:

```bash
npm run build
```

You can also generate build and _stats.json_ file, that can later be used for bundle analysis ([this tool](https://alexkuz.github.io/webpack-chart/) is my favourite):

```bash
npm run build:stats
```

