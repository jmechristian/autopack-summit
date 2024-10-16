import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
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

interface PersonalAgendaProps {
  registrant: {
    first: string;
    last: string;
    email: string;
    morisette: boolean | null;
    transportation: string | null;
    clemson: boolean | null;
    bosch: boolean | null;
    surgere: boolean | null;
    guardian: boolean | null;
    speedReturnable: boolean | null;
    speedAftersales: boolean | null;
    bmw: boolean | null;
    advisory: boolean | null;
  };
  id: string;
}

export const PersonalAgenda = ({ registrant, id }: PersonalAgendaProps) => {
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
                <img
                  src={`https://autopacksummit.com/api/email-tracking?email=${registrant.email}&id=${id}`}
                  className='hidden w-1 h-1'
                />

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
                    fontSize: '32px',
                    lineHeight: '40px',
                    color: 'white',
                  }}
                >
                  Automotive Packaging Summit
                  <br /> Is Almost Here!
                </Text>
              </Row>
            </Section>
            <Section className='bg-white'>
              <Row>
                <Text className='font-[HelveticaNeue-Bold] text-2xl mt-10 mb-10'>
                  Hello {registrant.first.trim()},<br /> please find your
                  personal agenda below.
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10'>
                  We look forward to seeing you in Greenville, South Carolina,
                  <span className='text-[#005a94]'> October 21st-23rd.</span>
                </Text>
                <Link
                  href='https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIWCAEQLhivARjHARiABBiYBRiZBRieBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDINCAYQABiGAxiABBiKBTINCAcQABiGAxiABBiKBTINCAgQABiGAxiABBiKBdIBBzM1MWowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KUUPFLjRMViIMT5lttSj-eAu&daddr=220+N+Main+St,+Greenville,+SC+29601'
                  className='font-[HelveticaNeue-Bold] text-[16px] underline text-[#005a94] block mb-10'
                >
                  Hyatt Regency, Greenville, SC,
                  <br /> 220 N Main St, Greenville, SC 29601
                </Link>
              </Row>
            </Section>
            <Section className='bg-[#e6e7e8]'>
              <Section className='bg-[#005a94] w-full max-w-[92%] mx-auto mb-6 rounded-2xl border-2 border-black border-solid overflow-hidden mt-6'>
                <Row>
                  <Column>
                    <Text className='font-bold text-white font-[HelveticaNeue-Bold] text-lg'>
                      Your 2024 AutoPack Summit Details
                    </Text>
                  </Column>
                </Row>
                {/* MONDAY */}
                <Row className='w-full max-w-[96%] mx-auto mb-6'>
                  <Column className='bg-white text-left align-top px-0 py-4 border-r border-r-black border-solid border-t-0 border-l-0 border-b-0 w-full'>
                    <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold] mb-5 px-4'>
                      Monday October 21st
                    </Text>
                    {/* MORRISETTE */}
                    {registrant.morisette && (
                      <Row className='bg-[#fffbc7] px-4'>
                        <Column className='w-1/5'>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            10:30AM - 12:30PM
                          </Text>
                        </Column>
                        <Column className='w-4/5'>
                          <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                            <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                              Morrisette Tour
                            </span>
                            Morrisette Packaging Solutions Center at 24 Tyger
                            River Dr., Duncan, SC 29334 (parking is plentiful.
                            We will guide you as you pull into the facility if
                            you choose to drive separately from the group).
                          </Text>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            Transportation Preference:{' '}
                            {registrant.transportation}
                          </Text>
                        </Column>
                      </Row>
                    )}
                    <Hr className='my-[16px] border-gray-300' />
                    <Row className='bg-[#fff] px-4'>
                      <Column className='w-1/5'>
                        <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                          6:00PM - 8:00PM
                        </Text>
                      </Column>
                      <Column className='w-4/5'>
                        <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                          <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                            Cocktail Hour and Registration
                          </span>
                          You don't want to miss the annual Cocktail Hour at{' '}
                          <span className='font-[HelveticaNeue-Bold]'>
                            New Realm Brewery!
                          </span>{' '}
                          This is an ideal time to meet other attendees,
                          speakers and automotive packaging professionals.
                        </Text>
                        <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                          912 S Main St, Greenville, SC 29601
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                {/* TUESDAY */}
                <Row className='w-full max-w-[96%] mx-auto mb-6'>
                  <Column className='bg-white text-left align-top px-0 py-4 border-r border-r-black border-solid border-t-0 border-l-0 border-b-0 w-full'>
                    <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold] mb-5 px-4'>
                      Tuesday October 22nd
                    </Text>
                    <Text className='font-[HelveticaNeue] leading-tight text-[20px] text-white p-6 mb-10 bg-[#0873B8]'>
                      The Main Event featuring a variety of subject-matter
                      expert presentations and panels in the Main Ballroom from
                      8:30AM-5PM.
                    </Text>
                    <Hr className='my-[16px] border-gray-300' />
                    <Row className='bg-[#fff] px-4'>
                      <Column className='w-1/5'>
                        <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                          7:30AM - 8:30AM
                        </Text>
                      </Column>
                      <Column className='w-4/5'>
                        <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                          <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                            Breakfast & Registration
                          </span>
                          Continental Breakfast & Coffee Service
                        </Text>
                      </Column>
                    </Row>
                    <Hr className='my-[16px] border-gray-300' />
                    {/* Guardian */}
                    {registrant.guardian && (
                      <Row className='bg-[#fffbc7] px-4'>
                        <Column className='w-1/5'>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            1:00PM - 2:00PM
                          </Text>
                        </Column>
                        <Column className='w-4/5'>
                          <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                            <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                              Guardian Breakout Workshop: How are my racks and
                              containers leaving the supply chain? How do I get
                              them back?
                            </span>
                            Conference Room: Dogwood
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {registrant.guardian && (
                      <Hr className='my-[16px] border-gray-300' />
                    )}
                    {/* Surgere */}
                    {registrant.surgere && (
                      <Row className='bg-[#fffbc7] px-4'>
                        <Column className='w-1/5'>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            1:00PM - 2:00PM
                          </Text>
                        </Column>
                        <Column className='w-4/5'>
                          <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                            <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                              Surgere Workshop: From Pack to Track: Accelerate
                              Decision Making with AI
                            </span>
                            Conference Room: Crepe Myrtle
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {registrant.surgere && (
                      <Hr className='my-[16px] border-gray-300' />
                    )}
                    {/* Bosch */}
                    {registrant.bosch && (
                      <Row className='bg-[#fffbc7] px-4'>
                        <Column className='w-1/5'>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            2:30PM - 3:30PM
                          </Text>
                        </Column>
                        <Column className='w-4/5'>
                          <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                            <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                              Bosch Rexroth Packaging Innovation Workshop
                            </span>
                            Conference Room: Crepe Myrtle
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {registrant.bosch && (
                      <Hr className='my-[16px] border-gray-300' />
                    )}
                    {/* Speed Networking 1 */}
                    {registrant.speedReturnable && (
                      <Row className='bg-[#fffbc7] px-4'>
                        <Column className='w-1/5'>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            2:30PM - 3:00PM
                          </Text>
                        </Column>
                        <Column className='w-4/5'>
                          <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                            <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                              Speed Networking: Round Production Packaging
                            </span>
                            Conference Room Redbud A/B/C
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {registrant.speedReturnable && (
                      <Hr className='my-[16px] border-gray-300' />
                    )}
                    {registrant.speedAftersales && (
                      <Row className='bg-[#fffbc7] px-4'>
                        <Column className='w-1/5'>
                          <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                            3:00PM - 3:30PM
                          </Text>
                        </Column>
                        <Column className='w-4/5'>
                          <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                            <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                              Speed Networking: Round Aftersales & Expendable
                              Packaging
                            </span>
                            Conference Room Redbud A/B/C
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {registrant.speedAftersales && (
                      <Hr className='my-[16px] border-gray-300' />
                    )}
                    <Row className='bg-[#fff] px-4'>
                      <Column className='w-1/5'>
                        <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                          5:00PM - 7:00PM
                        </Text>
                      </Column>
                      <Column className='w-4/5'>
                        <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                          <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                            Cocktail Hour and Registration
                          </span>
                          Heavy Hors D'oeuvres & Hosted Bar in the Prefunction
                          Space.
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                {/* WEDNESDAY */}
                {(registrant.advisory ||
                  registrant.bmw ||
                  registrant.clemson) && (
                  <Row className='w-full max-w-[96%] mx-auto mb-6'>
                    <Column className='bg-white text-left align-top px-0 py-4 border-r border-r-black border-solid border-t-0 border-l-0 border-b-0 w-full'>
                      <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold] mb-5 px-4'>
                        Wednesday October 23rd
                      </Text>
                      {/* BMW */}
                      {registrant.bmw && (
                        <>
                          <Row className='bg-[#fffbc7] px-4'>
                            <Column className='w-1/5'>
                              <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                                9:45AM - 10:45AM
                              </Text>
                            </Column>
                            <Column className='w-4/5'>
                              <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                                <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                                  BMW Exclusive Glimpse Tour
                                </span>
                                Check-in: Arrive at the BMW Visitor’s Center no
                                later than 9:00 AM for check-in. The tour will
                                begin promptly at 9:45 AM.
                              </Text>
                              <Link
                                href='https://packschool.s3.amazonaws.com/Directions-to-the-Zentrum+.pdf'
                                className='font-[HelveticaNeue-Bold] text-[14px] underline text-[#005a94] block my-4'
                              >
                                Directions
                              </Link>
                            </Column>
                          </Row>
                          <Hr className='my-[16px] border-gray-300' />
                        </>
                      )}
                      {/* Clemson */}
                      {registrant.clemson && (
                        <>
                          <Row className='bg-[#fffbc7] px-4'>
                            <Column className='w-1/5'>
                              <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                                10:00AM - 12:00PM
                              </Text>
                            </Column>
                            <Column className='w-4/5'>
                              <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                                <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                                  Clemson University
                                </span>
                                Front Entrance of the Harris A. Smith Building
                                (Sonoco Institute of Packaging Design and
                                Graphics) 320 Fernow Street Clemson, SC
                                29634-001
                              </Text>
                              <Link
                                href='https://packschool.s3.amazonaws.com/Clemson-Tour-Map.pdf'
                                className='font-[HelveticaNeue-Bold] text-[14px] underline text-[#005a94] block my-4'
                              >
                                Campus and Parking Map
                              </Link>
                            </Column>
                          </Row>
                          <Hr className='my-[16px] border-gray-300' />
                        </>
                      )}
                      {/* Advisory */}
                      {registrant.advisory && (
                        <>
                          <Row className='bg-[#fffbc7] px-4'>
                            <Column className='w-1/5'>
                              <Text className='font-[HelveticaNeue-Bold] text-[14px] leading-[20px]'>
                                11:00AM - 12:30PM
                              </Text>
                            </Column>
                            <Column className='w-4/5'>
                              <Text className='font-[HelveticaNeue] text-[14px] leading-[20px]'>
                                <span className='font-[HelveticaNeue-Bold] text-[16px] text-[#005a94] block mb-2'>
                                  Advisory Board Meeting
                                </span>
                                Roost Restaurant, 220 N Main St, Greenville, SC
                                29601
                              </Text>
                            </Column>
                          </Row>
                          <Hr className='my-[16px] border-gray-300' />
                        </>
                      )}
                    </Column>
                  </Row>
                )}
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

            <Section className='p-10' style={{ backgroundColor: '#005a94' }}>
              <Row>
                <Column className='px-6'>
                  <Text className='text-white text-xl font-bold uppercase font-[HelveticaNeue-Bold]'>
                    Forgot to add a workshop? <br />
                    No worries!
                  </Text>
                  <Text className='text-white font-[HelveticaNeue] leading-tight'>
                    You can still register through the{' '}
                    <Link
                      href='https://www.autopacksummit.com/add-ons'
                      className='text-[#E4A800]'
                    >
                      Add-On page
                    </Link>
                    , or sign up at the summit.
                  </Text>
                  <Button
                    href='https://www.autopacksummit.com/add-ons'
                    style={{
                      color: '#ffffff',
                      padding: '10px 30px',
                      backgroundColor: '#E4A800',
                      fontFamily: 'sans-serif',
                      fontWeight: 700,
                      borderRadius: '8px',
                    }}
                  >
                    Register For Add-On
                  </Button>
                </Column>
              </Row>
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

PersonalAgenda.PreviewProps = {
  registrant: {
    first: 'Jamie',
    last: 'Sood',
    email: 'aastha.sood@bmwmcext.com',
    morisette: true,
    transportation: 'Shuttle',
    clemson: null,
    bosch: true,
    surgere: null,
    guardian: null,
    speedReturnable: true,
    speedAftersales: null,
    bmw: null,
    advisory: null,
  },
  id: '123',
} as PersonalAgendaProps;

export default PersonalAgenda;
