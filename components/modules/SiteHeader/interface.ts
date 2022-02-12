import type { MenuItem } from "../../../content/menu-items-interface";

export default interface ComponentInterface {
    mainNavigationItems: MenuItem[];
    secondaryNavigationItems: MenuItem[];
    translationUrl: string;
    language: string;
}
