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

  const myVar =
    '<!DOCTYPE html>' +
    '<html' +
    '  lang="en"' +
    '  xmlns="https://www.w3.org/1999/xhtml"' +
    '  xmlns:o="urn:schemas-microsoft-com:office:office"' +
    '>' +
    '  <head>' +
    '    <meta charset="utf-8" />' +
    '    <meta name="viewport" content="width=device-width,initial-scale=1" />' +
    '    <meta name="x-apple-disable-message-reformatting" />' +
    '    <!--[if !mso]><!-->' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
    '    <!--<![endif]-->' +
    '    <title></title>' +
    '    <!--[if mso]>' +
    '      <style type="text/css">' +
    '        table {' +
    '          border-collapse: collapse;' +
    '          border: 0;' +
    '          border-spacing: 0;' +
    '          margin: 0;' +
    '        }' +
    '        div,' +
    '        td {' +
    '          padding: 0;' +
    '        }' +
    '        div {' +
    '          margin: 0 !important;' +
    '        }' +
    '      </style>' +
    '      <noscript>' +
    '        <xml>' +
    '          <o:OfficeDocumentSettings>' +
    '            <o:PixelsPerInch>96</o:PixelsPerInch>' +
    '          </o:OfficeDocumentSettings>' +
    '        </xml>' +
    '      </noscript>' +
    '    <![endif]-->' +
    '  </head>' +
    '  <body' +
    '    style="' +
    '      margin: 0;' +
    '      padding: 0;' +
    '      word-spacing: normal;' +
    '      background-color: #ffffff;' +
    '    "' +
    '  >' +
    '    <div' +
    '      role="article"' +
    '      aria-roledescription="email"' +
    '      lang="en"' +
    '      style="' +
    '        -webkit-text-size-adjust: 100%;' +
    '        -ms-text-size-adjust: 100%;' +
    '        background-color: #efefef;' +
    '      "' +
    '    >' +
    '      <table' +
    '        role="presentation"' +
    '        style="width: 100%; border: 0; border-spacing: 0"' +
    '      >' +
    '        <tr>' +
    '          <td align="center">' +
    '            <!--[if mso]> ' +
    '<table role="presentation" align="center" style="width:660px;"> ' +
    '<tr> ' +
    '<td style="padding:20px 0;"> ' +
    '<![endif]-->' +
    '            <div' +
    '              class="outer"' +
    '              style="' +
    '                width: 96%;' +
    '                max-width: 660px;' +
    '                margin: 20px auto;' +
    '                background-color: #ffffff;' +
    '              "' +
    '            >' +
    '              <table' +
    '                role="presentation"' +
    '                style="width: 100%; border: 0; border-spacing: 0"' +
    '              >' +
    '                <tr>' +
    '                  <td' +
    '                    style="' +
    '                      padding: 10px 10px 20px 10px;' +
    '                      font-family: Arial, sans-serif;' +
    '                      font-size: 24px;' +
    '                      line-height: 28px;' +
    '                      font-weight: bold;' +
    '                    "' +
    '                  >' +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="padding: 10px; text-align: left">' +
    '                    <h1' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 16px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 26px;' +
    '                        line-height: 32px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Hello Diana: Tour Registration -' +
    '                    </h1>' +
    '                  </td>' +
    '                </tr>' +
    '              </table>' +
    '              <div' +
    '                class="spacer"' +
    '                style="' +
    '                  line-height: 26px;' +
    '                  height: 26px;' +
    '                  mso-line-height-rule: exactly;' +
    '                "' +
    '              >' +
    '                ' +
    '              </div>' +
    '              <div class="two-col" style="text-align: left; font-size: 0">' +
    '                <!--[if mso]> ' +
    '            <table role="presentation" width="100%"> ' +
    '            <tr> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="width: 100%; max-width: 330px; display: inline-block"' +
    '                >' +
    '                  <div style="padding: 10px">' +
    '                    <p' +
    '                      style="' +
    '                        margin: 0;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                      "' +
    '                    >' +
    '                      Name' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="' +
    '                    width: 100%;' +
    '                    max-width: 330px;' +
    '                    display: inline-block;' +
    '                    vertical-align: middle;' +
    '                  "' +
    '                >' +
    '                  <div' +
    '                    style="' +
    '                      padding: 10px;' +
    '                      font-size: 20px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    `                      ${body.fullName}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '              <div class="two-col" style="text-align: left; font-size: 0">' +
    '                <!--[if mso]> ' +
    '            <table role="presentation" width="100%"> ' +
    '            <tr> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="width: 100%; max-width: 330px; display: inline-block"' +
    '                >' +
    '                  <div style="padding: 10px">' +
    '                    <p' +
    '                      style="' +
    '                        margin: 0;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                      "' +
    '                    >' +
    '                      Email' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="' +
    '                    width: 100%;' +
    '                    max-width: 330px;' +
    '                    display: inline-block;' +
    '                    vertical-align: middle;' +
    '                  "' +
    '                >' +
    '                  <div' +
    '                    style="' +
    '                      padding: 10px;' +
    '                      font-size: 20px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    `                      ${body.email}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '              <div class="two-col" style="text-align: left; font-size: 0">' +
    '                <!--[if mso]> ' +
    '            <table role="presentation" width="100%"> ' +
    '            <tr> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="width: 100%; max-width: 330px; display: inline-block"' +
    '                >' +
    '                  <div style="padding: 10px">' +
    '                    <p' +
    '                      style="' +
    '                        margin: 0;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                      "' +
    '                    >' +
    '                      Phone' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="' +
    '                    width: 100%;' +
    '                    max-width: 330px;' +
    '                    display: inline-block;' +
    '                    vertical-align: middle;' +
    '                  "' +
    '                >' +
    '                  <div' +
    '                    style="' +
    '                      padding: 10px;' +
    '                      font-size: 20px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    `                      ${body.phone}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '              <div class="two-col" style="text-align: left; font-size: 0">' +
    '                <!--[if mso]> ' +
    '            <table role="presentation" width="100%"> ' +
    '            <tr> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="width: 100%; max-width: 330px; display: inline-block"' +
    '                >' +
    '                  <div style="padding: 10px">' +
    '                    <p' +
    '                      style="' +
    '                        margin: 0;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                      "' +
    '                    >' +
    '                      Company' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="' +
    '                    width: 100%;' +
    '                    max-width: 330px;' +
    '                    display: inline-block;' +
    '                    vertical-align: middle;' +
    '                  "' +
    '                >' +
    '                  <div' +
    '                    style="' +
    '                      padding: 10px;' +
    '                      font-size: 20px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    `                      ${body.company}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '              <div class="two-col" style="text-align: left; font-size: 0">' +
    '                <!--[if mso]> ' +
    '            <table role="presentation" width="100%"> ' +
    '            <tr> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="width: 100%; max-width: 330px; display: inline-block"' +
    '                >' +
    '                  <div style="padding: 10px">' +
    '                    <p' +
    '                      style="' +
    '                        margin: 0;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                      "' +
    '                    >' +
    '                      Tour' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="' +
    '                    width: 100%;' +
    '                    max-width: 330px;' +
    '                    display: inline-block;' +
    '                    vertical-align: middle;' +
    '                  "' +
    '                >' +
    '                  <div' +
    '                    style="' +
    '                      padding: 10px;' +
    '                      font-size: 20px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    `                      ${body.tour}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '              <div' +
    '                class="spacer"' +
    '                style="' +
    '                  line-height: 24px;' +
    '                  height: 24px;' +
    '                  mso-line-height-rule: exactly;' +
    '                "' +
    '              >' +
    '                ' +
    '              </div>' +
    '              <div' +
    '                class="spacer"' +
    '                style="' +
    '                  line-height: 24px;' +
    '                  height: 24px;' +
    '                  mso-line-height-rule: exactly;' +
    '                "' +
    '              >' +
    '                ' +
    '              </div>' +
    '              <div class="two-col" style="text-align: left; font-size: 0">' +
    '                <!--[if mso]> ' +
    '            <table role="presentation" width="100%"> ' +
    '            <tr> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="width: 100%; max-width: 330px; display: inline-block"' +
    '                >' +
    '                  <div style="padding: 10px">' +
    '                    <p' +
    '                      style="' +
    '                        margin: 0;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                        background-color: green;' +
    '                        color: white;' +
    '                        padding: 16px;' +
    '                        text-align: center;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      <a' +
    `                        href="https://www.autopacksummit.com/api/dynamo/create-tourist?email=${body.email}&fullName=${body.fullName}&phone=${body.phone}&tour=${body.tour}&company=${body.company}"` +
    '                        style="' +
    '                          color: white;' +
    '                          font-weight: bold;' +
    '                          text-decoration: none;' +
    '                        "' +
    '                      >' +
    '                        APPROVE' +
    '                      </a>' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            <td style="width:50%;padding:10px;" valign="middle"> ' +
    '            <![endif]-->' +
    '                <div' +
    '                  class="column"' +
    '                  style="' +
    '                    width: 100%;' +
    '                    max-width: 330px;' +
    '                    display: inline-block;' +
    '                    vertical-align: middle;' +
    '                  "' +
    '                >' +
    '                  <div' +
    '                    style="' +
    '                      padding: 10px;' +
    '                      font-size: 20px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                        font-weight: bold;' +
    '                        background-color: red;' +
    '                        color: white;' +
    '                        padding: 16px;' +
    '                        text-align: center;' +
    '                      "' +
    '                    >' +
    '                      <a' +
    '                        href="https://autopack-summit.vercel.app/denyregistration"' +
    '                        style="' +
    '                          color: white;' +
    '                          font-weight: bold;' +
    '                          text-decoration: none;' +
    '                        "' +
    '                      >' +
    '                        DECLINE' +
    '                      </a>' +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '              <div' +
    '                class="spacer"' +
    '                style="' +
    '                  line-height: 24px;' +
    '                  height: 24px;' +
    '                  mso-line-height-rule: exactly;' +
    '                "' +
    '              >' +
    '                ' +
    '              </div>' +
    '            </div>' +
    '            <!--[if mso]> ' +
    '</td> ' +
    '</tr> ' +
    '</table> ' +
    '<![endif]-->' +
    '          </td>' +
    '        </tr>' +
    '      </table>' +
    '    </div>' +
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
            Data: myVar,
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
