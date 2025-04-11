import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { RegConfirmEmail } from '../../react-email-starter/emails/reg-confirm';

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
    <RegConfirmEmail
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
        // BccAddresses: [
        //   'info@packagingschool.com',
        //   'bianca@packagingschool.com',
        // ],
        ToAddresses: [
          toAddress,
          //   body.email,
          'lars@packagingschool.com',
          'bianca@packagingschool.com',
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
      createSendEmailCommand(body.formData.email, 'info@packagingschool.com')
    );
    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(410).json({ message: 'error' });
  }
}
