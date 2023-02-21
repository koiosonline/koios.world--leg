import { Icon } from '@koios-world/shared-ui';

type HeaderType = {
  isUnfolded?: boolean;
  toggleDrawer?: () => void;
};

export const Header = (props: HeaderType) => {
  const { isUnfolded, toggleDrawer } = props;

  return (
    <header className={`bg-white fixed border-b border-slate-200 w-full ease-in-out duration-1000 ${isUnfolded ? 'ml-72' : ''}`}>
      <div className="py-2 px-4">
        <div className="block bg-slate-100 p-2 w-fit" onClick={toggleDrawer}>
          <Icon name={isUnfolded ? 'menu-fold' : 'menu-unfold'} />
        </div>
      </div>
    </header>
  );
};
