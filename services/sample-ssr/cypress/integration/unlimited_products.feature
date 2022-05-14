Feature: 무제한 질문권 상품

  Background:
    Given 구독 없는 사용자

  Scenario: 무제한 질문권 옵션 조회
    When Android "5116" 버전으로 멤버십 화면 방문
    Then 무제한 질문권 옵션 보임
    And "1개월" 무제한 질문권 옵션 활성화

  Scenario: 무제한 질문권 옵션 선택
    When Android "5116" 버전으로 멤버십 화면 방문
    Then 무제한 질문권 옵션 보임
    When "3개월" 무제한 질문권 옵션 클릭
    Then "3개월" 무제한 질문권 옵션 활성화
    And 결제 CTA 활성화

  Scenario: 무제한 질문권 구독 상태 조회
    Given "무제한 질문 3개월권" 구독한 사용자
    When "멤버십" 화면 방문
    Then 멤버십 상태 "무제한 질문 3개월권" 구독중으로 보임
    And 멤버십 변경 CTA 버튼 안 보임
    And 코인 내역 CTA 버튼 안 보임
    And 결제 CTA 활성화
