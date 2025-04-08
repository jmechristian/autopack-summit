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

interface CodeRequestedEmailProps {
  registrant: {
    firstName: String;
    lastName: String;
    email: String;
    company: String;
  };
}

export const CodeRequestedEmail = ({ registrant }: CodeRequestedEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className='bg-white text-center mt-6'>
          <Container className='max-w-sm mx-auto bg-white border-4 rounded-2xl md:shadow-[6px_8px_0_black] border-solid border-black w-full h-full text-center'>
            <Img
              src='https://packschool.s3.amazonaws.com/logos/AutoPackSummit+RGB+hires+no+back.png'
              width={'240px'}
              className='mx-auto'
            />
            <Section className='mt-10 mb-16'>
              <Text className='text-xs uppercase text-blue-800 py-0 m-5  font-[HelveticaNeue-Bold] '>
                Registration Code Requested
              </Text>
              <Text className='py-0 m-0 text-3xl  font-[HelveticaNeue-Bold] '>
                {registrant.firstName} {registrant.lastName}
              </Text>
              <Text className='py-0 m-0 text-xl text-gray-500  font-[HelveticaNeue] '>
                {registrant.email}
              </Text>
              <Text className='py-0 m-0 text-xl text-gray-500  font-[HelveticaNeue] '>
                {registrant.company}
              </Text>
              <Link
                href={`http://localhost:3001/api/send-registration-code?email=${registrant.email}&firstName=${registrant.firstName}&lastName=${registrant.lastName}&company=${registrant.company}`}
                className='cursor-pointer text-black'
              >
                <Section className='cursor-pointer w-[300px] bg-amber-300 border-2 border-solid border-black my-7 align-middle mx-auto rounded'>
                  <Text className='text-2xl tracking-wide font-[HelveticaNeue-Bold]'>
                    APPROVE
                  </Text>
                </Section>
              </Link>
            </Section>
            <Section className='mt-6'>
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

CodeRequestedEmail.PreviewProps = {
  registrant: {
    firstName: 'Jamie',
    lastName: 'Christian',
    email: 'jmechristian@gmail.com',
    company: 'Packaging School',
  },
} as CodeRequestedEmailProps;

export default CodeRequestedEmail;
