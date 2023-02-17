import S3 from 'aws-sdk/clients/s3';

const creds = {
  accessKeyId: 'AKIAYBLPHMU2D5JXLDFC',
  secretAccessKey: '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',
};
const s3 = new S3({
  region: 'us-east-1',
  credentials: creds,
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    let { name, type } = req.body;

    const fileParams = {
      Bucket: 'apsmedia',
      Key: name,
      ContentType: type,
    };

    const url = await s3.getSignedUrlPromise('putObject', fileParams);

    res.status(200).json({ url });
    return url;
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '2mb', // Set desired value here
    },
  },
};
