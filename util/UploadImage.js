import axios from 'axios';
import { useEffect, useState } from 'react';

const UploadImage = ({ setUrl }) => {
  const [file, setFile] = useState(null);
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [buttonText, setButtonText] = useState('Upload Your Profile Pic');

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[\s_-]+/g, '-');

  const uploadFile = async () => {
    const cleanUrl = slugify(file.name);
    setUploadingStatus(true);

    let { data } = await axios.post('/api/s3/upload', {
      name: `images/${cleanUrl}`,
      type: file.type,
    });

    const url = data.url;

    await axios
      .put(url, file, {
        headers: {
          'Content-type': file.type,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        const cleanName = slugify(response.config.data.name);
        if (response.status === 200) {
          setFile(`https://apsmedia.s3.amazonaws.com/images/${cleanName}`);
          setUrl(`https://apsmedia.s3.amazonaws.com/images/${cleanName}`);
          setButtonText('Uploaded!');
        }
      });

    setUploadingStatus(false);
    setFile(null);
  };

  useEffect(() => {
    if (file) {
      const uploadedFileDetail = async () => await uploadFile();
      uploadedFileDetail();
    }
  }, [file]);

  return (
    <div className='text-ap-blue border-2 font-bold border-ap-blue py-3 px-6 rounded-lg cursor-pointer'>
      <p>{uploadingStatus ? 'Uploading...' : buttonText}</p>
      <input
        type='file'
        accept='image/*'
        name='profile'
        id='profile'
        className='sr-only'
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
};

export default UploadImage;
