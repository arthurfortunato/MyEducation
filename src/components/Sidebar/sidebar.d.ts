import "styled-components";
import { Sidebar } from "./Sidebar";

declare module "styled-components" {
  type ThemeType = typeof Sidebar;
  export interface DefaultTheme extends ThemeType {}
}
