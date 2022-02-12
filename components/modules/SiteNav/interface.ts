import type { MenuItem } from "../../../content/menu-items-interface";

export default interface ComponentInterface {
    menuItems: MenuItem[];
    type?: "primary" | "secondary";
}
