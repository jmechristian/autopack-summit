import React, { useState, useMemo } from 'react';
import BrutalistButton from '../../../shared/BrutalistButton';
import { sendSurgere } from '../../../util/api';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { createSurgereForm } from '../../../src/graphql/mutations';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [isSending, setIsSending] = useState(false);

  const formValid = useMemo(() => {
    if (name && email && title && company) {
      return true;
    } else return false;
  }, [name, email, company, title]);

  const clickHandler = async () => {
    formValid && setIsSending(true);
    const uid = await API.graphql({
      query: createSurgereForm,
      variables: {
        input: {
          company: company,
          email: email,
          name: name,
          title: title,
          approved: false,
        },
      },
    });
    await sendSurgere({
      name,
      email,
      company,
      title,
      id: uid.data.createSurgereForm.id,
    });
    setIsSending(false);
    router.push('/tours/thank-you');
  };

  const speakers = [
    {
      name: 'Thomas Strain',
      title: 'VP, Technology, Surgere',
    },
    {
      name: 'Michael Schwabe',
      title: 'Director, Market Intelligence, Surgere',
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 xl:px-0'>
      <div className='flex flex-col gap-10 py-10 relative w-full divide-y-2 divide-black'>
        {/* HEADER */}
        <div className='flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='font-medium font-oswald text-3xl md:text-4xl lg:text-5xl uppercase max-w-3xl'>
              From Pack to Track: Accelerate Decision Making with AI
            </div>
            <div className='text-lg font-bold text-ap-darkblue'>
              Tuesday, October 22nd 1:00 PM - 2:00 PM
            </div>
          </div>
          <div className='max-w-[200px] lg:max-w-[250px] w-full'>
            <Image
              src={'https://packschool.s3.amazonaws.com/surgere-logo.png'}
              alt='Surgere logo'
              width={500}
              height={53}
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 pt-10'>
          <div className='flex flex-col gap-5 max-w-5xl'>
            <div className='flex flex-col gap-5'>
              <p>From Pack to Track: Accelerate Decision Making with AI</p>
              <div className='flex items-start gap-5 mt-2 p-5 bg-amber-400 w-full'>
                <div className='font-medium uppercase text-sm lg:mr-5 text-white'>
                  Featuring
                </div>
                {speakers.map((sp) => (
                  <div className='leading-tight flex flex-col gap-1 w-40'>
                    <div className='font-bold'>{sp.name}</div>
                    <div className='text-xs leading-tight'>{sp.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* GALLERY */}
          {/* <div className='w-full h-full bg-ap-darkblue p-4'>
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
          </div> */}
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
          {/* <div className='my-6 w-full col-span-2'>
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
          </div> */}

          {/* BUTTON */}
          <div className='flex justify-between w-full pt-10 border-t-2 border-black col-span-2'>
            <div className='max-w-3xl text-sm lg:text-base w-full pr-6'>
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
