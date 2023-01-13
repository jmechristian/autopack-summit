const aws = require('aws-sdk');
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name } = event.body;

  let transporter = nodemailer.createTransport({
    SES: new aws.SES({ region: 'us-east-1', apiVersion: '2010-12-01' }),
  });

  let emailProps = await transporter.sendMail({
    from: 'jamie@packagingschool.com',
    to: 'jamie@packagingschool.com',
    text: 'jamie@packagingschool.com',
    html: '<div>' + name + '<div>',
  });

  return emailProps;
};
