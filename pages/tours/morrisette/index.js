import React, { useState, useMemo } from 'react';
import BrutalistButton from '../../../shared/BrutalistButton';
import { sendMorrisette } from '../../../util/api';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { createMorrisetteForm } from '../../../src/graphql/mutations';

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [isPreference, setIsPreference] = useState(undefined);
  const [isSelectedImage, setIsSelectedImage] = useState(
    'https://packschool.s3.amazonaws.com/FredDelivers.jpg'
  );
  const [isSending, setIsSending] = useState(false);

  const notificationMethods = [
    { id: 'self', title: 'I would like to drive myself.' },
    {
      id: 'shuttle',
      title: 'I would like to take the shuttle from the Hyatt.',
    },
  ];

  const formValid = useMemo(() => {
    if (name && email && title && company && isPreference) {
      return true;
    } else return false;
  }, [name, email, company, title, isPreference]);

  const clickHandler = async () => {
    formValid && setIsSending(true);
    const uid = await API.graphql({
      query: createMorrisetteForm,
      variables: {
        input: {
          company: company,
          email: email,
          name: name,
          preference: isPreference,
          title: title,
          approved: false,
        },
      },
    });
    await sendMorrisette({
      name,
      email,
      company,
      title,
      isPreference,
      id: uid.data.createMorrisetteForm.id,
    });
    setIsSending(false);
    router.push('/tours/thank-you');
  };

  return (
    <div className='max-w-6xl mx-auto px-4 xl:px-0'>
      <div className='flex flex-col gap-10 py-10 relative w-full divide-y-2 divide-black'>
        {/* HEADER */}
        <div className='flex flex-col gap-3'>
          <div className='font-medium font-oswald text-3xl md:text-4xl lg:text-5xl uppercase max-w-3xl'>
            Morrisette Packaging Tour and Cookout Registration
          </div>
          <div className='text-lg font-bold text-ap-darkblue'>
            Monday, October 21th 10:30 AM - 1:00 PM
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 pt-10'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5'>
              <p>
                We invite you to join us on Monday, October 21st, for an
                exclusive tour of the Morrisette Packaging Solutions Center at{' '}
                <span
                  className='text-ap-darkblue underline'
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps/search/24+Tyger+River+Dr.,+Duncan,+SC+29334?entry=gmail&source=g',
                      '_blank'
                    )
                  }
                >
                  24 Tyger River Dr., Duncan, SC 29334
                </span>{' '}
                (parking is plentiful. We will guide you as you pull into the
                facility if you choose to drive separately from the group).{' '}
              </p>
              <p>
                Our state-of-the-art facility showcases cutting-edge
                technologies designed to enhance efficiency, reduce waste, and
                optimize supply chain operations through on-site prototyping and
                real-time packaging problem-solving.
              </p>
              <p>
                Following the tour, we're excited to host you for a Southern BBQ
                Cookout, complete with lunch, casual games, and fantastic
                prizes, making it a perfect opportunity to network and relax.
              </p>
            </div>
          </div>
          {/* GALLERY */}
          <div className='w-full h-full bg-ap-darkblue p-4'>
            <div className='grid grid-cols-4 gap-3 overflow-hidden'>
              <div className='col-span-3'>
                <div
                  className='aspect-[4/4] bg-black w-full bg-cover bg-center'
                  style={{ backgroundImage: `url(${isSelectedImage})` }}
                ></div>
              </div>
              <div className='col-span-1 grid grid-flow-row gap-3'>
                <div
                  className='h-full bg-black w-full bg-cover bg-center cursor-pointer'
                  style={{
                    backgroundImage: `url('https://packschool.s3.amazonaws.com/Chicken.jpg')`,
                  }}
                  onClick={() =>
                    setIsSelectedImage(
                      'https://packschool.s3.amazonaws.com/Chicken.jpg'
                    )
                  }
                ></div>
                <div
                  className='h-full bg-black w-full bg-cover bg-center cursor-pointer'
                  style={{
                    backgroundImage: `url('https://packschool.s3.amazonaws.com/GrillMasterPlaque.jpg')`,
                  }}
                  onClick={() =>
                    setIsSelectedImage(
                      'https://packschool.s3.amazonaws.com/GrillMasterPlaque.jpg'
                    )
                  }
                ></div>
                <div
                  className='h-full bg-black w-full bg-cover bg-center cursor-pointer'
                  style={{
                    backgroundImage: `url('https://packschool.s3.amazonaws.com/FredDelivers.jpg')`,
                  }}
                  onClick={() =>
                    setIsSelectedImage(
                      'https://packschool.s3.amazonaws.com/FredDelivers.jpg'
                    )
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-10 pt-10'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Name</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Email</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Company</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type='text'
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Title</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='w-full'
            />
          </div>
          {/* OPTIONS */}
          <div className='my-6 w-full col-span-2'>
            <div className='text-xs font-medium text-slate-500 uppercase w-full flex justify-between'>
              <div>Please choose your preference:</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <fieldset className='mt-4'>
              <legend className='sr-only'>Notification method</legend>
              <div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
                {notificationMethods.map((notificationMethod) => (
                  <div
                    key={notificationMethod.id}
                    className='flex items-center'
                  >
                    <input
                      id={notificationMethod.id}
                      name='notification-method'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      onChange={(e) => setIsPreference(e.target.id)}
                    />
                    <label
                      htmlFor={notificationMethod.id}
                      className='ml-3 block font-medium leading-6 text-gray-900'
                    >
                      {notificationMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          {/* BUTTON */}
          <div className='flex justify-between w-full pt-10 border-t-2 border-black col-span-2'>
            <div className='max-w-3xl w-full'>
              Once availability is confirmed and if space permits, you will
              receive a confirmation email within a few days. We appreciate your
              patience and look forward to hosting you!
            </div>
            <div className='w-fit'>
              <BrutalistButton
                bgColor={'bg-ap-darkblue'}
                textColor={'text-white'}
                text={isSending ? 'Sending...' : 'Submit'}
                fn={clickHandler}
                disabled={!formValid}
                loading={isSending}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
