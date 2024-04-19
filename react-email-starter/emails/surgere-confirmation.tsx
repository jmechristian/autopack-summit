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

export const SurgereWelcomeEmail = () => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body
          className='bg-[#fff] text-center mt-6'
          style={{ background: 'white', color: 'black' }}
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
                  From Pack to Track: <br />
                  Accelerate Decision Making with AI
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10 text-neutral-600'>
                  Tuesday, October 22nd 1:00 PM - 2:00 PM
                  <br />
                  Conference Room: Crepe Myrtle
                </Text>
              </Row>
            </Section>
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
                  <Text className='text-left text-[18px] leading-[20px] font-[HelveticaNeue-Bold] mx-4 text-black'>
                    From Pack to Track: Accelerate Decision Making with AI
                  </Text>
                  {/* <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4 text-black'>
                    If you have ever asked these questions, we encourage you to
                    sign up for the Guardian Breakout Workshop! OEM and Tier 1
                    Suppliers that pre-register and attend the Guardian Breakout
                    will receive a free pack of 10 GPS/WiFi/Cell trackers with
                    service and platform access included. With Guardian’s
                    trackers, GPS and WiFi location data is communicated over
                    cell networks to tell you where your rack and containers
                    problems are happening anywhere in North America.
                  </Text> */}

                  <Row className='bg-amber-300 mt-5'>
                    <Column className='w-1/2'>
                      <Row>
                        <Text className='font-[HelveticaNeue] leading-tight'>
                          <span className='font-[HelveticaNeue-Bold]'>
                            Thomas Strain
                          </span>{' '}
                          <br />
                          VP, Technology, <br />
                          Surgere
                        </Text>
                      </Row>
                    </Column>
                    <Column className='w-1/2'>
                      <Row>
                        <Text className='font-[HelveticaNeue] leading-tight'>
                          <span className='font-[HelveticaNeue-Bold]'>
                            Michael Schwabe
                          </span>{' '}
                          <br />
                          Director, Market Intelligence, <br /> Surgere
                        </Text>
                      </Row>
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
            <Section className='bg-white my-10'>
              <Img
                width={272}
                height={74}
                src='https://packschool.s3.amazonaws.com/aps-barcode.png'
                className='mx-auto'
              />
            </Section>

            <Section className='bg-white px-6 mb-10'>
              <Link href='https://surgere.com/'>
                <Img
                  src='https://packschool.s3.amazonaws.com/surgere-logo.png'
                  width={500 * 0.6}
                  height={53 * 0.6}
                  className='mx-auto mt-9'
                />
              </Link>
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue]'>
                Surgere is an industry pioneer leveraging IoT technology to
                revolutionize the supply chain. We know the challenges and have
                engineered innovative secure technology, patented software, and
                certified hardware to consistently deliver 99.9% data fidelity.
                We’re expanding visibility into the physical supply chain to
                many of the world’s leading industries. We’re constantly
                innovating and developing for our dream state: a fully
                visualized and self-actualizing autonomous supply chain.
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

export default SurgereWelcomeEmail;
