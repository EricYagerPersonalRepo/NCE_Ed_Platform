import { defineConfig } from "cypress";


export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: 'src/test/**/*.cy.{js,jsx,ts,tsx}',
  },

  e2e: {
    setupNodeEvents(on, config) {},
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
