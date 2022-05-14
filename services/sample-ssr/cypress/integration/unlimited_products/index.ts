import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('무제한 질문권 옵션 보임', () => {
  cy.findAllByTestId('unlimited-membership-option').should(
    'have.length.greaterThan',
    0
  );
});

Then('무제한 질문권 옵션 안 보임', () => {
  cy.findAllByTestId('unlimited-membership-option').should(
    'have.length.lessThan',
    1
  );
});

type ProductType = '1개월' | '3개월';

Then('{string} 무제한 질문권 옵션 활성화', (option: ProductType) => {
  cy.findAllByTestId('unlimited-membership-option')
    .filter(`:contains(${option})`)
    .first()
    .should('have.class', 'unlimitedMembershipOptionUnit--active');
});

Then('{string} 무제한 질문권 옵션 클릭', (option: ProductType) => {
  cy.findAllByTestId('unlimited-membership-option')
    .filter(`:contains(${option})`)
    .first()
    .click();
});

Then('멤버십 상태 {string} 구독중으로 보임', (option) => {
  cy.findByTestId('membership-status').should('include.text', option);
});
