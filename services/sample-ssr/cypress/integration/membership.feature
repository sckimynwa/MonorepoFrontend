Feature: 코인 멤버심

  Scenario: 멤버십 화면 조회, 미인증 상태
    Given 인증되지 않은 사용자
    When "멤버십" 화면 방문
    Then 멤버십 옵션 안 보임

  Scenario: 멤버십 화면 조회, 미구독 상태
    Given 구독 없는 사용자
    When Android "5115" 버전으로 멤버십 화면 방문
    Then 멤버십 옵션 보임
    And "프리미엄" 구독 옵션 선택됨
    And 결제 CTA 활성화

  Scenario: 멤버십 화면 조회, 미구독 상태, '코인 충전하기'로 진입
    Given 구독 없는 사용자
    When "코인 충전하기"에서 멤버십 화면 방문
    Then 코인 부족 배너 안 보임

  Scenario: 멤버십 화면 조회, 미구독 상태, '선생님께 질문하기'로 진입
    Given 구독 없는 사용자
    When "선생님께 질문하기"에서 멤버십 화면 방문
    Then 코인 부족 배너 보임

  Scenario: 일반 멤버십 구독 상태 조회
    Given "플러스 멤버십" 구독한 사용자
    When "멤버십" 화면 방문
    Then 멤버십 상태 "플러스" 구독중으로 보임
    And 코인 내역 CTA 버튼 보임
    And 멤버십 변경 CTA 버튼 보임

  Scenario: 무제한 멤버십 구독 상태 조회
    Given "무제한 3개월" 구독한 사용자
    When "멤버십" 화면 방문
    Then 멤버십 변경 CTA 버튼 안 보임

  Scenario: 코인 충전 옵션 조회
    Given "플러스 멤버십" 구독한 사용자
    When "멤버십" 화면 방문
    Then 코인 충전 옵션 보임
    And "5,000" 코인 옵션 선택됨
    And 결제 CTA 활성화