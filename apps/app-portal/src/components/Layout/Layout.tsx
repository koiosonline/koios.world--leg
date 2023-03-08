import { useSizes } from '@koios-world/shared-ui';
import { useEffect, useState } from 'react';
import defaultTheme from 'tailwindcss/defaultTheme';
import { Drawer } from './Drawer/Drawer';
import { Header } from './Header/Header';

type LayoutType = {
  children: React.ReactNode;
};

const koiosDrawerSettingKey = 'KoiosApp.DrawerIsUnfolded';

export const Layout = ({ children }: LayoutType) => {
  const storedDrawerSetting = JSON.parse(localStorage.getItem(koiosDrawerSettingKey));
  const [isUnfolded, setIsUnfolded] = useState(storedDrawerSetting);

  const sizes = useSizes((width) => ({
    isMobile: width < parseInt(defaultTheme.screens.lg),
  }));
  
  const toggleDrawer = () => {
    setIsUnfolded(() => !isUnfolded);
    localStorage.setItem(koiosDrawerSettingKey, JSON.stringify(!isUnfolded));
  };

  
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < parseInt(defaultTheme.screens.lg);
      const shouldBeUnfolded = !isMobile;
      if (isUnfolded !== shouldBeUnfolded) {
        toggleDrawer()
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnfolded]);
  

  return (
    <>
      <Header isUnfolded={isUnfolded} toggleDrawer={toggleDrawer} isMobile={sizes.isMobile} />
      <Drawer isUnfolded={isUnfolded} isMobile={sizes.isMobile} />
      <main
        className={`flex flex-col grow p-4 mt-12 ease-in-out duration-300 break-words ${
          isUnfolded && !sizes.isMobile ? 'ml-72  w-[calc(100%-theme(space.72))]' : ''
        }`}
      >
        {children}
      </main>
    </>
  );
};
