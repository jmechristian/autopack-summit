import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import { Amplify, Analytics } from 'aws-amplify';
import { createClient } from 'next-sanity';
import { Provider } from 'react-redux';
import { store } from '../features/store';
import { DefaultSeo } from 'next-seo';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

Analytics.autoTrack(['pageView', 'events'], {
  enable: true,
  eventName: 'pageView',
  type: 'SPA',
  getUrl: () => {
    // the default function
    return window.location.origin + window.location.pathname;
  },
});

function MyApp({ Component, pageProps }) {
  const client = createClient({
    projectId: 'h72r2zbr',
    dataset: 'aps',
    apiVersion: '2022-11-20',
    useCdn: false,
  });

  return (
    <>
      <DefaultSeo
        title='Automotive Packaging Summit'
        description='The premier open forum for OEMs, Tier 1 Part Suppliers and Packaging Solution Providers to discuss packaging innovations and challenges.'
      />
      <Provider store={store}>
        <Layout client={client}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
