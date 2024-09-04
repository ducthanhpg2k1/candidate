/* eslint-disable react/no-unknown-property */
import '../styles/globals.scss';
import '../styles/tailwind.css';

import { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';

import ErrorBoundary from '@components/ErrorBoundary';
import AppLayout from '@layout/AppLayout';

import nextI18nConfig from '../next-i18next.config';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const SEO: DefaultSeoProps = {
  titleTemplate: 'Aeon Việt Nam',
  defaultTitle: 'Aeon Việt Nam',
  description: 'Tuyển dụng', // TODO: Update later
  openGraph: {
    title: 'Aeon Việt Nam',
    description: 'Tuyển dụng', // TODO: Update later
    images: [
      {
        url: 'banner-1.png',
        width: 800,
        height: 400,
        alt: 'Aeon Việt Nam Banner Alt',
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Maby Client' />
        <meta name='description' content='Maby Client' />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no'
        />
      </Head>
      <DefaultSeo {...SEO} />

      <ErrorBoundary>
        <ProgressBar height='2px' color='#B31E8D' options={{ showSpinner: false }} shallowRouting />
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </ErrorBoundary>
    </>
  );
}

// @ts-ignore
export default appWithTranslation(MyApp, nextI18nConfig);
