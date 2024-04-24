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

interface BoschWelcomeEmailProps {
  topics: {
    topicOne: Boolean;
    topicTwo: Boolean;
    topicThree: Boolean;
    topicFour: Boolean;
  };
}

export const BoschWelcomeEmail = ({ topics }: BoschWelcomeEmailProps) => {
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
                  <br /> Workshop Registration
                </Text>
              </Row>
            </Section>
            <Section className='bg-white'>
              <Row>
                <Text className='font-[HelveticaNeue-Bold] leading-tight text-2xl mt-10 mb-5'>
                  Bosch Rexroth Packaging
                  <br /> Innovation Workshop
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10 text-neutral-600'>
                  Tuesday, October 22nd 2:30 PM - 3:30 PM
                </Text>
              </Row>
            </Section>
            <Section className='bg-[#e6e7e8]'>
              <Section className='bg-[#005a94] w-full max-w-[92%] mx-auto mb-6 rounded-2xl border-2 border-black border-solid overflow-hidden mt-6'>
                <Row>
                  <Column>
                    <Text className='font-bold text-white font-[HelveticaNeue-Bold] text-lg'>
                      Workshop Details
                    </Text>
                  </Column>
                </Row>
                <Row className='w-full max-w-[96%] mx-auto mb-6'>
                  <Column className='bg-white align-top py-3 w-full'>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      Bosch is inviting you to participate in this interactive
                      workshop with the goal to brainstorm new and innovative
                      ideas to improve an on hand packaging problem. Limited
                      space available, please indicate your interest upon
                      registration.
                    </Text>
                    <Row>
                      <Column className='bg-indigo-200 text-left'>
                        <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue-Bold] mx-4'>
                          Your Interests
                        </Text>
                        {topics.topicOne ? (
                          <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4'>
                            Topic One: Green field location start-ups or product
                            transfers with new users of packaging materials or
                            packing processes give rise to standardization
                            risks.
                          </Text>
                        ) : (
                          ''
                        )}
                        {topics.topicTwo ? (
                          <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4'>
                            Topic Two: Packaging Engineers must develop a
                            specification, often relying on expertise of service
                            providers, without themselves being familiar with
                            differing materials or potential design solutions.
                          </Text>
                        ) : (
                          ''
                        )}
                        {topics.topicThree ? (
                          <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4'>
                            Topic Three: Returnable Container management without
                            live asset tracking makes inventory control at
                            multiple locations both inaccurate and costly.
                          </Text>
                        ) : (
                          ''
                        )}

                        {topics.topicFour ? (
                          <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4'>
                            Topic Four: Change of packaging specifications or
                            requirements after business award or program launch
                            incurs unplanned packaging material and labor costs.
                          </Text>
                        ) : (
                          ''
                        )}
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row className='mb-5'>
                  <Button
                    href='https://autopacksummit.com/agenda'
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
              <Link href='https://www.boschrexroth.com/'>
                <Img
                  src={
                    'https://packschool.s3.amazonaws.com/bosch-rexroth-logo.png'
                  }
                  alt='Bosch Rexrox logo'
                  width={300}
                  height={118}
                  className='mx-auto mt-9'
                />
              </Link>
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue]'>
                Bosch Rexroth drives the digital transformation of the Factory
                of the Future, exceeds the limits with Connected Hydraulics and
                sets the stage for Transforming Mobile Machines. All products
                and solutions contribute to a more sustainable development of
                machines, manufacturing and daily life.
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

BoschWelcomeEmail.PreviewProps = {
  topics: {
    topicOne: true,
    topicTwo: true,
    topicThree: true,
    topicFour: true,
  },
} as BoschWelcomeEmailProps;

export default BoschWelcomeEmail;
