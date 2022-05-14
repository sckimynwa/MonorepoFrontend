/* eslint-disable no-nested-ternary */
import { When } from 'cypress-cucumber-preprocessor/steps';

const baseQuery = '?locale=ko_KR&device_type=1&app_version=5116';

type PageType = '멤버십' | '멤버십 변경' | '멤버십 변경 ios' | '코인 정보';

When(`{string} 화면 방문`, (page: PageType) => {
  const path =
    page === '멤버십'
      ? '/'
      : page === '멤버십 변경'
      ? '/change-membership'
      : page === '멤버십 변경 ios'
      ? '/change-membership/ios'
      : page === '코인 정보'
      ? '/coin'
      : '/';

  const coinSummary =
    path === '/coin'
      ? '&summary={"basic": 1350, "add": 100, "total": 1450}'
      : '';

  cy.visit(`${path}/${baseQuery}${coinSummary}`);
});

When(`{string}에서 멤버십 화면 방문`, (source = '') => {
  const from =
    source === '선생님께 질문하기'
      ? 'ask_teacher'
      : source === '코인 충전하기'
      ? 'send_coins'
      : '';

  cy.visit(`/${baseQuery}${from ? `&opened_from=${from}` : ''}`);
});

When(`Android {string} 버전으로 멤버십 화면 방문`, (appVersion = '') => {
  const query = `?locale=ko_KR&device_type=1&app_version=${appVersion}`;

  cy.visit(`/${query}`);
});
