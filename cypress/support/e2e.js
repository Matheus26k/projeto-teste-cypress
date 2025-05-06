import './commands';
import 'cypress-mochawesome-reporter/register';

afterEach(function () {
  if (this.currentTest.state === 'passed') {
    const testName = this.currentTest.title;
    cy.screenshot(`sucesso/${testName}`);
  }
});

// Adicionado para ignorar erros da aplicação
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});