import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then('스타터팩 광고 배너 보임', () => {
  cy.findByTestId('banner-starter-pack').should('exist');
});

Then('스타터팩 광고 배너 안 보임', () => {
  cy.findByTestId('banner-starter-pack').should('not.exist');
});

Then('스타터팩 옵션 보임', () => {
  cy.findAllByTestId('membership-starter-option').should(
    'have.length.greaterThan',
    0
  );
});

Then('스타터팩 타이머 보임', () => {
  cy.findAllByTestId('timer-bubble').should('exist');
});

Then('스타터팩 옵션 안 보임', () => {
  cy.findAllByTestId('membership-starter-option').should(
    'have.length.lessThan',
    1
  );
});

type StarterPackType = '프리미엄' | '플러스' | '베이직';

When('{string} 스타터팩 옵션 클릭', (option: StarterPackType) => {
  cy.findAllByTestId('membership-starter-option')
    .filter(`:contains(${option})`)
    .first()
    .click();
});

When('{string} 스타터팩 옵션 활성화', (option: StarterPackType) => {
  cy.findAllByTestId('membership-starter-option')
    .filter(`:contains(${option})`)
    .first()
    .should('have.class', 'card--active');
});
