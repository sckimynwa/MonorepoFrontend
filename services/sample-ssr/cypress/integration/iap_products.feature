Feature: KR 특수한 케이스에 대해 IAP 상품과 PG 상품 분기

  Scenario: 안드 5122버전 미만으로 접속시, KR 멤버십 화면에서 PG 상품 표시
    Given 구독 없는 사용자
    When Android "5121" 버전으로 멤버십 화면 방문
    Then IAP 콴다 질문 베이직 옵션 안 보임

  Scenario: 안드 5122버전 이상으로 접속시, KR 멤버십 화면에서 IAP 상품 표시
    Given 구독 없는 사용자
    When Android "5122" 버전으로 멤버십 화면 방문
    Then IAP 콴다 질문 베이직 옵션 보임

  Scenario: PG 상품 구독 중인 유저가 멤버십 변경 화면 접속시, PG 상품 표시
    Given "베이직 멤버십" 구독한 사용자
    When "멤버십 변경" 화면 방문
    Then IAP 콴다 질문 베이직 옵션 안 보임

  Scenario: IAP 상품 구독 중인 유저가 멤버십 변경 화면 접속시, IAP 상품 표시
    Given "IAP 베이직 멤버십" 구독한 사용자
    When "멤버십 변경" 화면 방문
    Then IAP 콴다 질문 베이직 옵션 보임
