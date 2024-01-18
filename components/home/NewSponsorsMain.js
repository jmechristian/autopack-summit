import React from 'react';
import SponsorMainBody from './sponsors/SponsorMainBody';
import NewSponsorsMainHead from './sponsors/NewSponsorMainHead';

const NewSponsorsMain = ({ sponsors }) => {
  const filterTitleSponsor = () => {
    return sponsors.filter((item) => item.teir === 'title');
  };

  return (
    <div className='overflow-hidden'>
      <NewSponsorsMainHead titleSponsor={filterTitleSponsor()} />
      <SponsorMainBody sponsors={sponsors} />
    </div>
  );
};

export default NewSponsorsMain;
