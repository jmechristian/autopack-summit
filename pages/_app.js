import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import { createClient } from 'next-sanity';
import { Provider } from 'react-redux';
import { store } from '../features/store';

function MyApp({ Component, pageProps }) {
  const client = createClient({
    projectId: 'h72r2zbr',
    dataset: 'aps',
    apiVersion: '2022-11-20',
    useCdn: false,
  });

  return (
    <Provider store={store}>
      <Layout client={client}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
