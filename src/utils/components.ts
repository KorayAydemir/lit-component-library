// COMMENTED CUZ PROBABLY DO NOT NEED SOMETHING LIKE THIS IN THIS LIBRARY.

// // This function is used instead of Lit's @customElement decorator
// // because it allows to export element declaration
// // avoiding usage of side effects therefore decreasing bundle size
// //
// // Export custom elements like this:
// // export default (): void => defineComponent("tag-name", ComponentClass);
// //
// // Import like this:
// // import("~components/tag-name").then(f => f.default());
//
// // eslint-disable-next-line import/prefer-default-export
// export function defineComponent(tag: string, c: CustomElementConstructor): void {
//     if (customElements.get(tag) === undefined) customElements.define(tag, c);
// }
//
// // NOTE:
// // If you want to use Lit's @customElement decorator instead of this function
// // don't forget to add components folder to side effects in package.json
// //
// // In package.json:
// // "sideEffects": [
// //     "./src/global.ts", "./src/components/**/*.ts"
// // ],
