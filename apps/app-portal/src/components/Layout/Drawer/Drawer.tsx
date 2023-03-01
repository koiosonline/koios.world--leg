import { Icon } from '@koios-world/shared-ui';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBar } from '../../Search/SearchBar';
import { drawerNavigation } from './static/drawerNavigation';

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
      className={`fixed z-40 flex min-h-screen w-72 flex-col bg-white duration-300 ease-in-out ${isMobile ? 'pt-20' : 'pt-0'} ${
        isUnfolded ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {!isMobile && (
        <Link href="/" className="container mx-auto mt-16 mb-10 w-fit">
          <Image src="assets/images/logo/koios-logo.svg" alt="Koios Logo" width={150} height={100} />
        </Link>
      )}

      {isMobile && <SearchBar onSearch={handleSearch} placeholder="Search on public key..." />}

      <div className="container">
        {Object.keys(drawerNavigation).map((category) => (
          <div key={category} className="mt-8 text-gray-400">
            {category !== 'NoCategory' && <h3 className="mb-2 text-xs">{category}</h3>}

            <ul>
              {drawerNavigation[category].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 rounded p-3 text-sm font-semibold duration-150 ease-in-out ${
                      isActive(item.href) ? 'bg-pink-50 text-primary-dark' : ''
                    } hover:bg-pink-50 hover:text-primary-dark`}
                  >
                    <Icon name={item.icon} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mt-auto border-t-2 border-slate-200 py-6">
        <Link href="/settings" className="mx-auto flex  w-fit items-center gap-2">
          <Icon name="gear" />
          Settings
        </Link>
      </div>
    </nav>
  );
};
