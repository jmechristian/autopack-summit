var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'us-east-1' });
exports.handler = async function (event) {
  const body = JSON.parse(event.body);

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
    '                    <img' +
    '                      src="https://apsmedia.s3.amazonaws.com/images/email_header.png"' +
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
    '                        font-weight: bold;' +
    '                      "' +
    '                    >' +
    '                      Hello Diana and Bianca!' +
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
    `                      ${body.name}` +
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
    '                        font-size: 20px;' +
    '                        line-height: 18px;' +
    '                      "' +
    '                    >' +
    '                      Registration Code' +
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
    `                      ${body.regCode}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
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
    '                      Works With' +
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
    `                      ${body.worksWith}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
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
    '                      Speed Networking' +
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
    `                      ${body.speedNetworking}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
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
    '                      Innovation Workshop' +
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
    `                      ${body.innovationWorkshop}` +
    '                    </p>' +
    '                  </div>' +
    '                </div>' +
    '                <!--[if mso]> ' +
    '            </td> ' +
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
    '                      Plant Tour' +
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
    `                      ${body.plantTour}` +
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
    `                        href="https://4mwprd7rph.execute-api.us-east-1.amazonaws.com/default/handleRegistrationv2?email=${body.email}&name=${body.name}&company=${body.company}&title=${body.title}&phone=${body.phone}"` +
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

  var params = {
    Destination: {
      ToAddresses: [
        'jamie@packagingschool.com',
        'diana@packagingschool.com',
        'bianca@packagingschool.com',
      ],
    },
    Message: {
      Body: {
        Text: { Data: 'Test' },
        Html: { Data: myVar },
      },

      Subject: { Data: `APS Registration From ${body.name}` },
    },
    Source: 'jamie@packagingschool.com',
  };

  try {
    const email = await ses.sendEmail(params).promise();
    console.log(email);
  } catch (err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(event),
  };
};
