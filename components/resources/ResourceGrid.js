import React from 'react';

const ResourceGrid = () => {
  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-1'>
        <div className='flex flex-col'>
          <div className='aspect-square w-full bg-ap-blue'></div>
        </div>
      </div>
    </div>
  );
};

export default ResourceGrid;
