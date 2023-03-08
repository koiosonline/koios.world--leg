import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBar } from '../../Search/SearchBar';
import { DrawerLink } from './DrawerLink';
import { drawerNavigation, DrawerNavigationItemType } from './static/drawerNavigation';

type DrawerType = {
  isUnfolded?: boolean;
  isMobile?: boolean;
};

export const Drawer = (props: DrawerType) => {
  const { isUnfolded, isMobile } = props;
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;
  const handleSearch = async (searchTerm: string) => router.push(searchTerm);

  return (
    <nav
      className={`fixed z-40 flex h-full min-h-screen w-72 flex-col bg-white text-gray-400 duration-300 ease-in-out ${
        isMobile ? 'pt-20' : 'pt-0'
      } ${isUnfolded ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {!isMobile && (
        <Link href="/" className="container mx-auto mt-16 mb-10 w-fit">
          <Image src="assets/images/logo/koios-logo.svg" alt="Koios Logo" width={150} height={100} />
        </Link>
      )}

      {isMobile && <SearchBar onSearch={handleSearch} placeholder="Search on public key..." className="mx-4 py-2" />}

      <div className="container overflow-y-auto">
        {Object.keys(drawerNavigation).map((category) => (
          <div key={category} className="mt-8">
            {category !== 'NoCategory' && <h3 className="mb-2 text-xs">{category}</h3>}

            <ul>
              {drawerNavigation[category].map((item: DrawerNavigationItemType) => (
                <li key={item.name}>
                  <DrawerLink href={item.href} icon={item.icon} isActive={isActive}>
                    {item.name}
                  </DrawerLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mt-auto border-t-2 border-slate-200 py-2">
        <DrawerLink href="/settings" icon="gear" isActive={isActive}>
          Settings
        </DrawerLink>
      </div>
    </nav>
  );
};
