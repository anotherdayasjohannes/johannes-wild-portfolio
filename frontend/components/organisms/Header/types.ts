export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logo?: {
    href?: string;
    width?: number;
    height?: number;
  };
  navLinks?: NavLink[];
  sticky?: boolean;
  transparent?: boolean;
  showLanguageSwitcher?: boolean;
  className?: string;
}



