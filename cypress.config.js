const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "n8kt3t",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://loginxp.vercel.app"
  }
});
