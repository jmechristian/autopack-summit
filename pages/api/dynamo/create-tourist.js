import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { createTourist } from '../../../src/graphql/mutations';
const REGION = 'us-east-1';
const creds = {
  accessKeyId: process.env.AWSACCESSKEYID,
  secretAccessKey: process.env.AWSSECRETACCESSKEY,
};
// Create SES service object.
const sesClient = new SESClient({ region: REGION, credentials: creds });
export { sesClient };

import awsExports from '../../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

export default async function handler(req, res) {
  const { fullName, email, phone, tour, company } = req.query;

  var myvar =
    '<!DOCTYPE html>' +
    '<html>' +
    '  <head>' +
    '    <title></title>' +
    '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1" />' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
    '    <style type="text/css">' +
    '      /* CLIENT-SPECIFIC STYLES */' +
    '      body,' +
    '      table,' +
    '      td,' +
    '      a {' +
    '        -webkit-text-size-adjust: 100%;' +
    '        -ms-text-size-adjust: 100%;' +
    '      }' +
    '      table,' +
    '      td {' +
    '        mso-table-lspace: 0pt;' +
    '        mso-table-rspace: 0pt;' +
    '      }' +
    '      img {' +
    '        -ms-interpolation-mode: bicubic;' +
    '      }' +
    '' +
    '      /* RESET STYLES */' +
    '      img {' +
    '        border: 0;' +
    '        height: auto;' +
    '        line-height: 100%;' +
    '        outline: none;' +
    '        text-decoration: none;' +
    '      }' +
    '      table {' +
    '        border-collapse: collapse !important;' +
    '      }' +
    '      body {' +
    '        height: 100% !important;' +
    '        margin: 0 !important;' +
    '        padding: 0 !important;' +
    '        width: 100% !important;' +
    '      }' +
    '' +
    '      /* iOS BLUE LINKS */' +
    '      a[x-apple-data-detectors] {' +
    '        color: inherit !important;' +
    '        text-decoration: none !important;' +
    '        font-size: inherit !important;' +
    '        font-family: inherit !important;' +
    '        font-weight: inherit !important;' +
    '        line-height: inherit !important;' +
    '      }' +
    '' +
    '      /* MEDIA QUERIES */' +
    '      @media screen and (max-width: 480px) {' +
    '        .mobile-hide {' +
    '          display: none !important;' +
    '        }' +
    '        .mobile-center {' +
    '          text-align: center !important;' +
    '        }' +
    '      }' +
    '' +
    '      /* ANDROID CENTER FIX */' +
    "      div[style*='margin: 16px 0;'] {" +
    '        margin: 0 !important;' +
    '      }' +
    '    </style>' +
    '  </head>' +
    '  <body' +
    '    style="' +
    '      margin: 0 !important;' +
    '      padding: 0 !important;' +
    '      background-color: #eeeeee;' +
    '    "' +
    '    bgcolor="#eeeeee"' +
    '  >' +
    '    <!-- HIDDEN PREHEADER TEXT -->' +
    '    <div' +
    '      style="' +
    '        display: none;' +
    '        font-size: 1px;' +
    '        color: #fefefe;' +
    '        line-height: 1px;' +
    '        font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '        max-height: 0px;' +
    '        max-width: 0px;' +
    '        opacity: 0;' +
    '        overflow: hidden;' +
    '      "' +
    '    >' +
    '      Your tour confirmation has been confirmed.' +
    '    </div>' +
    '' +
    '    <table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '      <tr>' +
    '        <td align="center" style="background-color: #eeeeee" bgcolor="#eeeeee">' +
    '          <!--[if (gte mso 9)|(IE)]>' +
    '        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '        <tr>' +
    '        <td align="center" valign="top" width="600">' +
    '        <![endif]-->' +
    '          <table' +
    '            align="center"' +
    '            border="0"' +
    '            cellpadding="0"' +
    '            cellspacing="0"' +
    '            width="100%"' +
    '            style="max-width: 600px"' +
    '          >' +
    '            <tr style="height: 60px">' +
    '              <td></td>' +
    '            </tr>' +
    '            <tr>' +
    '              <td' +
    '                align="center"' +
    '                valign="top"' +
    '                style="font-size: 0; padding: 35px"' +
    '                bgcolor="#005892"' +
    '              >' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="left" valign="top" width="300">' +
    '                <![endif]-->' +
    '                <div' +
    '                  style="' +
    '                    display: inline-block;' +
    '                    max-width: 50%;' +
    '                    min-width: 100px;' +
    '                    vertical-align: top;' +
    '                    width: 100%;' +
    '                  "' +
    '                >' +
    '                  <table' +
    '                    align="left"' +
    '                    border="0"' +
    '                    cellpadding="0"' +
    '                    cellspacing="0"' +
    '                    width="100%"' +
    '                    style="max-width: 300px"' +
    '                  >' +
    '                    <tr>' +
    '                      <td' +
    '                        align="center"' +
    '                        valign="top"' +
    '                        style="' +
    '                          font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                          font-size: 36px;' +
    '                          font-weight: 800;' +
    '                          line-height: 48px;' +
    '                        "' +
    '                        class="mobile-center"' +
    '                      >' +
    '                        <a href="https://autopacksummit.com">' +
    '                          <img' +
    '                            src="https://apsmedia.s3.amazonaws.com/images/aps_logo_email.png"' +
    '                            width="200"' +
    '                            height="auto"' +
    '                            style="display: block; border: 0px"' +
    '                          />' +
    '                        </a>' +
    '                      </td>' +
    '                    </tr>' +
    '                  </table>' +
    '                </div>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                <td align="right" width="300">' +
    '                <![endif]-->' +
    '' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '              </td>' +
    '            </tr>' +
    '            <tr>' +
    '              <td' +
    '                align="center"' +
    '                style="padding: 35px 35px 20px 35px; background-color: #ffffff"' +
    '                bgcolor="#ffffff"' +
    '              >' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table' +
    '                  align="center"' +
    '                  border="0"' +
    '                  cellpadding="0"' +
    '                  cellspacing="0"' +
    '                  width="100%"' +
    '                  style="max-width: 600px"' +
    '                >' +
    '                  <tr>' +
    '                    <td' +
    '                      align="center"' +
    '                      style="' +
    '                        font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                        font-size: 16px;' +
    '                        font-weight: 400;' +
    '                        line-height: 24px;' +
    '                        padding-top: 25px;' +
    '                      "' +
    '                    >' +
    '                      <img' +
    '                        src="https://apsmedia.s3.amazonaws.com/images/giphy.gif"' +
    '                        width="200"' +
    '                        height="200"' +
    '                        style="display: block; border: 0px"' +
    '                      /><br />' +
    '                      <h2' +
    '                        style="' +
    '                          font-size: 30px;' +
    '                          font-weight: 800;' +
    '                          line-height: 36px;' +
    '                          color: #333333;' +
    '                          margin: 0;' +
    '                        "' +
    '                      >' +
    '                        Yout spot has been reserved.' +
    '                      </h2>' +
    '                    </td>' +
    '                  </tr>' +
    '                  <tr>' +
    '                    <td' +
    '                      align="left"' +
    '                      style="' +
    '                        font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                        font-size: 16px;' +
    '                        font-weight: 400;' +
    '                        line-height: 24px;' +
    '                        padding-top: 10px;' +
    '                      "' +
    '                    >' +
    '                      <p' +
    '                        style="' +
    '                          font-size: 16px;' +
    '                          font-weight: 400;' +
    '                          line-height: 24px;' +
    '                          color: #666;' +
    '                        "' +
    '                      >' +
    '                        Thank you for signing up for' +
    '                        <span style="color: #000; font-weight: 800"' +
    `                          >${tour}</span` +
    '                        >' +
    '                        on' +
    '                        <span style="color: #000; font-weight: 800"' +
    '                          >Friday, October 13th.</span' +
    '                        >' +
    '                        Your tour starts at' +
    '                        <span style="color: #000; font-weight: 800"' +
    '                          >10 am.</span' +
    '                        >' +
    '                        Please contact' +
    '                        <a' +
    '                          href="mailto:diana@packagingschool.com"' +
    '                          style="color: #005892"' +
    '                          >diana@packagingschool.com</a' +
    '                        >' +
    '                        for any questions you have about the tour. We will be in' +
    '                        touch with further details.' +
    '                      </p>' +
    '                    </td>' +
    '                  </tr>' +
    '                  <tr></tr>' +
    '                  <tr></tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '              </td>' +
    '            </tr>' +
    '            <tr>' +
    '              <td' +
    '                align="center"' +
    '                height="100%"' +
    '                valign="top"' +
    '                width="100%"' +
    '                style="padding: 0 35px 35px 35px; background-color: #ffffff"' +
    '                bgcolor="#ffffff"' +
    '              >' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table' +
    '                  align="center"' +
    '                  border="0"' +
    '                  cellpadding="0"' +
    '                  cellspacing="0"' +
    '                  width="100%"' +
    '                  style="max-width: 660px"' +
    '                >' +
    '                  <tr>' +
    '                    <td align="center" valign="top" style="font-size: 0">' +
    '                      <!--[if (gte mso 9)|(IE)]>' +
    '                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                            <tr>' +
    '                            <td align="left" valign="top" width="300">' +
    '                            <![endif]-->' +
    '                      <div' +
    '                        style="' +
    '                          display: inline-block;' +
    '                          max-width: 50%;' +
    '                          min-width: 240px;' +
    '                          vertical-align: top;' +
    '                          width: 100%;' +
    '                        "' +
    '                      >' +
    '                        <table' +
    '                          align="left"' +
    '                          border="0"' +
    '                          cellpadding="0"' +
    '                          cellspacing="0"' +
    '                          width="100%"' +
    '                          style="max-width: 300px"' +
    '                        >' +
    '                          <tr></tr>' +
    '                        </table>' +
    '                      </div>' +
    '                      <!--[if (gte mso 9)|(IE)]>' +
    '                            </td>' +
    '                            <td align="left" valign="top" width="300">' +
    '                            <![endif]-->' +
    '                      <div' +
    '                        style="' +
    '                          display: inline-block;' +
    '                          max-width: 50%;' +
    '                          min-width: 240px;' +
    '                          vertical-align: top;' +
    '                          width: 100%;' +
    '                        "' +
    '                      >' +
    '                        <table' +
    '                          align="left"' +
    '                          border="0"' +
    '                          cellpadding="0"' +
    '                          cellspacing="0"' +
    '                          width="100%"' +
    '                          style="max-width: 300px"' +
    '                        >' +
    '                          <tr></tr>' +
    '                        </table>' +
    '                      </div>' +
    '                      <!--[if (gte mso 9)|(IE)]>' +
    '                            </td>' +
    '                            </tr>' +
    '                            </table>' +
    '                            <![endif]-->' +
    '                    </td>' +
    '                  </tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '              </td>' +
    '            </tr>' +
    '            <tr></tr>' +
    '            <tr>' +
    '              <td' +
    '                align="center"' +
    '                style="padding: 35px; background-color: #222"' +
    '                bgcolor="#ffffff"' +
    '              >' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                <tr>' +
    '                <td align="center" valign="top" width="600">' +
    '                <![endif]-->' +
    '                <table' +
    '                  align="center"' +
    '                  border="0"' +
    '                  cellpadding="0"' +
    '                  cellspacing="0"' +
    '                  width="100%"' +
    '                  style="max-width: 600px"' +
    '                >' +
    '                  <tr>' +
    '                    <td align="center">' +
    '                      <a href="https://autopacksummit.com">' +
    '                        <img' +
    '                          src="https://apsmedia.s3.amazonaws.com/images/aps_icon.png"' +
    '                          width="37"' +
    '                          height="auto"' +
    '                          style="display: block; border: 0px"' +
    '                      /></a>' +
    '                    </td>' +
    '                  </tr>' +
    '                  <tr>' +
    '                    <td' +
    '                      align="center"' +
    '                      style="' +
    '                        font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                        font-size: 14px;' +
    '                        font-weight: 400;' +
    '                        line-height: 24px;' +
    '                        padding: 5px 0 10px 0;' +
    '                      "' +
    '                    >' +
    '                      <p' +
    '                        style="' +
    '                          font-size: 14px;' +
    '                          font-weight: 800;' +
    '                          line-height: 18px;' +
    '                          color: #e4a800;' +
    '                        "' +
    '                      >' +
    '                        October 11 - 13th<br />' +
    '                        <span' +
    '                          style="' +
    '                            font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                            font-size: 14px;' +
    '                            font-weight: 400;' +
    '                            line-height: 24px;' +
    '                            padding: 5px 0 0 0;' +
    '                            color: #fff;' +
    '                          "' +
    '                          >Huguenot Loft, Greenville SC</span' +
    '                        >' +
    '                      </p>' +
    '                    </td>' +
    '                  </tr>' +
    '                </table>' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '                </td>' +
    '                </tr>' +
    '                </table>' +
    '                <![endif]-->' +
    '              </td>' +
    '            </tr>' +
    '          </table>' +
    '          <!--[if (gte mso 9)|(IE)]>' +
    '        </td>' +
    '        </tr>' +
    '        </table>' +
    '        <![endif]-->' +
    '        </td>' +
    '      </tr>' +
    '    </table>' +
    '  </body>' +
    '</html>';

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          toAddress,
          // 'diana@packagingschool.com',
          // 'bianca@packagingschool.com',
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Data: myvar,
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'TEXT_FORMAT_BODY',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Automotive Packaging Summit Tour Confirmation',
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };

  try {
    const tourist = await API.graphql({
      query: createTourist,
      variables: {
        input: {
          fullName: fullName,
          email: email,
          phone: phone,
          tour: tour,
          company: company,
        },
      },
    });

    await sesClient.send(
      createSendEmailCommand(email, 'jamie@packagingschool.com')
    );

    res.status(200).json({
      message: `Successfully saved a spot for ${tourist.data.createTourist.fullName} and confirmation email was sent to ${tourist.data.createTourist.email}`,
    });
  } catch (error) {
    res.status(410).json({ message: error });
  }
}
