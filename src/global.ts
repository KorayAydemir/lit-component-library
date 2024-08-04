export default (): void => {};

// This is a place for connecting to api or executing global scripts (like analytics)
// This file is marked as with side effects,
// which means that even functions that are not imported
// by other components will always be executed if anything from this file is imported

initEnv();
function initEnv(): void {
    console.log("global script");
    // Run global scripts
}
