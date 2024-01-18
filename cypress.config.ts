import { defineConfig } from 'cypress'
// Populate process.env with values from .env file
require('dotenv').config()
// AWS exports
//const awsConfig = require('./aws-exports.js')


export default defineConfig({
  /*env: {
    cognito_username: process.env.AWS_COGNITO_USERNAME,
    cognito_password: process.env.AWS_COGNITO_PASSWORD,
    awsConfig: awsConfig.default,
  },*/
  
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
})
