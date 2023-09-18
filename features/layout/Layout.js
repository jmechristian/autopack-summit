import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNavMenu, closeNavMenu } from '../../features/layout/layoutSlice';
import RegisterModal from '../../shared/RegisterModal';
import SponsorshipFormModal from '../../shared/SponsorshipFormModal';
import VideoModal from '../../shared/VideoModal';
import Footer from './footer/Footer';
import Header from './header/Header';
import MobileMenu from './mobile/MobileMenu';
import CookieConsent from '../../shared/CookieConsent';

const Layout = ({ client, children }) => {
  const [footerImages, setFooterImages] = useState(null);
  const dispatch = useDispatch();
  const { navOpen, videoOpen, sponsorFormOpen, registrationOpen } = useSelector(
    (state) => state.layout
  );

  useEffect(() => {
    const getData = async () => {
      const footerImages =
        await client.fetch(`*[_type == "footerImages" && name == "Footer Main"] {
        footerGallery[]
      }`);

      setFooterImages(footerImages[0].footerGallery);
    };

    getData();
  }, []);

  return (
    <div>
      <CookieConsent />
      <div className='relative w-full h-20 lg:h-16'>
        <div className='fixed z-50 w-full h-20'>
          <div className='flex flex-col lg:flex-row gap-1 h-20 lg:h-16 bg-black leading-none justify-center items-center w-full py-4'>
            <div className='bg-red-600 font-oswald font-bold text-lg uppercase tracking-wide rounded-md text-white py-1 px-3 lg:mr-2'>
              We are sold out!
            </div>
            <div className='font-bold text-ap-yellow text-lg xl:text-xl leading-none'>
              October 11-13th
            </div>
            <div className='text-white/80 xl:text-lg'>
              Huguenot Loft, Greenville SC
            </div>
          </div>
        </div>
      </div>
      <Header openMenu={() => dispatch(openNavMenu())} />
      <MobileMenu close={() => dispatch(closeNavMenu())} isOpen={navOpen} />
      {videoOpen && <VideoModal />}
      {sponsorFormOpen && <SponsorshipFormModal />}
      {registrationOpen && <RegisterModal />}
      {children}
      <Footer footerImages={footerImages} />
    </div>
  );
};

export default Layout;
