export interface MenuItem {
  path: string;
  label: string;
}

export const menuItems: MenuItem[] = [
  { path: '/about', label: 'About' },
  { path: '/skill', label: 'Skills' },
  { path: '/project', label: 'Projects' },
  { path: '/work', label: 'Work' },
  { path: '/contact', label: 'Contact' },
];
