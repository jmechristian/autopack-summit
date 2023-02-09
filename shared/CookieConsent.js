import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookie-consent']);
  const [isCookie, setIsCookie] = useState(true);
  const cookieAcceptHandler = (e) => {
    e.preventDefault();
    setCookie('cookie-consent', true, {
      path: '/',
      maxAge: +30 * 24 * 60 * 60,
    });
    setIsCookie(true);
  };

  useEffect(() => {
    if (cookies['cookie-consent']) {
      setIsCookie(true);
    } else {
      setIsCookie(false);
    }
  }, [cookies]);

  return (
    <Transition
      show={!isCookie}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      beforeEnter={() => setTimeout(3000)}
    >
      <div className='fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-[100]'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3'>
            <div className='flex flex-wrap items-center justify-between px-4 gap-6'>
              <div className='flex w-0 flex-1 items-center'>
                <span className='flex rounded-lg bg-indigo-800 p-2'>
                  <LightBulbIcon
                    className='h-10 w-10 text-white'
                    aria-hidden='true'
                  />
                </span>
                <p className='ml-3 py-6 font-medium text-white px-3'>
                  <span className='inline text-sm md:text-base'>
                    Hello! This website uses cookies to make sure the website
                    can function, measure traffic and to support the
                    registration process. By clicking "Allow all cookies" or
                    using this website, you agree to our use of cookies. Please
                    read our
                    <a href='/policies'> privacy policy </a>for more
                    information.
                  </span>
                </p>
              </div>
              <div className='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
                <button
                  className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50'
                  onClick={cookieAcceptHandler}
                >
                  Accept All Cookies
                </button>
                <a
                  href='https://www.google.com'
                  className=' mt-4 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50'
                >
                  Decline Consent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default CookieConsent;
