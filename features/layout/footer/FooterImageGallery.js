import React from 'react';

const FooterImageGallery = ({ images }) => {
  return (
    <div className='grid grid-flow-col gap-3 overflow-scroll' id='scrollers'>
      {images &&
        images.map((img, i) => (
          <div
            className='w-40 md:w-52 h-56 md:h-60 grayscale opacity-50'
            style={{
              backgroundImage: `url(${img.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            key={img._key}
          ></div>
        ))}
    </div>
  );
};

export default FooterImageGallery;
