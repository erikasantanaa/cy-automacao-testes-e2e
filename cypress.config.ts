import { defineConfig } from "cypress";

// const ENV = process.env.ENV || "orange";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
    e2e: {
    baseUrl: process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    
  specPattern: `teste-e2e/orange-hrm/cypress/e2e/**/*.cy.ts`,
    supportFile: `teste-e2e/orange-hrm/cypress/support/e2e.ts`,
    fixturesFolder: `teste-e2e/orange-hrm/cypress/fixtures`,


    chromeWebSecurity: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    video: false,
    screenshotOnRunFailure: false,

    setupNodeEvents(on, config) {
      return config;
    },
  },
});