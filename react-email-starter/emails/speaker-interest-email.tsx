import {
  Body,
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

interface SpeakerInterestEmailProps {
  data: {
    data: {
      fullname: String;
      email: String;
      company: String;
      title: String;
      description: String;
      objectives: String;
    };
  };
}

export const SpeakerInterestEmail = ({ data }: SpeakerInterestEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className='bg-white mt-6'>
          <Container className='max-w-2xl mx-auto bg-white border-4 rounded-2xl md:shadow-[6px_8px_0_black] border-solid border-black w-full h-full p-3 md:p-5'>
            <Section className='rounded-2xl border-2 border-solid border-black p-5'>
              <Row>
                <Column className='w-[20%] text-right md:hidden block'>
                  <Img
                    src='https://packschool.s3.amazonaws.com/logos/AutoPackSummit+RGB+hires+no+back.png'
                    width={'175'}
                    className='mr-0'
                  />
                </Column>
              </Row>
              <Row>
                <Column className='md:w-[80%]'>
                  <Text className='text-3xl font-[HelveticaNeue-Bold] leading-tight tracking-tight'>
                    Speaker Interest
                    <br />
                    Form Submission
                  </Text>
                </Column>
                <Column className='w-[20%] text-right hidden md:block'>
                  <Img
                    src='https://packschool.s3.amazonaws.com/logos/AutoPackSummit+RGB+hires+no+back.png'
                    width={'175'}
                    className='mr-0'
                  />
                </Column>
              </Row>
            </Section>
            <Section className='my-5'>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Full Name:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.fullname}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Email:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.email}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Company:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.company}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Title:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.title}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-amber-300 rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Description:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.description}
                  </Text>
                </Column>
              </Row>
              <Row className='bg-white rounded-xl px-5'>
                <Column className='w-2/5'>
                  <Text className='font-[HelveticaNeue]'>Objectives:</Text>
                </Column>
                <Column className='w-3/5'>
                  <Text className='font-[HelveticaNeue-Bold]'>
                    {data.data.objectives}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className='mt-12 text-center'>
              <Text className='font-[HelveticaNeue-Bold] text-[12px] text-black uppercase'>
                Powered by the Packaging School
                <sup className='text-[8px]'>&reg;</sup>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SpeakerInterestEmail.PreviewProps = {
  data: {
    data: {
      fullname: 'Jamie Christian',
      email: 'jmechristian@gmail.com',
      company: 'Packaging School',
      title: 'Web Director',
      phone: '5122893696',
      description: 'This is the description',
      objectives: 'These are the objectives',
    },
  },
} as SpeakerInterestEmailProps;

export default SpeakerInterestEmail;
