import { Icon, IconNames } from '@koios-world/shared-ui';
import Link from 'next/link';

type DrawerLinkType = {
  href: string;
  icon: (typeof IconNames)[number];
  isActive: (href: string) => boolean;
  children: React.ReactNode;
};

export const DrawerLink = (props: DrawerLinkType) => {
  const { href, icon, isActive, children } = props;
  const activeClass = isActive(href) ? 'bg-violet-400/10 text-primary-dark' : '';

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 rounded p-3 text-sm font-semibold duration-150 ease-in-out hover:bg-violet-400/10 hover:text-primary-dark ${activeClass}`}
    >
      <Icon name={icon} />
      {children}
    </Link>
  );
};
