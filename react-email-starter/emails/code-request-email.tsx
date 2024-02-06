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

interface CodeRequestEmailProps {
  registrant: {
    name: String;
    email: String;
    company: String;
    title: String;
    phone: String;
  };
}

export const CodeRequestEmail = ({ registrant }: CodeRequestEmailProps) => {
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
            <Section className='mt-10 text-center mb-16'>
              <Text className='text-xs uppercase text-blue-800 py-0 m-1  font-[HelveticaNeue-Bold] '>
                Registration Code
              </Text>
              <Text className='text-black text-2xl leading-tight py-0 m-0 px-6  font-[HelveticaNeue] font-medium'>
                Enter the following code to finish registration.
              </Text>
              <Link
                className='text-black'
                href={`https://autopacksummit.com/register?email=${registrant.email}&name=${registrant.name}&company=${registrant.company}&title=${registrant.title}&phone=${registrant.phone}&code=AUTOPACK3862`}
              >
                <Section className='cursor-pointer w-[325px] bg-amber-300 border-2 border-solid border-black my-7 align-middle mx-auto rounded'>
                  <Text className='text-2xl py-2 tracking-wide font-[HelveticaNeue-Bold]'>
                    AUTOPACK3862
                  </Text>
                </Section>
              </Link>
              <Text className='text-neutral-500 text-sm font-[HelveticaNeue] max-w-xs mx-auto leading-tight'>
                Not expecting this email? Contact info@packagingschool.com if
                you did not request a registration code.
              </Text>
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

CodeRequestEmail.PreviewProps = {
  registrant: {
    name: 'Jamie Christian',
    email: 'jmechristian@gmail.com',
    company: 'Packaging School',
    title: 'Web Director',
    phone: '5122893696',
  },
} as CodeRequestEmailProps;

export default CodeRequestEmail;
