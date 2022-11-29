import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { createClient } from 'next-sanity';
import HeroMain from '../components/home/HeroMain';

export default function Home({ homepageData }) {
  return (
    <div className='flex flex-col'>
      <HeroMain data={homepageData} />
    </div>
  );
}

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: false,
});

export async function getStaticProps() {
  const homepageData = await client.fetch(
    `*[_type == "homepage" && version == 1]`
  );

  return {
    props: {
      homepageData,
    },
  };
}
