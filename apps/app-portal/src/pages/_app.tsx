import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Layout } from '../components/Layout/Layout';
import { RainbowKitProvider } from '../providers/RainbowKitProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app-portal! </title>
      </Head>

      <RainbowKitProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </>
  );
}

export default CustomApp;
