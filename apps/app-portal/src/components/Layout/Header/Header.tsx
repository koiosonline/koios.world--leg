import { Icon } from '@koios-world/shared-ui';
import { SearchBar } from '../../Search/SearchBar';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type HeaderType = {
  isUnfolded?: boolean;
  toggleDrawer?: () => void;
};

export const Header = (props: HeaderType) => {
  const router = useRouter();
  const { isUnfolded, toggleDrawer } = props;
  const handleSearch = async (searchTerm: string) => router.push(searchTerm);

  return (
    <header className={`bg-white fixed border-b border-slate-200 ease-in-out duration-300 ${isUnfolded ? 'ml-72 w-[calc(100%-theme(space.72))]' : 'w-full'}`}>
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex gap-6">
          <div className="block bg-slate-100 p-2 rounded" onClick={toggleDrawer}>
            <Icon name={isUnfolded ? 'menu-fold' : 'menu-unfold'} />
          </div>
          <SearchBar onSearch={handleSearch} placeholder="Search on public key..." />
        </div>

        <div>
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </header>
  );
};
