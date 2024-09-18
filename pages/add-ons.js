import React, { useState } from 'react';
import BrutalistButton from '../shared/BrutalistButton';
import AddOnCard from '../shared/AddOnCard';
import { MapPinIcon, ArrowDownCircleIcon } from '@heroicons/react/24/solid';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [setOptions, isOptions] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const sendAddOnFormHandler = async () => {
    console.log(name, email, company, title);
  };

  return (
    <div className='max-w-4xl mx-auto mb-16 md:border-4 border-black rounded-xl overflow-hidden'>
      <div className='flex flex-col border-t-2 md:border-t-0 border-t-black border-b-2 md:border-b-0 border-b-black'>
        {/* HEADER */}
        <div className='w-full px-4 md:px-9 lg:px-12 border-b-2 border-b-black py-12'>
          <div className='flex flex-col gap-5'>
            <div className='font-medium font-oswald text-3xl md:text-4xl lg:text-5xl uppercase'>
              Registration Add-Ons
            </div>
            <div className='max-w-xl'>
              Please choose your registration add-ons. Once submitted we will
              review availability and confirm your registration via email. For
              questions, please email Bianca@PackagingSchool.com or
              Lars@PackagingSchool.com.
            </div>
          </div>
        </div>

        {/* OPTIONS WITH DESCRIPTIONS */}
        <div className='bg-amber-100 w-full p-4 md:p-9 lg:p-12'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <div className='text-lg lg:text-2xl font-medium font-oswald uppercase'>
                Tours
              </div>
            </div>
            <AddOnCard
              buttonText={'Register'}
              url={'/tours/morrisette'}
              title={'Morrisette Packaging Tour & Cookout'}
              time={'Monday, October 21st 10:30 AM - 1:00 PM'}
              description={
                <div className='flex flex-col gap-5 text-sm mt-1.5'>
                  <p>
                    We invite you to join us on Monday, October 21st, for an
                    exclusive tour of the Morrisette Packaging Solutions Center
                    at{' '}
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
                    (parking is plentiful. We will guide you as you pull into
                    the facility if you choose to drive separately from the
                    group).{' '}
                  </p>
                  <p>
                    Our state-of-the-art facility showcases cutting-edge
                    technologies designed to enhance efficiency, reduce waste,
                    and optimize supply chain operations through on-site
                    prototyping and real-time packaging problem-solving.
                  </p>
                  <p>
                    Following the tour, we're excited to host you for a Southern
                    BBQ Cookout, complete with lunch, casual games, and
                    fantastic prizes, making it a perfect opportunity to network
                    and relax.
                  </p>
                  <p className='font-bold'>
                    Registration: Please confirm that you will be attending the
                    Morrisette Tour on Monday, October 21st from 10:30 AM - 1:00
                    PM EST.{' '}
                  </p>
                </div>
              }
            />
            <AddOnCard
              title={'Clemson University'}
              time={'Wednesday, October 23rd 10:00 AM - 12:00 PM'}
              description={
                <div className='flex flex-col gap-5 text-sm mt-1.5'>
                  <div className='font-bold'>
                    Join us for an exclusive tour of Clemson University and the
                    Harris A. Smith Building (Sonoco Institute of Packaging
                    Design and Graphics), including a visit to their
                    cutting-edge testing lab.
                  </div>
                  <div>
                    The Harris A. Smith building stands as a distinguished hub
                    for education, research, and industry collaboration,
                    dedicated to pioneering advanced solutions and resources for
                    the future of the printing and packaging value chain. During
                    the tour, you'll also have the opportunity to explore the
                    Center for Flexible Packaging, which features
                    state-of-the-art research lab facilities and distribution
                    testing equipment.
                  </div>
                  <div>
                    Please note that the tour involves walking across campus, so
                    we recommend wearing comfortable clothing and appropriate
                    footwear.
                  </div>
                  <div>Limited Space Available!</div>
                  <div>
                    <i>Transportation and parking are not provided.</i>
                  </div>
                  <div className='flex flex-col gap-0'>
                    <div className='font-bold'>Meeting Point:</div>
                    <div>Front Entrance of the Harris A. Smith Building</div>
                    <div>
                      (Sonoco Institute of Packaging Design and Graphics)
                    </div>
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
                    <strong>Parking Information:</strong> Please familiarize
                    yourself with the attached{' '}
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
                      For questions regarding this tour please reach out to Lars
                      or Bianca: <br />
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
              }
              url={'/tours/clemson'}
              buttonText={'Register'}
            />
            <AddOnCard
              title={'BMW Exclusive Glimpse Tour (Limited Space!)'}
              time={'Wednesday, October 23rd 9:45 AM - 10:45 PM'}
              description={
                <div className='flex flex-col gap-5 text-sm mt-1.5'>
                  <div className='font-bold'>
                    Join us for an exclusive look into the world of BMW
                    manufacturing. This special "Glimpse Tour" provides an
                    insider’s view of three key areas of the BMW Plant:
                  </div>
                  <div>
                    <ul>
                      <li className='font-bold ml-4'>Body Shop (Best Fit)</li>
                      <li className='font-bold ml-4'>The Assembly Line</li>
                      <li className='font-bold ml-4'>The Paint Area</li>
                    </ul>
                  </div>
                  <div className='flex flex-col gap-0'>
                    <div className='underline font-bold mb-2'>
                      What You Need to Know:
                    </div>
                    <div>
                      <ul className='list-disc list-inside space-y-2'>
                        <li>
                          Cost: $15 per person (payable upon registration).
                        </li>
                        <li>
                          Please reference “AutoPackSummit” at registration
                          subject line.
                        </li>
                        <li>
                          Transportation: You are responsible for arranging your
                          own transportation.
                        </li>
                        <li>
                          Check-in: Arrive at the BMW Visitor’s Center no later
                          than 9:00 AM for check-in. The tour will begin
                          promptly at 9:45 AM.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex flex-col gap-0'>
                    <div>
                      After completing your online reservation, each registrant
                      will receive a confirmation packet with driving directions
                      to the BMW Zentrum Visitor Center.
                    </div>
                  </div>
                  <div>
                    <div className='font-bold underline mb-2'>
                      Important Tour Guidelines:
                    </div>
                    <div>
                      <ul className='list-disc list-inside space-y-2'>
                        <li>
                          <span className='font-bold'>Footwear:</span> All
                          participants must wear fully enclosed shoes.
                          Open-toed, open-heeled, or open-sided shoes (including
                          sandals, slides, crocs, or flip-flops) are not
                          permitted. High not permitted. High heels are also
                          prohibited. Sneakers are recommended as the tour
                          involves approximately 1 mile of walking.
                        </li>
                        <li>
                          <span className='font-bold'>Waiver:</span> All tour
                          participants are required to complete the attached
                          waiver form before the tour.
                        </li>
                        <li>
                          <span className='font-bold'>Photo ID:</span>
                          Each guest must present a valid photo ID at check-in.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-1'>
                      <div>
                        <ArrowDownCircleIcon className='w-6 h-6 text-ap-blue' />
                      </div>
                      <div className='font-bold text-ap-blue cursor-pointer underline'>
                        <a
                          href='https://packschool.s3.amazonaws.com/Zentrum_Tour_Waiver_Version2-1-revisedas52824.pdf'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Download Waiver Form
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-1'>
                      <div>
                        <MapPinIcon className='w-6 h-6 text-ap-blue' />
                      </div>
                      <div className='font-bold text-ap-blue cursor-pointer underline'>
                        <a
                          href='https://packschool.s3.amazonaws.com/Directions-to-the-Zentrum+.pdf'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Directions to Zentrum
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
              url={
                'https://fareharbor.com/embeds/book/bmwusfactory/items/565904/availability/1512103020/book/?full-items=yes'
              }
              buttonText={'Register'}
            />
          </div>
          <div className='flex flex-col gap-4 mt-10'>
            <div className='flex items-center gap-2'>
              <div className='text-lg lg:text-2xl font-medium font-oswald uppercase'>
                Breakout Workshops
              </div>
            </div>
            <AddOnCard
              title={'Guardian Container Consulting'}
              url={'/workshops/guardian'}
              buttonText={'Register'}
              time={'Tuesday, October 22nd 1:00 PM - 2:00 PM'}
              speakers={[
                {
                  name: 'Ben Hesskamp',
                  title: 'Owner, Guardian Container Consulting',
                },
                {
                  name: 'Lucas Hesskamp',
                  title: 'Vice President, Guardian Container Consulting',
                },
              ]}
              description={
                <div className='flex flex-col gap-5 text-sm mt-1.5'>
                  <p className='font-bold'>
                    How are my racks and containers leaving the supply chain?
                    How do I get them back?
                  </p>
                  <p>
                    If you have ever asked these questions, we encourage you to
                    sign up for the Guardian Breakout Workshop. OEM and Tier 1
                    Suppliers that pre-register and attend the Guardian Breakout
                    will receive a free pack of 10 GPS/WiFi/Cell trackers with
                    service and platform access included for one year.
                  </p>
                  <p>
                    No dock door scanners, no handheld readers, and only a small
                    percentage of individual rack and container fleets need to
                    be tracked. GPS and WiFi location data is communicated over
                    cell networks to tell you where your rack and container
                    problems are happening anywhere in North America.
                  </p>
                  <p>
                    Engage Guardian’s on-site auditing and recovery services, or
                    operate the specialized Guardian tracking system internally.
                    We will demonstrate how probability based GPS/WiFi/Cell
                    tracking works, common pathways of rack and container loss
                    you can expect to see, and how you can start tackling your
                    largest supply chain issues across the map.
                  </p>
                  <p>
                    We will also speak to the benefits and limitations of adding
                    BLE into the GPS/WiFi/Cell tracking, how logistics teams can
                    monitor carriers by tracking racks and containers, our
                    supply chain metrics dashboard, and more.
                  </p>
                </div>
              }
              logo={'https://packschool.s3.amazonaws.com/guardian-logo.webp'}
            />
            <AddOnCard
              url={'/workshops/surgere'}
              title={'From Pack to Track: Accelerate Decision Making with AI'}
              time={'Tuesday, October 22nd 1:00 PM - 2:00 PM'}
              buttonText={'Register'}
              description={
                'From Pack to Track: Accelerate Decision Making with AI'
              }
              speakers={[
                {
                  name: 'Thomas Strain',
                  title: 'VP, Technology, Surgere',
                },
                {
                  name: 'Michael Schwabe',
                  title: 'Director, Market Intelligence, Surgere',
                },
              ]}
              logo={'https://packschool.s3.amazonaws.com/surgere-logo.png'}
            />
            <AddOnCard
              url={'/workshops/bosch'}
              title={'Bosch Rexroth Packaging Innovation Workshop'}
              time={'Tuesday, October 22nd 2:30 PM - 3:30 PM'}
              buttonText={'Register'}
              description={
                <div className='text-sm'>
                  Bosch is inviting you to participate in this interactive
                  workshop with the goal to brainstorm new and innovative ideas
                  to improve an on hand packaging problem. Limited space
                  available, please indicate your interest upon registration.
                </div>
              }
            />
          </div>
        </div>
        {/* <div className='w-full px-4 md:px-9 lg:px-12'>
          <BrutalistButton
            text={isSending ? 'Sending...' : 'Submit Add-On Registration'}
            bgColor={'bg-ap-darkblue'}
            textColor={'text-white'}
            fn={() => sendAddOnFormHandler()}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
