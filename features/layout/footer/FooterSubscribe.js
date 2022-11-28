import React, { useState } from 'react';
import FooterSocials from './FooterSocials';

const FooterSubscribe = () => {
  const [isEmail, setIsEmail] = useState('');
  return (
    <div className='flex flex-col gap-3 px-6 w-full'>
      <div>
        <h4 className=' tracking-widest uppercase font-bold text-white'>
          Stay in the Know
        </h4>
      </div>
      <form>
        <div className='flex'>
          <input
            type='email'
            name='subscribe'
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
            placeholder='Your@Email.com'
            className='flex-grow bg-slate-300 border border-ap-yellow'
          />
          <button type='submit'>
            <div className='bg-ap-yellow text-white py-3 px-4'>Subscribe</div>
          </button>
        </div>
      </form>
      <div>
        <p className='text-xs text-white/70'>
          By signing up you indicate you have read and agree to our Terms of
          Use. Packaging School will always respect your privacy.
        </p>
      </div>
      <FooterSocials />
    </div>
  );
};

export default FooterSubscribe;
