import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then('결제 CTA 활성화', () => {
  cy.findByTestId('cta-pay').should('be.enabled');
});

Then('코인 내역 CTA 버튼 보임', () => {
  cy.findByTestId('cta-coin-history').should('exist');
});

Then('코인 내역 CTA 버튼 안 보임', () => {
  cy.findByTestId('cta-coin-history').should('not.exist');
});

Then('멤버십 변경 CTA 버튼 보임', () => {
  cy.findByTestId('cta-change-membership').should('exist');
});

Then('멤버십 변경 CTA 버튼 안 보임', () => {
  cy.findByTestId('cta-change-membership').should('not.exist');
});

When('맴버십 변경 CTA 선택', () => {
  cy.findByTestId('cta-change-membership').click();
});
