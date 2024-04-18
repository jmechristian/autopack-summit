import React, { useState } from 'react';
import BrutalistButton from '../shared/BrutalistButton';
import AddOnCard from '../shared/AddOnCard';
import { PowerIcon } from '@heroicons/react/24/solid';

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
              time={'Monday, October 21th 10:30- 13:00'}
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
                    Morrisette Tour on Monday, October 21st from 10:30-13:00
                    EST.{' '}
                  </p>
                </div>
              }
            />
            <AddOnCard
              title={'Aristos Rack Manufacturing presented by Freudenberg'}
              time={'TBD'}
              description={
                'Will feature Rack Manufacturing, Tote, Inserts which all show cases various Evolon textile class a fabric products.'
              }
              buttonText={'Registration Opening Soon'}
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
              title={'Bosch Rexroth Packaging Innovation Workshop'}
              time={'Tuesday, October 22nd 2:30 PM - 3:30 PM'}
              buttonText={'Registration Opening Soon'}
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
