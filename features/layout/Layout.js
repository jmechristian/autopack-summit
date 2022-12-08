import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNavMenu, closeNavMenu } from '../../features/layout/layoutSlice';
import SponsorshipFormModal from '../../shared/SponsorshipFormModal';
import VideoModal from '../../shared/VideoModal';
import Footer from './footer/Footer';
import Header from './header/Header';
import MobileMenu from './mobile/MobileMenu';

const Layout = ({ client, children }) => {
  const [footerImages, setFooterImages] = useState(null);
  const dispatch = useDispatch();
  const { navOpen, videoOpen, sponsorFormOpen } = useSelector(
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
      <Header openMenu={() => dispatch(openNavMenu())} />
      <MobileMenu close={() => dispatch(closeNavMenu())} isOpen={navOpen} />
      {videoOpen && <VideoModal />}
      {sponsorFormOpen && <SponsorshipFormModal />}
      {children}
      <Footer footerImages={footerImages} />
    </div>
  );
};

export default Layout;
