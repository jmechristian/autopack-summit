import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
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

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          toAddress,
          /* more To-email addresses */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Data: `<div>First Name: ${body.fullName}</div><br /><div>Email: ${body.email}</div><br /><div> Phone: ${body.phone}</div><br /><div> Tour: ${body.tour}</div><br />`,
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'TEXT_FORMAT_BODY',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Tour Sign Up',
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
        'jamie@packagingschool.com'
      )
    );
    res.status(200).json({ message: 'Success' + res });
  } catch (error) {
    console.log(error);
    res.status(410).json({ message: error + 'error' });
  }
}
