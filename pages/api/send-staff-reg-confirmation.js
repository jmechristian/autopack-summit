import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { StaffRegConfirmEmail } from '../../react-email-starter/emails/staff-confirmation';

const REGION = 'us-east-1';
const creds = {
  accessKeyId: process.env.AWSACCESSKEYID,
  secretAccessKey: process.env.AWSSECRETACCESSKEY,
};
// Create SES service object.
const sesClient = new SESClient({ region: REGION, credentials: creds });
export { sesClient };

export default async function handler(req, res) {
  const body = req.body;

  const emailHtml = render(
    <StaffRegConfirmEmail
      formData={body.formData}
      totalAmount={body.totalAmount}
      formDataId={body.formDataId}
      addOnsSelected={body.addOnsSelected}
    />
  );

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        BccAddresses: [
          'lars@packagingschool.com',
          'bianca@packagingschool.com',
        ],
        ToAddresses: [
          toAddress,
          //   body.email,
          //   'diana@packagingschool.com',
          //   'bianca@packagingschool.com',
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Data: emailHtml,
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'TEXT_FORMAT_BODY',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Automotive Packaging Summit 2025 Registration Pending',
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };

  try {
    await sesClient.send(
      createSendEmailCommand(
        'jamie@packagingschool.com',
        'info@packagingschool.com'
      )
    );
    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(410).json({ message: 'error' });
  }
}
