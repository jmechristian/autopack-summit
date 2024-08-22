import React, { useState, useMemo } from 'react';
import BrutalistButton from '../../../shared/BrutalistButton';
import { sendClemson, sendGuardian } from '../../../util/api';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { createClemsonForm } from '../../../src/graphql/mutations';
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
      query: createClemsonForm,
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
    await sendClemson({
      name,
      email,
      company,
      title,
      id: uid.data.createClemsonForm.id,
    });
    setIsSending(false);
    router.push('/tours/thank-you');
  };

  return (
    <div className='max-w-6xl mx-auto px-4 xl:px-0'>
      <div className='flex flex-col gap-10 py-10 relative w-full divide-y-2 divide-black'>
        {/* HEADER */}
        <div className='flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='font-medium font-oswald text-3xl md:text-4xl lg:text-5xl uppercase max-w-3xl'>
              Clemson University Tour
            </div>
            <div className='text-lg font-bold text-ap-darkblue'>
              Wednesday, October 23rd 10:00 AM - 12:00 PM
            </div>
          </div>
          <div className='max-w-[200px] lg:max-w-[250px] w-full'>
            <Image
              src={'https://packschool.s3.amazonaws.com/orange-purple.png'}
              alt='Clemson University logo'
              width={567}
              height={143}
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 pt-10'>
          <div className='flex flex-col gap-5 mt-1.5'>
            <div className='font-bold'>
              Join us for an exclusive tour of Clemson University and the Harris
              A. Smith Building (Sonoco Institute of Packaging Design and
              Graphics), including a visit to their cutting-edge testing lab.
            </div>
            <div>
              The Harris A. Smith building stands as a distinguished hub for
              education, research, and industry collaboration, dedicated to
              pioneering advanced solutions and resources for the future of the
              printing and packaging value chain. During the tour, you'll also
              have the opportunity to explore the Center for Flexible Packaging,
              which features state-of-the-art research lab facilities and
              distribution testing equipment.
            </div>
            <div>
              Please note that the tour involves walking across campus, so we
              recommend wearing comfortable clothing and appropriate footwear.
            </div>
            <div>Limited Space Available!</div>
            <div>
              <i>Transportation and parking are not provided.</i>
            </div>
            <div className='flex flex-col gap-0'>
              <div className='font-bold'>Meeting Point:</div>
              <div>Front Entrance of the Harris A. Smith Building</div>
              <div>(Sonoco Institute of Packaging Design and Graphics)</div>
              <div>320 Fernow Street </div>
              <div>Clemson, SC 29634-001 </div>
            </div>
            <div className='flex flex-col gap-0'>
              <div>
                <strong>Tour start time:</strong> 10am
              </div>
              <div>
                <strong>Recommended Arrival Time:</strong> 9:30am
              </div>
            </div>
            <div>
              <strong>Parking Information:</strong> Please familiarize yourself
              with the attached{' '}
              <span className='font-bold text-ap-blue cursor-pointer'>
                <a
                  href='https://packschool.s3.amazonaws.com/Clemson-Tour-Map.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  campus and parking map.
                </a>
              </span>{' '}
              We highly recommend using the METERED PARKING areas.
            </div>
            <div>
              <div>
                For questions regarding this tour please reach out to Lars or
                Bianca: <br />
                <span className='font-bold text-ap-blue cursor-pointer'>
                  <a
                    href='mailto:Lars@packagingschool.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Lars@packagingschool.com
                  </a>
                </span>
                <br />
                <span className='font-bold text-ap-blue cursor-pointer'>
                  <a
                    href='mailto:Bianca@packagingschool.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Bianca@packagingschool.com
                  </a>
                </span>
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
