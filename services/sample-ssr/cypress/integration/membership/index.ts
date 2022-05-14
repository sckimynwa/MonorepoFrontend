import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('코인 부족 배너 보임', () => {
  cy.findByTestId('banner-not-enough-coin').should('exist');
});

Then('코인 부족 배너 안 보임', () => {
  cy.findByTestId('banner-not-enough-coin').should('not.exist');
});

Then('멤버십 옵션 안 보임', () => {
  cy.findAllByTestId('membership-option').should('have.length.lessThan', 1);
});

Then('멤버십 옵션 보임', () => {
  cy.findAllByTestId('membership-option').should('have.length.greaterThan', 0);
});

Then('{string} 구독 옵션 선택됨', (option) => {
  cy.findAllByTestId('membership-option')
    .filter(`:contains(${option})`)
    .first()
    .should('have.class', 'card--active');
});

Then('멤버십 상태 {string} 구독중으로 보임', (option) => {
  cy.findByTestId('membership-status').should('include.text', option);
});

Then('코인 충전 옵션 보임', () => {
  cy.findAllByTestId('coin-option').should('have.length.greaterThan', 0);
});

Then('{string} 코인 옵션 선택됨', (option) => {
  cy.findAllByTestId('coin-option')
    .filter(`:contains(${option})`)
    .first()
    .should('have.class', 'coinOption--active');
});
