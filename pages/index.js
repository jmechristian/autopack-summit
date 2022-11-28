import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { createClient } from 'next-sanity';

export default function Home() {
  return (
    <div>
      <div className='text-5xl font-bold font-oswald text-ap-yellow py-24'>
        Hello World!
      </div>
    </div>
  );
}

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: false,
});

// export async function getStaticProps() {
//   const speakers = await client.fetch(`*[_type == "speaker" ]`);

//   return {
//     props: {
//       speakers,
//     },
//   };
// }
