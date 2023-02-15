import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    darkBgColor: string;
    bgColor: string;
    accentColor: string;
    bgOverviewColor: string;
  }
}
