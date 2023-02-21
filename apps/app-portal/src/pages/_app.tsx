import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/styles/globals.css';
import { Layout } from '../components/Layout/Layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app-portal! </title>
      </Head>

      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
