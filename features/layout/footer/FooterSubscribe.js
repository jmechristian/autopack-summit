import React, { useState } from 'react';
import FooterSocials from './FooterSocials';
import {
  ActiveCampaignInputs,
  handleActiveCampaignSubmit,
} from 'active-campaign-react';

const FooterSubscribe = () => {
  const [isEmail, setIsEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const subscribeFormHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Hidden field key/values.
    formData.append('u', '84');
    formData.append('f', '84');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', '0ee28ec820474d5816fcf6b09eb23289');

    formData.append('email', isEmail);

    try {
      const sendEmail = await fetch(
        'https://packagingschool42200.activehosted.com/proc.php',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
      console.log(sendEmail);
      setHasSubmitted(true);
      setIsEmail('');
    } catch (err) {
      console.log('Request failed', err);
    }
  };

  return (
    <div className='flex flex-col gap-3 px-6 xl:px-0 w-full'>
      <div>
        <h4 className=' tracking-widest uppercase font-bold text-white'>
          Stay in the Know
        </h4>
      </div>
      <form onSubmit={subscribeFormHandler}>
        <div className='flex'>
          <input
            type='text'
            required
            name='email'
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
            placeholder='Your@Email.com'
            className='flex-grow bg-slate-300 border border-ap-yellow'
          />
          <button type='submit'>
            <div className='bg-ap-yellow text-white py-3 px-4'>
              {hasSubmitted ? 'Sent!' : 'Subscribe'}
            </div>
          </button>
        </div>
      </form>
      {/* <div className='_form_84'></div> */}
      <div>
        <p className='text-xs text-white/70'>
          By signing up you indicate you have read and agree to our Terms of
          Use. Packaging School will always respect your privacy.
        </p>
      </div>
      <FooterSocials />
      {/* <Script src='https://packagingschool42200.activehosted.com/f/embed.php?id=84' /> */}
    </div>
  );
};
export default FooterSubscribe;
