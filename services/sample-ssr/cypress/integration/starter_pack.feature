Feature: 스타터팩 구독 상품

  Background:
    Given 스타터팩 대상 사용자

  Scenario: 스타터팩 옵션 조회
    When "멤버십" 화면 방문
    Then 스타터팩 광고 배너 보임
    And 스타터팩 옵션 보임
    And 스타터팩 타이머 보임

  Scenario: 스타터팩 옵션 선택
    When "멤버십" 화면 방문
    Then 스타터팩 옵션 보임
    When "플러스" 스타터팩 옵션 클릭
    Then "플러스" 스타터팩 옵션 활성화
    And 결제 CTA 활성화