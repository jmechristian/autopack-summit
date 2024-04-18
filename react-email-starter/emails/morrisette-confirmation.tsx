import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

export const MorrisetteWelcomeEmail = () => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body
          className='bg-[#fff] text-center mt-6'
          style={{ background: 'white' }}
        >
          <Container className='max-w-[600px] mx-auto bg-white border-4 overflow-hidden rounded-2xl md:shadow-[6px_8px_0_black] border-solid border-black w-full h-full text-center'>
            <Section className='bg-[#005a94] rounded-t-xl'>
              <Row className='w-full'>
                <Img
                  src='https://packschool.s3.amazonaws.com/aps-icon.png'
                  width={86}
                  height={75}
                  className='mx-auto mt-10 mb-2'
                />
              </Row>
              <Row className='text-white'>
                <Text
                  className=' font-bold text-white dark:text-white font-[HelveticaNeue] mb-10'
                  style={{
                    fontSize: '36px',
                    lineHeight: '40px',
                    color: 'white',
                  }}
                >
                  Confirmation of Your
                  <br /> Tour Registration
                </Text>
              </Row>
            </Section>
            <Section className='bg-white'>
              <Row>
                <Text className='font-[HelveticaNeue-Bold] leading-tight text-2xl mt-10 mb-5'>
                  Morrisette Packaging Tour
                  <br /> and Cookout
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10 text-neutral-600'>
                  Monday, October 21th 10:30 AM - 1:00 PM
                </Text>
              </Row>
            </Section>
            <Section className='bg-[#e6e7e8]'>
              <Section className='bg-[#005a94] w-full max-w-[92%] mx-auto mb-6 rounded-2xl border-2 border-black border-solid overflow-hidden mt-6'>
                <Row>
                  <Column>
                    <Text className='font-bold text-white font-[HelveticaNeue-Bold] text-lg'>
                      Tour Details
                    </Text>
                  </Column>
                </Row>
                <Row className='w-full max-w-[96%] mx-auto mb-6'>
                  <Column className='bg-white align-top py-3 w-full'>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      We invite you to join us on Monday, October 21st, for an
                      exclusive tour of the Morrisette Packaging Solutions
                      Center at 24 Tyger River Dr., Duncan, SC 29334 (parking is
                      plentiful. We will guide you as you pull into the facility
                      if you choose to drive separately from the group).
                    </Text>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      Our state-of-the-art facility showcases cutting-edge
                      technologies designed to enhance efficiency, reduce waste,
                      and optimize supply chain operations through on-site
                      prototyping and real-time packaging problem-solving.
                    </Text>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      Following the tour, we're excited to host you for a
                      Southern BBQ Cookout, complete with lunch, casual games,
                      and fantastic prizes, making it a perfect opportunity to
                      network and relax.
                    </Text>
                  </Column>
                </Row>
                <Row className='mb-5'>
                  <Button
                    href='https://www.google.com/maps/search/24+Tyger+River+Dr.,+Duncan,+SC+29334?entry=gmail&source=g'
                    style={{
                      color: '#ffffff',
                      padding: '10px 30px',
                      backgroundColor: '#E4A800',
                      fontFamily: 'sans-serif',
                      fontWeight: 700,
                      borderRadius: '8px',
                    }}
                  >
                    View Directions
                  </Button>
                </Row>
              </Section>
            </Section>
            <Section className='bg-white my-10'>
              <Img
                width={272}
                height={74}
                src='https://packschool.s3.amazonaws.com/aps-barcode.png'
                className='mx-auto'
              />
            </Section>
            {/* <Section className='p-6' style={{ backgroundColor: '#005a94' }}>
              <Row>
                <Column>
                  <Img
                    width={215}
                    height={215}
                    src='https://packschool.s3.amazonaws.com/aps-hotel.png'
                  />
                </Column>
                <Column className='px-6'>
                  <Text className='text-white text-xl font-bold uppercase font-[HelveticaNeue-Bold]'>
                    Accommodations
                  </Text>
                  <Text className='text-white font-[HelveticaNeue] leading-tight'>
                    Reserve Your Room at The Hyatt Regency with Event Discounted
                    Rates
                  </Text>
                  <Button
                    href='https://www.hyatt.com/en-US/group-booking/GSPRG/G-PAC4'
                    style={{
                      color: '#ffffff',
                      padding: '10px 30px',
                      backgroundColor: '#E4A800',
                      fontFamily: 'sans-serif',
                      fontWeight: 700,
                      borderRadius: '8px',
                    }}
                  >
                    Book My Stay
                  </Button>
                  <Text className='text-white font-[HelveticaNeue-Bold] leading-tight'>
                    Hyatt Regency <br />{' '}
                    <span className='text-[12px] text-white'>
                      220 North Main Street, Greenville SC 29601
                    </span>
                  </Text>
                </Column>
              </Row>
            </Section> */}
            <Section className='bg-white px-6 mb-10'>
              <Link href='https://morrisette.com/'>
                <Img
                  src='https://packschool.s3.amazonaws.com/morrisette-logo.png'
                  width={300}
                  height={106}
                  className='mx-auto mt-9'
                />
              </Link>
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue]'>
                We exist to create a community that values people over profit,
                while providing innovative packaging solutions. For over 60
                years, we have been building our name within the packaging world
                while investing in the communities we serve – from our customers
                to our employees to the places we live and work. Our goals are
                to innovate, inspire, and elevate the brands we partner with
                through packaging design, automation, kitting & fulfillment, and
                more. We dream big here at Morrisette Packaging and plan to
                continue unboxing potential in every aspect of our business.
              </Text>
            </Section>
            <Section style={{ backgroundColor: '#E4A800' }}>
              <Row className='mt-4 mb-4 px-6'>
                <Column>
                  <Img
                    src='https://packschool.s3.amazonaws.com/aps-logo-email.png'
                    width={125}
                    height={33}
                  />
                </Column>
                <Column className='text-right'>
                  <Link
                    href='https://www.autopacksummit.com'
                    className='font-[HelveticaNeue-Bold] text-[#005a94]'
                  >
                    AutoPackSummit.com
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MorrisetteWelcomeEmail;
