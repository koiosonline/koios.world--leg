import { Icon } from '@koios-world/shared-ui';
import { SearchBar } from '../../Search/SearchBar';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import Image from 'next/image';

type HeaderType = {
  isUnfolded?: boolean;
  toggleDrawer?: () => void;
  isMobile?: boolean;
};

export const Header = (props: HeaderType) => {
  const { isUnfolded, toggleDrawer, isMobile } = props;
  const router = useRouter();
  
  const handleSearch = async (searchTerm: string) => router.push(searchTerm);

  return (
    <header
      className={`z-50 bg-white fixed border-b border-slate-200 ease-in-out duration-300 h-14 flex flex-col justify-center 
      ${isUnfolded && !isMobile ? 'ml-72 w-[calc(100%-theme(space.72))]' : 'w-full'}`}
    >
      <div className="flex justify-between items-center px-4 gap-4">
        <div className={`flex gap-3`}>
          <div className="block bg-slate-100 p-2 rounded" onClick={toggleDrawer}>
            <Icon name={isUnfolded ? 'menu-fold' : 'menu-unfold'} />
          </div>

          {isMobile && (
            <Link href="/" className="w-fit my-auto">
              <Image src="assets/images/logo/koios-logo.svg" alt="Koios Logo" width={90} height={100} />
            </Link>
          )}
          {!isMobile && <SearchBar onSearch={handleSearch} placeholder="Search on public key..." />}
        </div>

        <div>
          <ConnectButton
            label="Sign in"
            accountStatus={isMobile ? 'avatar' : 'full'}
            chainStatus={isMobile ? 'icon' : 'full'}
            showBalance={false}
          />
        </div>
      </div>
    </header>
  );
};
