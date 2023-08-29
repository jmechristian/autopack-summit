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
    '<html>' +
    ' <head>' +
    '   <title></title>' +
    '   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
    '   <meta name="viewport" content="width=device-width, initial-scale=1" />' +
    '   <meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
    '   <style type="text/css">' +
    '     /* CLIENT-SPECIFIC STYLES */' +
    '     body,' +
    '     table,' +
    '     td,' +
    '     a {' +
    '       -webkit-text-size-adjust: 100%;' +
    '       -ms-text-size-adjust: 100%;' +
    '     }' +
    '     table,' +
    '     td {' +
    '       mso-table-lspace: 0pt;' +
    '       mso-table-rspace: 0pt;' +
    '     }' +
    '     img {' +
    '       -ms-interpolation-mode: bicubic;' +
    '     }' +
    '      /* RESET STYLES */' +
    '     img {' +
    '       border: 0;' +
    '       height: auto;' +
    '       line-height: 100%;' +
    '       outline: none;' +
    '       text-decoration: none;' +
    '     }' +
    '     table {' +
    '       border-collapse: collapse !important;' +
    '     }' +
    '     body {' +
    '       height: 100% !important;' +
    '       margin: 0 !important;' +
    '       padding: 0 !important;' +
    '       width: 100% !important;' +
    '     }' +
    '      /* iOS BLUE LINKS */' +
    '     a[x-apple-data-detectors] {' +
    '       color: inherit !important;' +
    '       text-decoration: none !important;' +
    '       font-size: inherit !important;' +
    '       font-family: inherit !important;' +
    '       font-weight: inherit !important;' +
    '       line-height: inherit !important;' +
    '     }' +
    '      /* MEDIA QUERIES */' +
    '     @media screen and (max-width: 480px) {' +
    '       .mobile-hide {' +
    '         display: none !important;' +
    '       }' +
    '       .mobile-center {' +
    '         text-align: center !important;' +
    '       }' +
    '     }' +
    '      /* ANDROID CENTER FIX */' +
    "     div[style*='margin: 16px 0;'] {" +
    '       margin: 0 !important;' +
    '     }' +
    '   </style>' +
    ' </head>' +
    ' <body' +
    '   style="' +
    '     margin: 0 !important;' +
    '     padding: 0 !important;' +
    '     background-color: #eeeeee;' +
    '   "' +
    '   bgcolor="#eeeeee"' +
    ' >' +
    '   <table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '     <tr>' +
    '       <td align="center" style="background-color: #eeeeee" bgcolor="#eeeeee">' +
    '         <!--[if (gte mso 9)|(IE)]>' +
    '       <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '       <tr>' +
    '       <td align="center" valign="top" width="600">' +
    '       <![endif]-->' +
    '         <table' +
    '           align="center"' +
    '           border="0"' +
    '           cellpadding="0"' +
    '           cellspacing="0"' +
    '           width="100%"' +
    '           style="max-width: 600px"' +
    '         >' +
    '           <tr>' +
    '             <td' +
    '               align="center"' +
    '               valign="top"' +
    '               style="font-size: 0; padding: 35px"' +
    '               bgcolor="#005892"' +
    '             >' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '               <tr>' +
    '               <td align="left" valign="top" width="300">' +
    '               <![endif]-->' +
    '               <div' +
    '                 style="' +
    '                   display: inline-block;' +
    '                   max-width: 50%;' +
    '                   min-width: 100px;' +
    '                   vertical-align: top;' +
    '                   width: 100%;' +
    '                 "' +
    '               >' +
    '                 <table' +
    '                   align="left"' +
    '                   border="0"' +
    '                   cellpadding="0"' +
    '                   cellspacing="0"' +
    '                   width="100%"' +
    '                   style="max-width: 300px"' +
    '                 >' +
    '                   <tr>' +
    '                     <td' +
    '                       align="center"' +
    '                       valign="top"' +
    '                       style="' +
    '                         font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                         font-size: 36px;' +
    '                         font-weight: 800;' +
    '                         line-height: 48px;' +
    '                       "' +
    '                       class="mobile-center"' +
    '                     >' +
    '                       <img' +
    '                         src="https://apsmedia.s3.amazonaws.com/images/aps_logo_email.png"' +
    '                         width="150"' +
    '                         height="auto"' +
    '                         style="display: block; border: 0px"' +
    '                       />' +
    '                     </td>' +
    '                   </tr>' +
    '                 </table>' +
    '               </div>' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               </td>' +
    '               <td align="right" width="300">' +
    '               <![endif]-->' +
    '                <!--[if (gte mso 9)|(IE)]>' +
    '               </td>' +
    '               </tr>' +
    '               </table>' +
    '               <![endif]-->' +
    '             </td>' +
    '           </tr>' +
    '           <tr>' +
    '             <td' +
    '               align="center"' +
    '               style="padding: 35px 35px 20px 35px; background-color: #ffffff"' +
    '               bgcolor="#ffffff"' +
    '             >' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '               <tr>' +
    '               <td align="center" valign="top" width="600">' +
    '               <![endif]-->' +
    '               <table' +
    '                 align="center"' +
    '                 border="0"' +
    '                 cellpadding="0"' +
    '                 cellspacing="0"' +
    '                 width="100%"' +
    '                 style="max-width: 600px"' +
    '               >' +
    '                 <tr>' +
    '                   <td' +
    '                     align="center"' +
    '                     style="' +
    '                       font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                       font-size: 16px;' +
    '                       font-weight: 400;' +
    '                       line-height: 24px;' +
    '                       padding-top: 25px;' +
    '                     "' +
    '                   >' +
    '                     <img' +
    '                       src="https://media.giphy.com/media/JmsX3capTkidb1jlHt/giphy.gif"' +
    '                       width="200"' +
    '                       height="200"' +
    '                       style="display: block; border: 0px"' +
    '                     /><br />' +
    '                     <h2' +
    '                       style="' +
    '                         font-size: 40px;' +
    '                         font-weight: 800;' +
    '                         line-height: 36px;' +
    '                         color: #333333;' +
    '                         margin: 0;' +
    '                       "' +
    '                     >' +
    '                       General Admission<br />' +
    '                       Ticket Purchase' +
    '                     </h2>' +
    '                   </td>' +
    '                 </tr>' +
    '                 <tr>' +
    '                   <td' +
    '                     align="left"' +
    '                     style="' +
    '                       font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                       font-size: 16px;' +
    '                       font-weight: 400;' +
    '                       line-height: 24px;' +
    '                       padding-top: 10px;' +
    '                     "' +
    '                   >' +
    '                     <p' +
    '                       style="' +
    '                         font-size: 20px;' +
    '                         font-weight: 400;' +
    '                         line-height: 36px;' +
    '                         color: #666;' +
    '                       "' +
    '                     >' +
    `                       Name: <strong>${body.name}</strong><br />Email:<strong>` +
    `                         ${body.email}</strong` +
    `                       ><br />Company:<strong> ${body.company}</strong` +
    `                       ><br />Title:<strong> ${body.title}</strong` +
    `                       ><br />Phone:<strong> ${body.phone}</strong>` +
    '                     </p>' +
    '                   </td>' +
    '                 </tr>' +
    '                 <tr></tr>' +
    '                 <tr></tr>' +
    '               </table>' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               </td>' +
    '               </tr>' +
    '               </table>' +
    '               <![endif]-->' +
    '             </td>' +
    '           </tr>' +
    '           <tr>' +
    '             <td' +
    '               align="center"' +
    '               height="100%"' +
    '               valign="top"' +
    '               width="100%"' +
    '               style="padding: 0 35px 35px 35px; background-color: #ffffff"' +
    '               bgcolor="#ffffff"' +
    '             >' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '               <tr>' +
    '               <td align="center" valign="top" width="600">' +
    '               <![endif]-->' +
    '               <table' +
    '                 align="center"' +
    '                 border="0"' +
    '                 cellpadding="0"' +
    '                 cellspacing="0"' +
    '                 width="100%"' +
    '                 style="max-width: 660px"' +
    '               >' +
    '                 <tr>' +
    '                   <td align="center" valign="top" style="font-size: 0">' +
    '                     <!--[if (gte mso 9)|(IE)]>' +
    '                           <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '                           <tr>' +
    '                           <td align="left" valign="top" width="300">' +
    '                           <![endif]-->' +
    '                     <div' +
    '                       style="' +
    '                         display: inline-block;' +
    '                         max-width: 50%;' +
    '                         min-width: 240px;' +
    '                         vertical-align: top;' +
    '                         width: 100%;' +
    '                       "' +
    '                     >' +
    '                       <table' +
    '                         align="left"' +
    '                         border="0"' +
    '                         cellpadding="0"' +
    '                         cellspacing="0"' +
    '                         width="100%"' +
    '                         style="max-width: 300px"' +
    '                       >' +
    '                         <tr></tr>' +
    '                       </table>' +
    '                     </div>' +
    '                     <!--[if (gte mso 9)|(IE)]>' +
    '                           </td>' +
    '                           <td align="left" valign="top" width="300">' +
    '                           <![endif]-->' +
    '                     <div' +
    '                       style="' +
    '                         display: inline-block;' +
    '                         max-width: 50%;' +
    '                         min-width: 240px;' +
    '                         vertical-align: top;' +
    '                         width: 100%;' +
    '                       "' +
    '                     >' +
    '                       <table' +
    '                         align="left"' +
    '                         border="0"' +
    '                         cellpadding="0"' +
    '                         cellspacing="0"' +
    '                         width="100%"' +
    '                         style="max-width: 300px"' +
    '                       >' +
    '                         <tr></tr>' +
    '                       </table>' +
    '                     </div>' +
    '                     <!--[if (gte mso 9)|(IE)]>' +
    '                           </td>' +
    '                           </tr>' +
    '                           </table>' +
    '                           <![endif]-->' +
    '                   </td>' +
    '                 </tr>' +
    '               </table>' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               </td>' +
    '               </tr>' +
    '               </table>' +
    '               <![endif]-->' +
    '             </td>' +
    '           </tr>' +
    '           <tr></tr>' +
    '           <tr>' +
    '             <td' +
    '               align="center"' +
    '               style="padding: 35px; background-color: #222"' +
    '               bgcolor="#ffffff"' +
    '             >' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '               <tr>' +
    '               <td align="center" valign="top" width="600">' +
    '               <![endif]-->' +
    '               <table' +
    '                 align="center"' +
    '                 border="0"' +
    '                 cellpadding="0"' +
    '                 cellspacing="0"' +
    '                 width="100%"' +
    '                 style="max-width: 600px"' +
    '               >' +
    '                 <tr>' +
    '                   <td align="center">' +
    '                     <img src="https://apsmedia.s3.amazonaws.com/images/aps_icon.svg"' +
    '                       width="37"' +
    '                       height="37"' +
    '                       style="display: block; border: 0px"' +
    '                     />' +
    '                   </td>' +
    '                 </tr>' +
    '                 <tr>' +
    '                   <td' +
    '                     align="center"' +
    '                     style="' +
    '                       font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                       font-size: 14px;' +
    '                       font-weight: 400;' +
    '                       line-height: 24px;' +
    '                       padding: 5px 0 10px 0;' +
    '                     "' +
    '                   >' +
    '                     <p' +
    '                       style="' +
    '                         font-size: 14px;' +
    '                         font-weight: 800;' +
    '                         line-height: 18px;' +
    '                         color: #e4a800;' +
    '                       "' +
    '                     >' +
    '                       October 11 - 13th<br />' +
    '                       <span' +
    '                         style="' +
    '                           font-family: Open Sans, Helvetica, Arial, sans-serif;' +
    '                           font-size: 14px;' +
    '                           font-weight: 400;' +
    '                           line-height: 24px;' +
    '                           padding: 5px 0 0 0;' +
    '                           color: #fff;' +
    '                         "' +
    '                         >Huguenot Loft, Greenville SC</span' +
    '                       >' +
    '                     </p>' +
    '                   </td>' +
    '                 </tr>' +
    '               </table>' +
    '               <!--[if (gte mso 9)|(IE)]>' +
    '               </td>' +
    '               </tr>' +
    '               </table>' +
    '               <![endif]-->' +
    '             </td>' +
    '           </tr>' +
    '         </table>' +
    '         <!--[if (gte mso 9)|(IE)]>' +
    '       </td>' +
    '       </tr>' +
    '       </table>' +
    '       <![endif]-->' +
    '       </td>' +
    '     </tr>' +
    '   </table>' +
    '   <!-- LITMUS ATTRIBUTION -->' +
    '   <table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '     <tr>' +
    '       <td bgcolor="#ffffff" align="center">' +
    '         <!--[if (gte mso 9)|(IE)]>' +
    'table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    'tr>' +
    'td align="center" valign="top" width="600">' +
    '![endif]-->' +
    '          <!--[if (gte mso 9)|(IE)]>' +
    '/td>' +
    '/tr>' +
    '/table>' +
    '![endif]-->' +
    '       </td>' +
    '     </tr>' +
    '   </table>' +
    '   <!-- END LITMUS ATTRIBUTION -->' +
    ' </body>' +
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
          'diana@packagingschool.com',
          'bianca@packagingschool.com',
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
          Data: 'APS Ticket Purchase',
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
