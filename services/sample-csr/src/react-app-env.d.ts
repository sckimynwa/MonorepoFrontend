/// <reference types="react-scripts" />

interface NativeBridgeInterface {
  postMessage(message: string): void;
}

interface Window {
  git: string;
  /**
   * Global Methods
   * https://www.notion.so/mathpresso/Global-Method-Native-Bridge-Spec-5f6b79094fdd4f3eb06df261a5e273ad
   */

  /**
   * 클라이언트에서 멤버쉽 결제가 완료되고 나서 웹뷰에게 전달하는 메시지
   * 해당 메시지를 받으면 멤버쉽 상태를 갱신한다.
   */
  onPremiumPurchased(): void;
  onBackPressed?(): void;
  QandaWebView?: NativeBridgeInterface;
  webkit?: { messageHandlers?: { Qanda?: NativeBridgeInterface } };
}
