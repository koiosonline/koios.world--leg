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
    <nav className={`bg-white h-full w-72 fixed ease-in-out duration-1000 ${isUnfolded ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full container">
        <Link href="/" className="w-fit mx-auto mt-16 mb-16">
          <Image src="assets/images/logo/koios-logo.svg" alt="Koios Logo" width={150} height={100} />
        </Link>

        {navItems.noCategory.map((item) => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}

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
    </nav>
  );
};
