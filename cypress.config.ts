import { defineConfig } from "cypress";

// const ENV = process.env.ENV || "dev";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
    e2e: {
    baseUrl: process.env.BASE_URL || "http://app-dev.sefa.pa.gov.br/pservicos#",
    
  specPattern: `teste-e2e/orange-hrm/e2e/**/*.cy.ts`,
    supportFile: `teste-e2e/orange-hrm/support/e2e.ts`,
    fixturesFolder: `teste-e2e/orange-hrm/fixtures`,


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