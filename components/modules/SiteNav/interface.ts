import type { MenuItem } from '../SiteHeader/interface'

export default interface ComponentInterface {
  menuItems: MenuItem[]
  type?: 'primary' | 'secondary'
}
