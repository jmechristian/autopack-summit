import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import { Amplify, Analytics } from 'aws-amplify';
import { createClient } from 'next-sanity';
import { Provider } from 'react-redux';
import { store } from '../features/store';
import { DefaultSeo } from 'next-seo';
import { CookiesProvider } from 'react-cookie';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  const client = createClient({
    projectId: 'h72r2zbr',
    dataset: 'aps',
    apiVersion: '2022-11-20',
    useCdn: false,
  });

  const analyticsConfig = {
    AWSPinpoint: {
      // Amazon Pinpoint App Client ID
      appId: '196d27043c7a4001aa96a55edb90d78e',
      // Amazon service region
      region: 'us-east-1',
      mandatorySignIn: false,
    },
  };

  Analytics.configure(analyticsConfig);

  return (
    <>
      <DefaultSeo
        title='Automotive Packaging Summit'
        description='The premier open forum for OEMs, Tier 1 Part Suppliers and Packaging Solution Providers to discuss packaging innovations and challenges.'
        openGraph={{
          type: 'website',
          url: 'https://autopacksummit.com',
          description:
            'The premier open forum for OEMs, Tier 1 Part Suppliers and Packaging Solution Providers to discuss packaging innovations and challenges.',
          images: [
            {
              url: 'https://apsmedia.s3.amazonaws.com/images/aps_placeholder.png',
              width: 800,
              height: 600,
              alt: 'Automotive Packaging Summit',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <CookiesProvider>
        <Provider store={store}>
          <Layout client={client}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
