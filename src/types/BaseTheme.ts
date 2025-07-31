// Navbar
export type NavbarName = 'home' | 'chat' | 'profile' | 'contact' | 'bookmark' | 'for-you' | 'notification' | 'settings' | 'about-us' | 'login' | 'register'

export interface NavbarItem {
  name: NavbarName,
  label: string,
  icon: string,
  hideNavbar: boolean,
  route?: string,
  index?: number,
  children?: NavbarItem[]
}

//  Tooltip
export type ItemPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
