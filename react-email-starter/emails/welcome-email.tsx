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

interface WelcomeEmailProps {
  registrant: {
    name: String;
    email: String;
    company: String;
    title: String;
    phone: String;
  };
}

export const WelcomeEmail = ({ registrant }: WelcomeEmailProps) => {
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
                  <br /> Ticket Purchase
                </Text>
              </Row>
            </Section>
            <Section className='bg-white'>
              <Row>
                <Text className='font-[HelveticaNeue-Bold] text-2xl mt-10 mb-5'>
                  You are Registered.
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10'>
                  Your registration has been confirmed and you have successfully
                  registered to the 2024 Automotive Packaging Summit.
                </Text>
              </Row>
            </Section>
            <Section className='bg-[#e6e7e8]'>
              <Section className='bg-[#005a94] w-full max-w-[92%] mx-auto mb-6 rounded-2xl border-2 border-black border-solid overflow-hidden mt-6'>
                <Row>
                  <Column>
                    <Text className='font-bold text-white font-[HelveticaNeue-Bold] text-lg'>
                      2024 AutoPack Summit Details
                    </Text>
                  </Column>
                </Row>
                <Row className='w-full max-w-[96%] mx-auto mb-6'>
                  <Column className='bg-white align-top py-4 border-r border-r-black border-solid border-t-0 border-l-0 border-b-0 w-1/3'>
                    <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold]'>
                      Monday
                      <br />
                      Oct 21
                    </Text>
                    <Text className='font-[HelveticaNeue]'>
                      Tours
                      <br />
                      Registration
                      <br />
                      Cocktail Hour
                    </Text>
                  </Column>
                  <Column className='bg-white align-top py-4 border-r border-r-black border-solid border-t-0 border-l-0 border-b-0 w-1/3'>
                    <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold]'>
                      Tuesday
                      <br />
                      Oct 22
                    </Text>
                    <Text className='font-[HelveticaNeue] px-2 leading-snug'>
                      Doors Open 7:30 AM
                      <br />
                      Presentation & Workshops
                      <br />
                      Speed Networking Event
                      <br />
                      Exhibitor Hall
                      <br />
                      Reception
                    </Text>
                  </Column>
                  <Column className='align-top bg-white py-4 border-r border-r-black border-solid border-t-0 border-l-0 border-b-0 w-1/3'>
                    <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold]'>
                      Wednesday
                      <br />
                      Oct 21
                    </Text>
                    <Text className='font-[HelveticaNeue] leading-snug'>
                      Tours
                      <br />
                      Advisory Board
                      <br /> Meeting
                    </Text>
                  </Column>
                </Row>
                <Row className='mb-5'>
                  <Button
                    href='https://www.autopacksummit.com/agenda'
                    style={{
                      color: '#ffffff',
                      padding: '10px 30px',
                      backgroundColor: '#E4A800',
                      fontFamily: 'sans-serif',
                      fontWeight: 700,
                      borderRadius: '8px',
                    }}
                  >
                    View Full Agenda
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
            <Section className='p-6' style={{ backgroundColor: '#005a94' }}>
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
            </Section>
            <Section className='bg-white px-6'>
              <Img
                src='https://packschool.s3.amazonaws.com/aps-surgere.png'
                width={300}
                height={29}
                className='mx-auto mt-9'
              />
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue]'>
                Surgere is an IoT supply chain solutions provider that brings
                source-of-truth data to your daily operations. Leveraging our
                Interius software, Surgere customers experience insight and
                certainty across asset management, packaging specification
                management and localization needs.
              </Text>
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue] mb-12'>
                Surgere works with customers to align IoT sensors, hardware and
                environmental factors in solving warehouse, yard and inventory
                challenges. Learn more about how Surgere can deliver certainty
                to your organization and we look forward to meeting you at the
                show!
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

WelcomeEmail.PreviewProps = {
  registrant: {
    name: 'Jamie Christian',
    email: 'jmechristian@gmail.com',
    company: 'Packaging School',
    title: 'Web Director',
    phone: '5122893696',
  },
} as WelcomeEmailProps;

export default WelcomeEmail;
