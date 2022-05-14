@snapshots
Feature: 화면 스냅샷

  # 스냅샷 테스트는 CI 환경과 cy:open 환경에서는 사용하지 않습니다.
  # (브라우저 환경에 따라 렌더되는 화면이 미묘하게 다릅니다)
  # 개발 단계에서 화면 변화를 비교하기 위해 사용합니다.
  # 이 외의 환경에서 테스트 시 런 스크립트의 -e TAGS 를 사용해서 @snapshots을 제외시켜주세요.
  # 예 : cypress run -e TAGS="not (@skip or @snapshots)"

  # 스냅샷 테스트 사용 방법 :
  # 소스코드의 변경이 기존 화면에 시각적인 side effect를 유발하는지 확인하기 위한 테스트입니다.
  # 스냅샷 테스트 커맨드를 실행시킵니다 : yarn cy:snaps
  # visual regression 이 발생했다면 테스트가 실패하고
  # /cypress/snapshots 폴더에 시각 diff 를 보여주는 파일이 생깁니다.

  # 만약 바뀌어야 될 화면이 맞다면,
  # 해당 스냅샷 파일을 삭제하고 cy:snaps 를 다시 돌려서 새로운 스냅샷 파일을 생성합니다.
  # 재생성 후 변경된 스냅샷 파일은 커밋해주세요.

  Scenario: 멤버십 변경 ios 화면 조회
    When "멤버십 변경 ios" 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 코인 정보 화면 조회
    When "코인 정보" 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 멤버십 화면 조회, 미인증 상태
    Given 인증되지 않은 사용자
    When "멤버십" 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 멤버십 화면 조회, 미구독 상태
    Given 구독 없는 사용자
    When Android "5111" 버전으로 멤버십 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 멤버십 화면 조회, 미구독 상태, 스타터팩 대상
    Given 스타터팩 대상 사용자
    When Android "5111" 버전으로 멤버십 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 멤버십 화면 조회, 미구독 상태, 무제한 질문권 대상
    Given 구독 없는 사용자
    When "멤버십" 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 멤버십 화면 조회, 멤버십 구독 상태
    Given "플러스 멤버십" 구독한 사용자
    When "멤버십" 화면 방문
    Then 화면 스냅샷 비교 통과

  Scenario: 멤버십 변경 화면 조회, 멤버십 구독 상태
    Given "플러스 멤버십" 구독한 사용자
    When "멤버십 변경" 화면 방문
    Then 화면 스냅샷 비교 통과