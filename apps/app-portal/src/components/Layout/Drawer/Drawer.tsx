import { Icon } from '@koios-world/shared-ui';
import Image from 'next/image';
import Link from 'next/link';

type DrawerType = {
  isUnfolded?: boolean;
};

const navItems = {
  noCategory: [
    {
      name: 'Dashboard',
      href: '/'
    },
    {
      name: 'My profile',
      href: '/my-profile'
    }
  ],
  Learn: [
    {
      name: 'Courses',
      href: '/courses'
    },
    {
      name: 'Join community',
      href: '/join-community'
    }
  ]
};

export const Drawer = (props: DrawerType) => {
  const { isUnfolded } = props;

  return (
    <nav
      className={`bg-white flex flex-col min-h-screen w-72 fixed ease-in-out duration-300 ${
        isUnfolded ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <Link href="/" className="w-fit mx-auto mt-16 mb-16 container">
        <Image src="assets/images/logo/koios-logo.svg" alt="Koios Logo" width={150} height={100} />
      </Link>

      <div className='container'>
        {Object.keys(navItems).map((category) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{category}</h3>
            <ul className="mt-3 space-y-1">
              {navItems[category].map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-auto container py-6 border-t-2 border-slate-200">
        <Link href="/settings" className="flex mx-auto  w-fit items-center gap-2">
          <Icon name="gear" />
          Settings
        </Link>
      </div>
    </nav>
  );
};
