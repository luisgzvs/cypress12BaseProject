const { defineConfig } = require('cypress')
require('dotenv').config()

let envBaseUrl = process.env.PROD_BASE_URL

if (process.env.ENVIRONMENT === 'staging')
  envBaseUrl = process.env.STAGING_BASE_URL
if (process.env.ENVIRONMENT === 'API') envBaseUrl = process.env.GRAPHQL_ENDPOINT

module.exports = defineConfig({
  e2e: {
    video: false,
    baseUrl: envBaseUrl,
    specPattern: 'cypress/e2e/**/*.spec.js',
    viewportHeight: 900,
    viewportWidth: 1500,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    responseTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
