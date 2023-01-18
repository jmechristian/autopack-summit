import React from 'react';

const denyRegistration = () => {
  return (
    <div className='w-screen h-screen bg-ap-darkblue flex justify-center items-center'>
      <div className='pt-12'>
        <div
          style={{
            width: '600px',
            height: 0,
            paddingBottom: '56%',
            position: 'relative',
          }}
        >
          <iframe
            src='https://giphy.com/embed/l3V0px8dfZmmfwize'
            width='100%'
            height='100%'
            style={{ position: 'absolute' }}
            frameBorder='0'
            class='giphy-embed'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default denyRegistration;
