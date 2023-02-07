// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    borderColor: string;
    btColor: string;
    textColor: string;
  }
}
