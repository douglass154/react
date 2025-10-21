
// Styled Components: Theming
import { ThemeType } from "./theme";

declare module "styled-components" {
   export interface DefaultTheme extends ThemeType {}
}