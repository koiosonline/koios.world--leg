import { useState } from 'react';
import { Drawer } from './Drawer/Drawer';
import { Header } from './Header/Header';

type LayoutType = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutType) => {
  const [isUnfolded, setIsUnfolded] = useState(true);
  const toggleDrawer = () => setIsUnfolded(!isUnfolded);

  return (
    <>
      <Header isUnfolded={isUnfolded} toggleDrawer={toggleDrawer}  />
      <Drawer isUnfolded={isUnfolded} />
      <main className={`flex flex-col grow p-4 mt-12 ease-in-out duration-300 ${isUnfolded ? 'ml-72  w-[calc(100%-theme(space.72))]' : ''}`}>{children}</main>
    </>
  );
};