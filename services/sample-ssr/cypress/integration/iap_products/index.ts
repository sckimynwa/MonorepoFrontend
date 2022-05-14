import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('IAP 콴다 질문 베이직 옵션 보임', () => {
  cy.findByText('IAP 콴다 질문 베이직').should('exist');
});

Then('IAP 콴다 질문 베이직 옵션 안 보임', () => {
  cy.findByText('IAP 콴다 질문 베이직').should('not.exist');
});

Then('구독 중인 콴다 질문 베이직 보임', () => {
  cy.findByText('콴다 질문 베이직').should('exist');
});

Then('구독 중인 IAP 콴다 질문 베이직 보임', () => {
  cy.findByText('IAP 콴다 질문 베이직').should('exist');
});
