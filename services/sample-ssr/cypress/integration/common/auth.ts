/* eslint-disable no-nested-ternary */
import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('인증되지 않은 사용자', () => {
  cy.setCookie('is_authenticated', 'false');
  cy.setCookie('MOCK_OPTION', 'noAuth');
});

Given('구독 없는 사용자', () => {
  cy.setCookie('is_authenticated', 'true');
  cy.setCookie('MOCK_OPTION', 'nosub');
});

Given('스타터팩 대상 사용자', () => {
  cy.setCookie('is_authenticated', 'true');
  cy.setCookie('MOCK_OPTION', 'nosub_starter');
});

type SubscriptionType =
  | '무제한 질문 3개월권'
  | '무제한 질문 6개월권'
  | '프리미엄 멤버십'
  | '플러스 멤버십'
  | '베이직 멤버십'
  | 'IAP 베이직 멤버십';

Given('{string} 구독한 사용자', (subscription: SubscriptionType) => {
  const membershipType =
    subscription === '무제한 질문 3개월권'
      ? 'unlim_3'
      : subscription === '무제한 질문 6개월권'
      ? 'unlim_6'
      : subscription === '프리미엄 멤버십'
      ? 'premium'
      : subscription === '플러스 멤버십'
      ? 'plus'
      : subscription === '베이직 멤버십'
      ? 'basic'
      : subscription === 'IAP 베이직 멤버십'
      ? 'basic_iap'
      : '';

  cy.setCookie('is_authenticated', 'true');
  cy.setCookie(
    'MOCK_OPTION',
    membershipType ? `subbed_${membershipType}` : 'nosub'
  );
});
