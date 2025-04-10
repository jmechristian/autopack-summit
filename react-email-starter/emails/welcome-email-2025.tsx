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

interface WelcomeEmail2025Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    jobTitle: string;
    phone: string;
    attendeeType: string;
    billingAddress: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    speedNetworking: boolean;
  };
  formDataId: string;
  totalAmount: number;
  addOnsSelected: Array<{ id: string; title: string }>;
}

export const WelcomeEmail2025 = ({
  formData,
  formDataId,
  totalAmount,
  addOnsSelected,
}: WelcomeEmail2025Props) => {
  const baseStyles = {
    fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
  };

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: '#ffffff',
            ...baseStyles,
          }}
        >
          <Container
            style={{
              paddingBottom: '12px',
              maxWidth: '540px',
              width: '100%',
              margin: '30px auto',
              border: '1px solid #d1d5db',
              ...baseStyles,
            }}
          >
            {/* Add tracking pixel */}
            <Img
              src={`https://autopacksummit.com/api/handle-email-tracking?id=${formDataId}&email=${formData.email}`}
              width='1'
              height='1'
              style={{ display: 'none' }}
              alt=''
            />
            <Section>
              <Row className='px-4 py-4 dark:bg-black'>
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
                    className='font-[HelveticaNeue-Bold] text-[#005a94] text-sm'
                  >
                    AutoPackSummit.com
                  </Link>
                </Column>
              </Row>
              {/* Blue Header Section */}
              <Row
                style={{
                  backgroundColor: '#005a94',

                  ...baseStyles,
                }}
              >
                <Column style={{ width: '100%' }}>
                  <Img
                    src='https://packschool.s3.us-east-1.amazonaws.com/reg-confirmed-email-header.png'
                    width='100%'
                    alt='Registration Header'
                    style={{
                      maxWidth: '550px',
                      height: 'auto',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                </Column>
              </Row>
              <Row
                style={{
                  backgroundColor: '#005a94',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  ...baseStyles,
                }}
              >
                <Column style={{ width: '100%' }}>
                  <Text
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '12px',
                      ...baseStyles,
                    }}
                  >
                    We look forward to seeing you in Greenville!
                  </Text>
                  <Text
                    style={{
                      fontSize: '18px',
                      color: 'white',
                      lineHeight: '1.5',
                      marginBottom: '60px',
                      ...baseStyles,
                    }}
                  >
                    Stay up to date with all your registration details{' '}
                    <Link
                      href={`https://www.autopacksummit.com/aps25/${formDataId}`}
                      style={{
                        color: '#E4A800',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        ...baseStyles,
                      }}
                    >
                      here
                    </Link>
                    .
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section
              style={{
                width: '100%',
                ...baseStyles,
              }}
            >
              {/* Details Section - Modified to single column */}
              <Row className='w-full bg-gray-100'>
                <Column>
                  <Section className='w-full max-w-[92%] max-auto my-5'>
                    <Row className='w-full mb-2'>
                      <Column>
                        <Text className='font-bold text-ap-blue font-[HelveticaNeue-Bold] text-xl text-center'>
                          2025 AutoPack Summit Details
                        </Text>
                      </Column>
                    </Row>
                    <Row className='w-full mx-auto mb-6'>
                      <Column className='align-top border-t-0 pl-3 border-l-0 border-b-0 w-1/3 bg-yellow-100'>
                        <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold]'>
                          Wednesday
                          <br />
                          Oct 15
                        </Text>
                        <Text className='font-[HelveticaNeue]'>Tours</Text>
                        <Text className='font-[HelveticaNeue]'>
                          Registration
                        </Text>
                        <Text className='font-[HelveticaNeue]'>
                          Cocktail Hour
                        </Text>
                      </Column>
                      <Column className='align-top pl-3 border-t-0 border-l-0 border-b-0 w-1/3 bg-yellow-200'>
                        <Text className='uppercase text-[16px] leading-[16px] font-[HelveticaNeue-Bold]'>
                          Thursday
                          <br />
                          Oct 16
                        </Text>
                        <Text className='font-[HelveticaNeue] pr-1 leading-snug'>
                          Doors Open 7:30 AM
                        </Text>
                        <Text className='font-[HelveticaNeue] pr-1 leading-snug'>
                          Presentation & Workshops
                        </Text>
                        <Text className='font-[HelveticaNeue] pr-1 leading-snug'>
                          Speed Networking Event
                        </Text>
                        <Text className='font-[HelveticaNeue] pr-1 leading-snug'>
                          Exhibitor Hall
                        </Text>
                        <Text className='font-[HelveticaNeue] pr-1 leading-snug'>
                          Reception
                        </Text>
                      </Column>
                      <Column className='align-top pl-3 border-t-0 border-l-0 border-b-0 w-1/3 bg-yellow-100'>
                        <Text className='uppercase text-[16px] leading-[20px] font-[HelveticaNeue-Bold]'>
                          Friday
                          <br />
                          Oct 17
                        </Text>
                        <Text className='font-[HelveticaNeue] leading-snug'>
                          Tours
                        </Text>
                        <Text className='font-[HelveticaNeue] leading-snug'>
                          Advisory Board
                          <br /> Meeting
                        </Text>
                      </Column>
                    </Row>
                    <Row className='mb-5 mx-auto w-full max-w-[94%] text-center bg-black py-2 rounded-md'>
                      <Column className='w-full'>
                        <Link
                          href='https://www.autopacksummit.com/agenda'
                          className='text-white text-center font-[HelveticaNeue] text-lg w-full py-2 px-4 rounded-md'
                        >
                          View Full Agenda
                        </Link>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
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
                    href='https://www.hyatt.com/en-US/group-booking/GSPRG/G-APSU'
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
            <Section>
              <Row className='w-full mt-2'>
                <Column>
                  <Link
                    href='https://www.packagingschool.com'
                    className='w-full text-orange-500'
                  >
                    <Text className='text-center text-ap-blue font-[HelveticaNeue-Bold] uppercase'>
                      Powered by Packaging School&reg;
                    </Text>
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

WelcomeEmail2025.PreviewProps = {
  formData: {
    firstName: 'Jamie Christian',
    lastName: 'Christian',
    email: 'jmechristian@gmail.com',
    companyName: '', // Note: this wasn't in the object but is required by interface
    jobTitle: 'ssss',
    phone: '(512) 289-3696',
    attendeeType: 'OEM',
    billingAddress: {
      street: '1015 Atlantic Dr',
      city: 'Stafford',
      state: 'VA',
      zip: '22554',
    },
    speedNetworking: false,
  },
  formDataId: '4e041c79-2aba-4198-a01b-8576cc58a1fd',
  totalAmount: 0,
  addOnsSelected: [], // Empty array since no add-ons were specified in the data
};

export default WelcomeEmail2025;
