import React, { useState } from 'react';

const Page = () => {
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
    <>
      <div className='w-full h-24 bg-ap-darkblue'></div>
      <div className='overflow-hidden bg-white py-44'>
        <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
            <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
              <h2 className='text-3xl font-bold font-oswald uppercase tracking-tight text-slate-700 sm:text-4xl'>
                Stay up to date with all things{' '}
                <span>Automotive Packaging Summit</span>
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-600'>
                Subscribe below to receive email updates with the latest news
                and updates regarding Automotive Packaging Summit.
              </p>
              <form onSubmit={subscribeFormHandler} className='mt-9'>
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

              <div>
                <p className='text-xs text-white/70'>
                  By signing up you indicate you have read and agree to our
                  Terms of Use. Packaging School will always respect your
                  privacy.
                </p>
              </div>
            </div>
            <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
              <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                <img
                  src='https://apsmedia.s3.amazonaws.com/images/IMG_5975.webp'
                  alt='Automotive Packaging Summit'
                  className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
                <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                  <img
                    src='https://apsmedia.s3.amazonaws.com/images/IMG_2020.webp'
                    alt='Automotive Packaging Summit'
                    className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                  <img
                    src='https://apsmedia.s3.amazonaws.com/images/IMG_3545.webp'
                    alt='Automotive Packaging Summit audience'
                    className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                  <img
                    src='https://apsmedia.s3.amazonaws.com/images/IMG_5966.webp'
                    alt='Automotive Packaging Summit'
                    className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
