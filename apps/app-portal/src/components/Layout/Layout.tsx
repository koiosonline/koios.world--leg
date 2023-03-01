import { useSize } from '@koios-world/shared-ui';
import { useState } from 'react';
import defaultTheme from 'tailwindcss/defaultTheme';
import { Drawer } from './Drawer/Drawer';
import { Header } from './Header/Header';

type LayoutType = {
  children: React.ReactNode;
};

const koiosDrawerSettingKey = 'KoiosApp.DrawerIsUnfolded';

export const Layout = ({ children }: LayoutType) => {
  const storedDrawerSetting = JSON.parse(localStorage.getItem(koiosDrawerSettingKey));
  const [isUnfolded, setIsUnfolded] = useState(storedDrawerSetting !== false);
  const { width } = useSize();
  const isMobile = width < parseInt(defaultTheme.screens.lg);
  
  const toggleDrawer = () => {
    setIsUnfolded(() => !isUnfolded);
    localStorage.setItem(koiosDrawerSettingKey, JSON.stringify(!isUnfolded));
  };

  return (
    <>
      <Header isUnfolded={isUnfolded} toggleDrawer={toggleDrawer} isMobile={isMobile} />
      <Drawer isUnfolded={isUnfolded} isMobile={isMobile} />
      <main
        className={`flex flex-col grow p-4 mt-12 ease-in-out duration-300 break-words ${
          isUnfolded && !isMobile ? 'ml-72  w-[calc(100%-theme(space.72))]' : ''
        }`}
      >
        {children}
      </main>
    </>
  );
};
