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

export const ClemsonWelcomeEmail = () => {
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
                  <br /> Tour Registration
                </Text>
              </Row>
            </Section>
            <Section className='bg-white'>
              <Row>
                <Text className='font-[HelveticaNeue-Bold] leading-tight text-2xl mt-10 mb-5'>
                  Clemson University
                  <br /> Tour
                </Text>
                <Text className='font-[HelveticaNeue] leading-tight text-[18px] px-6 lg:px-16 mb-10 text-neutral-600'>
                  Wednesday, October 23rd 10:00 AM - 12:00 PM
                </Text>
              </Row>
            </Section>
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
                  <Text className='text-left text-[18px] leading-[20px] font-[HelveticaNeue-Bold] mx-4 text-black'>
                    Join us for an exclusive tour of Clemson University and the
                    Harris A. Smith Building (Sonoco Institute of Packaging
                    Design and Graphics), including a visit to their
                    cutting-edge testing lab.
                  </Text>
                  <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4 text-black'>
                    The Harris A. Smith building stands as a distinguished hub
                    for education, research, and industry collaboration,
                    dedicated to pioneering advanced solutions and resources for
                    the future of the printing and packaging value chain. During
                    the tour, you'll also have the opportunity to explore the
                    Center for Flexible Packaging, which features
                    state-of-the-art research lab facilities and distribution
                    testing equipment.
                  </Text>
                  <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue] mx-4 text-black'>
                    Please note that the tour involves walking across campus, so
                    we recommend wearing comfortable clothing and appropriate
                    footwear.
                  </Text>
                  <Text className='text-left text-[14px] leading-[20px] font-[HelveticaNeue-Bold] mx-4 text-black'>
                    Transportation and parking are not provided.
                  </Text>
                  <Row className='bg-amber-300 mt-5'>
                    <Column className='w-2/3 px-5'>
                      <Row>
                        <Text className='font-[HelveticaNeue] leading-tight text-left'>
                          <span className='font-[HelveticaNeue-Bold]'>
                            Meeting Point:
                          </span>{' '}
                          <br />
                          Front Entrance of the Harris A. Smith Building
                          <br />
                          (Sonoco Institute of Packaging Design and Graphics)
                          <br />
                          <Link
                            href='https://maps.app.goo.gl/ZNtR7QdQh2eKSEsL8'
                            className='text-indigo-600'
                          >
                            320 Fernow Street <br />
                            Clemson, SC 29634-001
                          </Link>
                        </Text>
                      </Row>
                    </Column>
                    <Column className='w-1/3'>
                      <Row className='items-center'>
                        <Link href='https://packschool.s3.amazonaws.com/Clemson-Tour-Map.pdf'>
                          <Img
                            src='https://packschool.s3.amazonaws.com/maps-icon-8214.png'
                            alt='Icon'
                            width={60}
                            height={60}
                            className='mx-auto'
                          />
                        </Link>
                        <Link
                          href='https://packschool.s3.amazonaws.com/Clemson-Tour-Map.pdf'
                          className='text-indigo-600'
                        >
                          <Text className='font-[HelveticaNeue] leading-tight text-center m-0'>
                            <span className='font-[HelveticaNeue-Bold]'>
                              Campus & <br />
                              Parking Map
                            </span>{' '}
                            <br />
                          </Text>
                        </Link>
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
              <Link href='https://www.clemson.edu/centers-institutes/sonoco-institute/index.html'>
                <Img
                  src='https://packschool.s3.amazonaws.com/orange-purple.png'
                  width={567 * 0.5}
                  height={143 * 0.5}
                  className='mx-auto mt-9'
                />
              </Link>
              <Text className='max-w-lg mx-auto leading-tight font-[HelveticaNeue]'>
                The Sonoco Institute derives its uniqueness by combining the
                synergies of packaging design and graphic communications. We
                invest in the most rigorous research and development
                opportunities in this vast marketplace. We provide students with
                the best education in packaging science and graphic
                communications possible, preparing them as leaders of tomorrow.
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

export default ClemsonWelcomeEmail;
