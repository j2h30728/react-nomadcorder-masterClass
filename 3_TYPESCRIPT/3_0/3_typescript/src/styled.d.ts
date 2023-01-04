import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    //내 테마가 어떻게 보일지 설명할 부분(형태,, 색상 등)
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
