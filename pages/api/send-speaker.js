import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
const REGION = 'us-east-1';
const creds = {
  accessKeyId: process.env.AWSACCESSKEYID,
  secretAccessKey: process.env.AWSSECRETACCESSKEY,
};
// Create SES service object.
const sesClient = new SESClient({ region: REGION, credentials: creds });
export { sesClient };

// export default async (req, res) => {
//   const myVar =
//     '<!DOCTYPE html>' +
//     '<html' +
//     '  lang="en"' +
//     '  xmlns="https://www.w3.org/1999/xhtml"' +
//     '  xmlns:o="urn:schemas-microsoft-com:office:office"' +
//     '>' +
//     '  <head>' +
//     '    <meta charset="utf-8" />' +
//     '    <meta name="viewport" content="width=device-width,initial-scale=1" />' +
//     '    <meta name="x-apple-disable-message-reformatting" />' +
//     '    <!--[if !mso]><!-->' +
//     '    <meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
//     '    <!--<![endif]-->' +
//     '    <title></title>' +
//     '    <!--[if mso]>' +
//     '      <style type="text/css">' +
//     '        table {' +
//     '          border-collapse: collapse;' +
//     '          border: 0;' +
//     '          border-spacing: 0;' +
//     '          margin: 0;' +
//     '        }' +
//     '        div,' +
//     '        td {' +
//     '          padding: 0;' +
//     '        }' +
//     '        div {' +
//     '          margin: 0 !important;' +
//     '        }' +
//     '      </style>' +
//     '      <noscript>' +
//     '        <xml>' +
//     '          <o:OfficeDocumentSettings>' +
//     '            <o:PixelsPerInch>96</o:PixelsPerInch>' +
//     '          </o:OfficeDocumentSettings>' +
//     '        </xml>' +
//     '      </noscript>' +
//     '    <![endif]-->' +
//     '  </head>' +
//     '  <body' +
//     '    style="' +
//     '      margin: 0;' +
//     '      padding: 0;' +
//     '      word-spacing: normal;' +
//     '      background-color: #ffffff;' +
//     '    "' +
//     '  >' +
//     '    <div' +
//     '      role="article"' +
//     '      aria-roledescription="email"' +
//     '      lang="en"' +
//     '      style="' +
//     '        -webkit-text-size-adjust: 100%;' +
//     '        -ms-text-size-adjust: 100%;' +
//     '        background-color: #efefef;' +
//     '      "' +
//     '    >' +
//     '      <table' +
//     '        role="presentation"' +
//     '        style="width: 100%; border: 0; border-spacing: 0"' +
//     '      >' +
//     '        <tr>' +
//     '          <td align="center">' +
//     '            <!--[if mso]> ' +
//     '<table role="presentation" align="center" style="width:660px;"> ' +
//     '<tr> ' +
//     '<td style="padding:20px 0;"> ' +
//     '<![endif]-->' +
//     '            <div' +
//     '              class="outer"' +
//     '              style="' +
//     '                width: 96%;' +
//     '                max-width: 660px;' +
//     '                margin: 20px auto;' +
//     '                background-color: #ffffff;' +
//     '              "' +
//     '            >' +
//     '              <table' +
//     '                role="presentation"' +
//     '                style="width: 100%; border: 0; border-spacing: 0"' +
//     '              >' +
//     '                <tr>' +
//     '                  <td' +
//     '                    style="' +
//     '                      padding: 10px 10px 20px 10px;' +
//     '                      font-family: Arial, sans-serif;' +
//     '                      font-size: 24px;' +
//     '                      line-height: 28px;' +
//     '                    "' +
//     '                  >' +
//     '                    <img' +
//     '                      src="https://apsmedia.s3.amazonaws.com/images/email_header_speaker.png"' +
//     '                      width="640"' +
//     '                      alt=""' +
//     '                      style="width: 100%; height: auto"' +
//     '                    />' +
//     '                  </td>' +
//     '                </tr>' +
//     '                <tr>' +
//     '                  <td style="padding: 10px; text-align: left">' +
//     '                    <h1' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 16px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 26px;' +
//     '                        line-height: 32px;' +
//     '                      "' +
//     '                    >' +
//     '                      Hello Diana,' +
//     '                    </h1>' +
//     '                  </td>' +
//     '                </tr>' +
//     '              </table>' +
//     '              <div' +
//     '                class="spacer"' +
//     '                style="' +
//     '                  line-height: 26px;' +
//     '                  height: 26px;' +
//     '                  mso-line-height-rule: exactly;' +
//     '                "' +
//     '              >' +
//     '                 ' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      First Name' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.firstName}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Last Name' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.lastName}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Email' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.email}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Company' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.company}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Title' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.title}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      LinkedIn' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.linkedin}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Bio' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.bio}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Profile Pic' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.headshot}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Preso Title' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.presentationTitle}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Preso Summary' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.presentationSummary}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Media Consent' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.mediaConsent}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '              <div class="two-col" style="text-align: left; font-size: 0">' +
//     '                <!--[if mso]> ' +
//     '            <table role="presentation" width="100%"> ' +
//     '            <tr> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="width: 100%; max-width: 330px; display: inline-block"' +
//     '                >' +
//     '                  <div style="padding: 10px">' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin: 0;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                        font-size: 16px;' +
//     '                        line-height: 18px;' +
//     '                        font-weight: bold;' +
//     '                      "' +
//     '                    >' +
//     '                      Info Consent' +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            <td style="width:50%;padding:10px;" valign="middle"> ' +
//     '            <![endif]-->' +
//     '                <div' +
//     '                  class="column"' +
//     '                  style="' +
//     '                    width: 100%;' +
//     '                    max-width: 330px;' +
//     '                    display: inline-block;' +
//     '                    vertical-align: middle;' +
//     '                  "' +
//     '                >' +
//     '                  <div' +
//     '                    style="' +
//     '                      padding: 10px;' +
//     '                      font-size: 16px;' +
//     '                      line-height: 18px;' +
//     '                      text-align: left;' +
//     '                    "' +
//     '                  >' +
//     '                    <p' +
//     '                      style="' +
//     '                        margin-top: 0;' +
//     '                        margin-bottom: 12px;' +
//     '                        font-family: Arial, sans-serif;' +
//     '                      "' +
//     '                    >' +
//     `                      ${body.privacyConsent}` +
//     '                    </p>' +
//     '                  </div>' +
//     '                </div>' +
//     '                <!--[if mso]> ' +
//     '            </td> ' +
//     '            </tr> ' +
//     '            </table> ' +
//     '            <![endif]-->' +
//     '              </div>' +
//     '' +
//     '              <div' +
//     '                class="spacer"' +
//     '                style="' +
//     '                  line-height: 24px;' +
//     '                  height: 24px;' +
//     '                  mso-line-height-rule: exactly;' +
//     '                "' +
//     '              >' +
//     '                 ' +
//     '              </div>' +
//     '            </div>' +
//     '            <!--[if mso]> ' +
//     '</td> ' +
//     '</tr> ' +
//     '</table> ' +
//     '<![endif]-->' +
//     '          </td>' +
//     '        </tr>' +
//     '      </table>' +
//     '    </div>' +
//     '  </body>' +
//     '</html>';

//   var params = {
//     Destination: {
//       ToAddresses: [
//         'jamie@packagingschool.com',
//         'diana@packagingschool.com',
//         'bianca@packagingschool.com',
//       ],
//     },
//     Message: {
//       Body: {
//         Text: { Data: 'Hey' },
//         Html: { Data: myVar },
//       },

//       Subject: { Data: `Sponsor Submission from ${body.name}` },
//     },
//     Source: 'jamie@packagingschool.com',
//   };

//   try {
//     const send = await ses.sendEmail(params).promise();
//     console.log(send);
//   } catch (err) {
//     console.log(err);
//   }

//   return {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': '*',
//     },
//     body: JSON.stringify(event),
//   };
// };

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
    '                    "' +
    '                  >' +
    '                    <img' +
    '                      src="https://apsmedia.s3.amazonaws.com/images/email_header_speaker.png"' +
    '                      width="640"' +
    '                      alt=""' +
    '                      style="width: 100%; height: auto"' +
    '                    />' +
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
    '                      "' +
    '                    >' +
    '                      Hello Diana,' +
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
    '                 ' +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      First Name' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.firstName}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Last Name' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.lastName}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Title' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.title}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      LinkedIn' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.linkedin}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Bio' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.bio}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Profile Pic' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.headshot}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Preso Title' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.presentationTitle}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Preso Summary' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.presentationSummary}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Media Consent' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.mediaConsent}` +
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
    '                        font-size: 16px;' +
    '                        line-height: 18px;' +
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Info Consent' +
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
    '                      font-size: 16px;' +
    '                      line-height: 18px;' +
    '                      text-align: left;' +
    '                    "' +
    '                  >' +
    '                    <p' +
    '                      style="' +
    '                        margin-top: 0;' +
    '                        margin-bottom: 12px;' +
    '                        font-family: Arial, sans-serif;' +
    '                      "' +
    '                    >' +
    `                      ${body.privacyConsent}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
    '            </tr> ' +
    '            </table> ' +
    '            <![endif]-->' +
    '              </div>' +
    '' +
    '              <div' +
    '                class="spacer"' +
    '                style="' +
    '                  line-height: 24px;' +
    '                  height: 24px;' +
    '                  mso-line-height-rule: exactly;' +
    '                "' +
    '              >' +
    '                 ' +
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
          'bianca@packagingschool.com',
          /* more To-email addresses */
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
          Data: 'APS Speaker Profile',
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
        'diana@packagingschool.com',
        'jamie@packagingschool.com'
      )
    );
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(410).json({ message: error });
  }
}
