import { AvatarComponent, getDefaultWallets, lightTheme, RainbowKitProvider as RainbowProvider } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

type RainbowKitProviderType = {
  children: React.ReactNode;
};

const alchemyProviderApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ETH_MAIN;
const { chains, provider } = configureChains([mainnet, polygon], [alchemyProvider({ apiKey: alchemyProviderApiKey }), publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Koios app-portal',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const CustomAvatar: AvatarComponent = ({ ensImage, size }) => {
  const pfp = ensImage || '/assets/images/placeholders/placeholder-titan.png';
  return <Image src={pfp} alt="Avatar" width={size} height={size} style={{ borderRadius: 4 }} />;
};

export const RainbowKitProvider = ({ children }: RainbowKitProviderType) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Prevents SSR hydration issues with RainbowKit
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <WagmiConfig client={wagmiClient}>
          <RainbowProvider
            chains={chains}
            avatar={CustomAvatar}
            theme={lightTheme({
              accentColor: '#512C9E',
              accentColorForeground: 'white',
              borderRadius: 'small',
              fontStack: 'system'
            })}
          >
            {children}
          </RainbowProvider>
        </WagmiConfig>
      ) : (
        <React.Fragment />
      )}
    </>
  );
};
