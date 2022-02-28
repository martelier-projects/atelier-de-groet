export interface MenuItem {
  label: string
  pageLink: string
}

export default interface ComponentInterface {
  mainNavigationItems: MenuItem[]
  secondaryNavigationItems: MenuItem[]
  translationUrl: string
  language: string
}
