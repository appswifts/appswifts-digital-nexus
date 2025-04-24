import React from 'react';
import { AppProps } from 'next/app';
import { SiteProvider } from '@/context/SiteContext';
import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <SiteProvider>
        <Component {...pageProps} />
      </SiteProvider>
    </AuthProvider>
  );
}

export default MyApp;
