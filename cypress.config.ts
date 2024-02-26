import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };
      on('file:preprocessor', cucumber(options));
      return config;
    },
    specPattern: "cypress/e2e/feature/*.feature",
    baseUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
  },
});

