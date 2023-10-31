import React from 'react';
import HeaderPadding from '../shared/HeaderPadding';
import { CloudArrowDownIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import { Slideshow } from '../shared/Slideshow';

const stats = [
  { id: 1, name: 'Professionals Registered', value: '280 ' },
  { id: 2, name: 'Solution Providers', value: '32' },
  { id: 3, name: 'Expert Speakers', value: '14' },
];

const firstImage = [
  'https://apsmedia.s3.amazonaws.com/speakers_7.png',
  'https://apsmedia.s3.amazonaws.com/full_room.png',
  'https://apsmedia.s3.amazonaws.com/speakers_2.png',
  'https://apsmedia.s3.amazonaws.com/social.png',
  'https://apsmedia.s3.amazonaws.com/social7.png',
  'https://apsmedia.s3.amazonaws.com/social4.png',
  'https://apsmedia.s3.amazonaws.com/social6.png',
  'https://apsmedia.s3.amazonaws.com/speakers_4.png',
  'https://apsmedia.s3.amazonaws.com/full_room_1.png',
];

const secondImage = [
  'https://apsmedia.s3.amazonaws.com/magnatour.png',
  'https://apsmedia.s3.amazonaws.com/social2.png',
  'https://apsmedia.s3.amazonaws.com/speakers_3.png',
  'https://apsmedia.s3.amazonaws.com/social3.png',
  'https://apsmedia.s3.amazonaws.com/speakers_5.png',
  'https://apsmedia.s3.amazonaws.com/gallant_1.png',
  'https://apsmedia.s3.amazonaws.com/social8.png',
  'https://apsmedia.s3.amazonaws.com/speakers_9.png',
  'https://apsmedia.s3.amazonaws.com/swagbag.png',
];

const Page = () => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | 2023 Press Release</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | 2023 Press Release'
        />
      </Head>
      <div className='w-full h-full'>
        <HeaderPadding />
        <div
          className='w-full h-full aspect-square md:aspect-video lg:max-h-[600px] relative bg-cover bg-top'
          style={{
            backgroundImage: `url('https://packschool.s3.amazonaws.com/press-header-2.png')`,
          }}
        >
          {/* <div className=' bg-indigo-600/30 w-full h-full absolute inset-0 z-10' /> */}
          <div className=' max-w-2xl lg:max-w-5xl px-6 lg:px-0 mx-auto flex flex-col gap-6 lg:gap-9 w-full items-center justify-center absolute bottom-0 pb-12 pt-12 lg:pb-20 lg:pt-24 rounded-t-xl z-20 left-1/2 -translate-x-1/2 bg-gray-700/20 backdrop-blur-lg'>
            <div className=' text-white font-oswald text-5xl xl:text-7xl max-w-4xl lg:text-center'>
              The 2023 AutoPack Summit Sold Out for the 8th Year in a Row
            </div>
            <div className='text-white font-bold text-lg lg:text-2xl max-w-xl lg:text-center'>
              The event received high marks from OEMs, Tier 1 Suppliers,
              Logistics and Solution Providers
            </div>
          </div>
        </div>
        <div className='max-w-5xl w-full mx-auto py-24 flex flex-col gap-16 px-6 xl:px-6'>
          {/* <div className='w-full grid lg:grid-cols-2 gap-12'>
          <div className='w-full flex flex-col gap-6'>
            <div className='font-bold font-oswald text-5xl pr-12'>
              The 2023 AutoPack Summit Sold Out for the 8th Year in a Row
            </div>
          </div>
          <div className='text-2xl text-neutral-500'>
            The event received high marks from OEMs, Tier 1 Suppliers, Logistics
            and Solution Providers
          </div>
        </div> */}

          <div className='w-full max-w-3xl mx-auto'>
            <div className='flex flex-col gap-6 xl:gap-9 xl:text-lg'>
              <p>
                <span className='font-bold'>
                  GREENVILLE, SC (October 25, 2023) –
                </span>{' '}
                The 2023 Automotive Packaging Summit was held October 11 & 12th
                at the Peace Center’s Huguenot Mill and Loft in Greenville, SC.
                This year the event once again delivered quality education and
                networking to a sold-out audience of nearly 300 packaging
                professionals from OEMs and Tier 1 Suppliers like GM, BMW,
                Magna, Volvo, Nissan, Plastic Omnium, Caterpillar and Bosch.
              </p>
              <p>
                When asked about the event’s success Dr. Andrew Hurley, Founder
                of The Packaging School shared, “I’m pleased to report that
                AutoPack Summit 2023 received overwhelming positive feedback
                from those in attendance. Networking, education and relationship
                building were cited as benefits of attending, which is a
                testament to the quality audience that flocked to the event.
                Watching so many of the audience members taking notes and
                scheduling future meetings throughout the conference was a
                treat.”
              </p>
              <div
                className='w-full h-full bg-cover bg-center aspect-square md:aspect-video rounded flex justify-center items-center relative'
                // style={{
                //   backgroundImage: `url('https://packschool.s3.amazonaws.com/press-1.png')`,
                // }}
              >
                <Slideshow images={firstImage} />
              </div>
              <p>
                As Greenville continues to emerge as a hub for the automotive
                industry, the 2023 AutoPack Summit brought together decision
                makers from over 100 automotive and packaging supplier companies
                from across the globe. Attendees were also able to participate
                in optional tours including Magna Drive Corporation in Piedmont
                SC and Clemson University’s International Center for Automotive
                Research (CU-ICAR) Facilities.
              </p>

              <figure className='my-6 border-l-8 border-ap-yellow pl-9'>
                <blockquote className='font-semibold text-neutral-500 text-xl xl:text-2xl xl:leading-normal'>
                  <p>
                    “This is my favorite event of the year! The quality of the
                    speakers, the venue, and the OEM participation is
                    phenomenal. It’s a phenomenal event for us, as we are so
                    happy to be the title sponsor.”
                  </p>
                </blockquote>
                <figcaption className='mt-6 flex gap-x-4'>
                  <div className='text-sm leading-6'>
                    <strong className='font-semibold text-neutral-900'>
                      Sarena Kruger
                    </strong>{' '}
                    – VP of Marketing, TriEnda
                  </div>
                </figcaption>
              </figure>
              <p>
                14 speakers covered a range of topics from cross functional case
                studies paired by OEMs and Tier 1 Part suppliers, expendable and
                returnable packaging challenges to the quickly evolving
                technology solutions including sensor technology for automotive
                assets.
              </p>
              <p>
                EV battery packaging was a hot topic relevant topic at this
                year's event as it ties in directly with South Carolina’s new
                battery plans and development.
              </p>
              <p>
                Sustainability was another main topic covered and was the
                centerpiece of the Keynote presented by Jeremy Galanty,
                Sustainability Analyst at General Motors. We are also excited to
                announce our newly relaunched{' '}
                <a
                  href='https://packagingschool.com/certifications/get-to-know-apc'
                  className='font-bold underline text-indigo-600'
                >
                  Automotive Packaging Certificate
                </a>{' '}
                Program with an entire module on Sustainable approaches for
                Automotive Packaging - learn more{' '}
                <a
                  href='https://packagingschool.com/certifications/get-to-know-apc'
                  className='font-bold underline text-indigo-600'
                >
                  here
                </a>
                .
              </p>
              <div
                className='w-full h-full bg-cover bg-center aspect-square md:aspect-video rounded flex justify-center items-center relative'
                // style={{
                //   backgroundImage: `url('https://packschool.s3.amazonaws.com/press-1.png')`,
                // }}
              >
                <Slideshow images={secondImage} />
              </div>
              <p>
                We are also excited to announce our newly relaunched Automotive
                Packaging Certificate Program with an entire module on
                Sustainable approaches for Automotive Packaging&mdash;learn more{' '}
                <a
                  href='https://packagingschool.com/certifications/get-to-know-apc'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 font-medium underline'
                >
                  here.
                </a>
              </p>
              <p>
                The 2023 AutoPack Summit was proud to present Kellen Mahoney,
                Director of Suppliers Partnership for the Environment, with the
                best presentation award for 2022 and we are excited to announce
                the 2023 award recipient at our next event on October 16th 2024.
              </p>
              <p>
                AutoPack Summit is extremely grateful for the support of our
                Attendees, Sponsors and Speakers. Check out the{' '}
                <a
                  href='https://youtu.be/I-puWhkokn0?si=7soEPuz06d7kt8nTrpP5A'
                  className='text-indigo-600 font-medium underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Wrap Up Video
                </a>{' '}
                for a glimpse into the compelling education and vibrant
                networking that took place at the 2023 event.
              </p>
              <p>
                The 2024 AutoPack Summit will be held October 15-17 at the Hyatt
                Regency in Downtown Greenville, SC. Next year’s event is sure to
                continue to raise the bar as we are anticipating the event to
                grow by 40%.
              </p>
              <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 my-6'>
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className='mx-auto flex max-w-xs flex-col gap-y-4'
                  >
                    <dt className='text-base leading-7 text-gray-600'>
                      {stat.name}
                    </dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className='flex flex-col gap-3 pt-12 border-t'>
                <h3 className='font-bold text-lg'>
                  About Automotive Packaging Summit
                </h3>
                <p>
                  AutoPack Summit is an open forum for OEMs and Tier 1 part
                  suppliers to discuss their packaging innovations and
                  challenges. The goal is to collaborate for a more efficient
                  and cost-effective supply chain for both automotive and the
                  economy. AutoPack Summit has continued to grow every year of
                  its existence. Tickets have sold out all seven years and its
                  reach has become international. We have welcomed attendees
                  from the US, UK, Canada, Mexico, Japan, Italy, Belgium, India,
                  Germany, Poland, Hong Kong, Brazil, Netherlands, Sweden, South
                  Africa, Nigeria, France, Switzerland, Finland, and Bulgaria.
                  For information on the 2024 event please visit{' '}
                  <a
                    href='https://www.autopacksummit.com'
                    className='text-indigo-600 font-medium underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    www.autopacksummit.com.
                  </a>
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='font-bold text-lg'>
                  About The Packaging School
                </h3>
                <p>
                  The Packaging School is the exclusive licensee of a
                  professional packaging curriculum developed at Clemson
                  University. Founded in 2015, by Dr. Andrew Hurley, The
                  Packaging School bridges the gap between academia and industry
                  by partnering with companies, subject matter experts and
                  associations to create a shared learning management system.
                  Our expanded course catalog enables knowledge-seekers to
                  connect with knowledge-providers in all facets of packaging
                  and processing. Our mission is to provide accessible and
                  applicable online education to a global audience by training
                  the leaders of tomorrow in the art and science of packaging.
                  For more information about our Packaging certificates and
                  courses, visit{' '}
                  <a
                    href='https://www.packagingschool.com'
                    className='text-indigo-600 font-medium underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    www.PackagingSchool.com.
                  </a>
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='font-bold text-lg'>Media Contact</h3>
                <div className='grid md:grid-cols-3 gap-9 border p-6 w-fit text-neutral-500 text-sm'>
                  <div className='flex flex-col'>
                    <div className='font-bold'>Bianca Hurley</div>
                    <div>Director, Automotive</div>
                    <div>640 S. Main St., Greenville, SC 29601</div>
                  </div>
                  <div className='flex flex-col'>
                    <div>Mobile: 864-650-8840</div>
                    <div>Email: Bianca@PackagingSchool.com</div>
                    <div>Website: www.PackagingSchool.com</div>
                  </div>
                  <div className='w-full h-full bg-neutral-200 rounded-lg flex items-center justify-center'>
                    <div
                      className='flex justify-center items-center flex-col gap-1.5 cursor-pointer py-1.5'
                      onClick={() =>
                        window.open(
                          'https://packschool.s3.amazonaws.com/2023+APS+Press+Release.docx.pdf',
                          '_blank'
                        )
                      }
                    >
                      <div>
                        <CloudArrowDownIcon className='w-7 h-7 stroke-neutral-600' />
                      </div>
                      <div className='text-sm text-neutral-600'>
                        Download Press Release
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
