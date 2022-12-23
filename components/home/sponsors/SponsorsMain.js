import React from 'react';
import SponsorMainBody from './SponsorMainBody';
import SponsorsMainHead from './SponsorsMainHead';

const SponsorsMain = ({ sponsors }) => {
  const filterTitleSponsor = () => {
    return sponsors.filter((item) => item.teir === 'title');
  };

  return (
    <div className='overflow-hidden'>
      <SponsorsMainHead titleSponsor={filterTitleSponsor()} />
      <SponsorMainBody sponsors={sponsors} />
    </div>
  );
};

export default SponsorsMain;
