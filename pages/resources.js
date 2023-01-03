import React from 'react';
import { createClient } from 'next-sanity';
import { motion } from 'framer-motion';
import ResourceGrid from '../components/resources/ResourceGrid';
import AdvisoryBoard from '../components/resources/AdvisoryBoard';

const resources = ({ resourceData }) => {
  return (
    <div className='flex flex-col'>
      <div className='h-16 md:h-20 lg:h-24 bg-ap-darkblue'></div>
      <div className='pt-12 md:pt-16 lg:pt-20 xl:pt-20 xl:pb-12 flex flex-col gap-8 md:gap-12 xl:gap-12'>
        <div className='flex flex-col items-center'>
          <motion.div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
            Industry
          </motion.div>
          <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
            Resources
          </motion.div>
        </div>
        <ResourceGrid advisors={resourceData} />
        <div className='hidden lg:block'>
          <AdvisoryBoard
            advisors={resourceData}
            headline={'Board Members'}
            subheadline={'AutoPack Summit 2022'}
          />
        </div>
      </div>
    </div>
  );
};

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: false,
});

export async function getStaticProps() {
  const resourceData = await client.fetch(
    `*[_type == "advisory_board"] | order(name asc)`
  );

  return {
    props: {
      resourceData,
    },
  };
}

export default resources;
