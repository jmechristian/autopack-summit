import React from 'react';
import Head from 'next/head';

const Meta = ({ title, image, description, keywords }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
      {description && <meta name='description' content={description} />}
      {keywords && <meta name='keywords' content={keywords} />}
      <meta name='robots' content='index, follow' />
      <meta
        name='google-site-verification'
        content='-qROnzDvMdQ_ax8dfHW8yBrU790beKxuKKdYl94dhRk'
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      {description && <meta property='og:description' content={description} />}
      {image && <meta property='og:image' content={image} />}
    </Head>
  );
};

export default Meta;
