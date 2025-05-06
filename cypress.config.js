const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // <-- define o reporter corretamente
  reporterOptions: {
    reportDir: 'cypress/reports',            // <-- define onde salvar
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportTitle: 'Relatório de Testes - Projeto Cypress'
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // <-- ativa o plugin
    }
  }
});