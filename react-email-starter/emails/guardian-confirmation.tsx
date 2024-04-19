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

export const GuardianWelcomeEmail = () => {
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
                  Guardian Container
                  <br /> Consulting Workshop
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10 text-neutral-600'>
                  Tuesday, October 22nd 1:00 PM - 2:00 PM
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
                    <Text className='text-left text-[18px] leading-[22px] font-[HelveticaNeue-Bold] mx-4'>
                      How are my racks and containers leaving the supply chain?
                      How do I get them back?
                    </Text>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      If you have ever asked these questions, we encourage you
                      to sign up for the Guardian Breakout Workshop. OEM and
                      Tier 1 Suppliers that pre-register and attend the Guardian
                      Breakout will receive a free pack of 10 GPS/WiFi/Cell
                      trackers with service and platform access included for one
                      year.
                    </Text>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      No dock door scanners, no handheld readers, and only a
                      small percentage of individual rack and container fleets
                      need to be tracked. GPS and WiFi location data is
                      communicated over cell networks to tell you where your
                      rack and container problems are happening anywhere in
                      North America.
                    </Text>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      Engage Guardian’s on-site auditing and recovery services,
                      or operate the specialized Guardian tracking system
                      internally. We will demonstrate how probability based
                      GPS/WiFi/Cell tracking works, common pathways of rack and
                      container loss you can expect to see, and how you can
                      start tackling your largest supply chain issues across the
                      map.
                    </Text>
                    <Text className='text-left text-[16px] leading-[22px] font-[HelveticaNeue] mx-4'>
                      We will also speak to the benefits and limitations of
                      adding BLE into the GPS/WiFi/Cell tracking, how logistics
                      teams can monitor carriers by tracking racks and
                      containers, our supply chain metrics dashboard, and more.
                    </Text>
                    <Row className='bg-amber-300'>
                      <Column className='w-1/2'>
                        <Row>
                          <Text className='font-[HelveticaNeue] leading-tight'>
                            <span className='font-[HelveticaNeue-Bold]'>
                              Ben Hesskamp
                            </span>{' '}
                            <br />
                            Owner, Guardian <br /> Container Consulting
                          </Text>
                        </Row>
                      </Column>
                      <Column className='w-1/2'>
                        <Row>
                          <Text className='font-[HelveticaNeue] leading-tight'>
                            <span className='font-[HelveticaNeue-Bold]'>
                              Lucas Hesskamp
                            </span>{' '}
                            <br />
                            Vice President, Guardian <br /> Container Consulting
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
              <Link href='https://www.guardiancontainerconsulting.com/'>
                <Img
                  src='http://localhost:3000/_next/image?url=https%3A%2F%2Fpackschool.s3.amazonaws.com%2Fguardian-logo.webp&w=750&q=75'
                  width={324}
                  height={88}
                  className='mx-auto mt-9'
                />
              </Link>
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue]'>
                Guardian offers combined GPS/WiFi/Cell tracking devices for
                monitoring automotive supply chains. The Guardian Tracking
                Platform is specifically designed to monitor long-term movements
                and behavior of automotive racks and containers. No handheld
                readers, no dockdoor scanners. Guardian’s devices communicate
                location data over cell networks anywhere in North America.
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

export default GuardianWelcomeEmail;
