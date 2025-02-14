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

interface RegConfirmEmailProps {
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

export const RegConfirmEmail = ({
  formData,
  formDataId,
  totalAmount,
  addOnsSelected,
}: RegConfirmEmailProps) => {
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
                    src='https://packschool.s3.us-east-1.amazonaws.com/reg-submission-email-header.png'
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
                    Thank you for completing your registration.
                  </Text>
                  <Text
                    style={{
                      fontSize: '16px',
                      color: 'white',
                      lineHeight: '1.5',
                      marginBottom: '60px',
                      ...baseStyles,
                    }}
                  >
                    We're reviewing your information and will send you a
                    confirmation email soon once it's approved. You can check
                    your status{' '}
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
              <Row>
                <Column
                  style={{
                    width: '100%',
                    paddingBottom: '16px',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                  }}
                >
                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#000000',
                      ...baseStyles,
                    }}
                  >
                    Registrant Details:
                  </Text>
                  <Section
                    style={{
                      borderBottom: '1px solid #d1d5db',
                      paddingBottom: '12px',
                      marginBottom: '12px',
                      color: '#000000',
                    }}
                  >
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Name:</strong> {formData.firstName}{' '}
                      {formData.lastName}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Email:</strong> {formData.email}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Company:</strong> {formData.companyName}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Title:</strong> {formData.jobTitle}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Phone:</strong> {formData.phone}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Attendee Type:</strong> {formData.attendeeType}
                    </Text>
                  </Section>

                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#000000',
                      ...baseStyles,
                    }}
                  >
                    Billing Details:
                  </Text>
                  <Section
                    style={{
                      borderBottom: '1px solid #d1d5db',
                      paddingBottom: '12px',
                      marginBottom: '12px',
                      color: '#000000',
                    }}
                  >
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Name:</strong> {formData.firstName}{' '}
                      {formData.lastName}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Email:</strong> {formData.email}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Phone:</strong> {formData.phone}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Street:</strong> {formData.billingAddress.street}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>City:</strong> {formData.billingAddress.city}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>State:</strong> {formData.billingAddress.state}
                    </Text>
                    <Text style={{ margin: '2px 0', ...baseStyles }}>
                      <strong>Zip:</strong> {formData.billingAddress.zip}
                    </Text>
                  </Section>

                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#000000',
                      ...baseStyles,
                    }}
                  >
                    Your Ticket Details:
                  </Text>
                  <Text
                    style={{ margin: '2px 0', ...baseStyles, color: '#000000' }}
                  >
                    <strong>Add Ons:</strong>{' '}
                    {addOnsSelected.length > 0
                      ? addOnsSelected.map((addOn) => addOn.title).join(', ')
                      : 'None'}
                  </Text>
                  <Text
                    style={{ margin: '2px 0', ...baseStyles, color: '#000000' }}
                  >
                    <strong>Networking Events:</strong>
                    {formData.speedNetworking ? ' Speed Networking' : ' None'}
                  </Text>

                  <Section style={{ marginTop: '16px' }}>
                    <Row
                      style={{
                        backgroundColor: '#d1d5db',
                        paddingLeft: '6px',
                        paddingRight: '6px',
                        borderRadius: '4px',
                      }}
                    >
                      <Column style={{ width: '33%' }}>
                        <Text
                          style={{
                            fontSize: '14px',
                            ...baseStyles,
                            color: '#000000',
                          }}
                        >
                          Ticket
                        </Text>
                      </Column>
                      <Column style={{ width: '33%', textAlign: 'center' }}>
                        <Text
                          style={{
                            fontSize: '14px',
                            ...baseStyles,
                            color: '#000000',
                          }}
                        >
                          Quantity
                        </Text>
                      </Column>
                      <Column style={{ width: '33%', textAlign: 'right' }}>
                        <Text
                          style={{
                            fontSize: '14px',
                            ...baseStyles,
                            color: '#000000',
                          }}
                        >
                          Total
                        </Text>
                      </Column>
                    </Row>

                    <Row style={{ paddingLeft: '6px', paddingRight: '6px' }}>
                      <Column style={{ width: '33%' }}>
                        <Text
                          style={{ ...baseStyles, color: '#000000' }}
                          className='text-sm'
                        >
                          General Admission
                        </Text>
                      </Column>
                      <Column style={{ width: '33%', textAlign: 'center' }}>
                        <Text style={{ ...baseStyles, color: '#000000' }}>
                          1
                        </Text>
                      </Column>
                      <Column style={{ width: '33%', textAlign: 'right' }}>
                        <Text style={{ ...baseStyles, color: '#000000' }}>
                          ${totalAmount}
                        </Text>
                      </Column>
                    </Row>

                    <Row
                      style={{
                        backgroundColor: '#000000',
                        paddingLeft: '6px',
                        paddingRight: '6px',
                        borderRadius: '4px',
                        marginTop: '16px',
                      }}
                    >
                      <Column style={{ width: '50%' }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            ...baseStyles,
                          }}
                        >
                          Paid
                        </Text>
                      </Column>
                      <Column style={{ width: '50%', textAlign: 'right' }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            ...baseStyles,
                          }}
                        >
                          ${totalAmount}
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

RegConfirmEmail.PreviewProps = {
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

export default RegConfirmEmail;
