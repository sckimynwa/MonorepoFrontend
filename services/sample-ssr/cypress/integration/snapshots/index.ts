import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('화면 스냅샷 비교 통과', () => {
  if (Cypress.browser.isHeadless) {
    cy.get('main').should('be.visible');
    cy.wait(300);
    cy.matchImageSnapshot();
  }
});
