import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  getCurrentAPS25Registrant,
  registerSpeedNetworking,
  unregisterSpeedNetworking,
  registerMorrisette,
  unregisterMorrisette,
  registerMagna,
  unregisterMagna,
  registerAristo,
  unregisterAristo,
  sendActivity,
} from '../../../util/api';
import {
  MdDownload,
  MdAccessTime,
  MdCheckCircle,
  MdCancel,
} from 'react-icons/md';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
export const Page = ({ registrant }) => {
  const router = useRouter();
  const billingPhone = registrant.billingAddressPhone;
  const billingEmail = registrant.billingAddressEmail;
  const [showMorrisetteDetails, setShowMorrisetteDetails] = useState(false);
  const [showMagnaDetails, setShowMagnaDetails] = useState(false);
  const [showAristoDetails, setShowAristoDetails] = useState(false);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <div className='w-full py-10'>
      {registrant ? (
        // <div className='flex flex-col gap-6 max-w-5xl mx-auto w-full'>
        //   <div className='w-full p-8 rounded-lg bg-white'>

        //     </div>
        //   </div>
        //
        //
        // </div>
        <div className='w-full max-w-7xl mx-auto border border-gray-300 p-5 grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-12 lg:col-span-3'>
            <div
              className='w-full h-full  bg-ap-blue p-6 bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://apsmedia.s3.us-east-1.amazonaws.com/profile-header.png')`,
              }}
            >
              <div className='flex flex-col gap-5 h-full'>
                <div className='w-full flex flex-col gap-2'>
                  <div className='text-3xl text-ap-yellow font-oswald uppercase'>
                    Welcome!
                  </div>
                  <div className='w-full flex flex-col gap-0'>
                    <div className='text-white text-5xl font-oswald uppercase'>
                      {registrant.firstName} <br /> {registrant.lastName}
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-0 mt-3'>
                    <div className='text-white text-xl font-oswald uppercase'>
                      {registrant.companyName.name}
                    </div>
                    <div className='text-white text-lg max-w-[200px] font-oswald text-white/60 leading-tight'>
                      {registrant.jobTitle}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-0'>
                    <div className='text-sm font-bold text-ap-yellow'>
                      Registration Type
                    </div>
                    <div className='text-white text-lg font-oswald uppercase'>
                      {registrant.attendeeType}
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='text-sm font-bold text-ap-yellow'>
                      Registration Status
                    </div>
                    <div
                      className={`flex items-center gap-1 text-lg font-oswald uppercase w-fit ${
                        registrant.status === 'PENDING'
                          ? 'bg-ap-yellow px-2 py-0.5 rounded-lg'
                          : 'bg-green-600 px-2 py-0.5 rounded-lg'
                      }`}
                    >
                      <div>
                        {registrant.status === 'PENDING' ? (
                          <MdAccessTime color='black' size={24} />
                        ) : (
                          <MdCheckCircle color='green' size={24} />
                        )}
                      </div>
                      <div
                        className={`${
                          registrant.status === 'PENDING'
                            ? 'text-neutral-600'
                            : 'text-white'
                        }`}
                      >
                        {registrant.status === 'PENDING'
                          ? 'Pending'
                          : 'Registered'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MAIN CONTENT */}
          <div className='col-span-12 lg:col-span-9'>
            <div className='w-full h-full px-8 py-10 bg-ap-yellow/10 flex flex-col gap-12'>
              <div className='grid lg:grid-cols-3 gap-12 w-full'>
                <div className='flex flex-col gap-0.5 leading-tight col-span-1'>
                  <div className='font-bold text-ap-blue mb-2 text-sm'>
                    Billing Details
                  </div>
                  <div className='text-gray-600 text-sm'>
                    {registrant.billingAddressFirstName}{' '}
                    {registrant.billingAddressLastName}
                  </div>
                  <div className='text-gray-600 text-sm'>{billingPhone}</div>
                  <div className='text-gray-600 text-sm'>{billingEmail}</div>
                  <div className='text-gray-600 text-sm'>
                    {registrant.billingAddressStreet}
                  </div>
                  <div className='text-gray-600 text-sm'>
                    {registrant.billingAddressCity},{' '}
                    {registrant.billingAddressState},{' '}
                    {registrant.billingAddressZip}
                  </div>
                  <div className='w-fit gap-1 bg-gray-900 hover:bg-gray-700 flex items-center justify-center cursor-pointer mt-2 border border-black px-2 py-1 rounded-lg'>
                    <div>
                      <MdDownload color='white' size={18} />
                    </div>
                    <div className='text-xs font-medium text-white'>
                      Download Invoice
                    </div>
                  </div>
                </div>
                {registrant.attendeeType === 'Speaker' && (
                  <div className='col-span-1 lg:col-span-2 w-full bg-white/70 rounded-lg p-4'>
                    <div className='w-full grid lg:grid-cols-3 gap-7 '>
                      <div className='flex flex-col gap-3'>
                        <div className='text-sm font-bold text-ap-blue mb-2'>
                          Speaker Details
                        </div>
                        <div className='w-36 h-40 bg-gray-200 rounded-lg flex items-center justify-center'>
                          <div className='text-xs font-semibold'>
                            Upload Headshot
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col gap-5 col-span-2'>
                        <div className='text-sm font-bold text-ap-blue'>
                          Presentation Details
                        </div>
                        <div className='flex flex-col gap-1'>
                          <div className='text-sm font-bold'>
                            Presentation Title
                          </div>
                          <div>Please Enter Title</div>
                        </div>
                        {/* <div className='flex flex-col gap-1'>
                          <div className='text-sm font-bold'>
                            Presentation Topic
                          </div>
                          <div>{registrant.speakerTopic}</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <div className='text-sm font-bold'>
                            Learning Objectives
                          </div>
                          <div>{registrant.learningObjectives}</div>
                        </div> */}
                        <div className='w-36 h-20 border border-gray-300 border-dashed rounded-lg flex items-center justify-center'>
                          <div className='text-xs font-semibold'>
                            Upload Presentation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className='w-full pr-5'>
                  <div className='text-sm font-bold text-ap-blue mb-3'>
                    Workshops
                  </div>
                  <div className='text-sm text-gray-500 border-b border-gray-300 pb-2'>
                    The complimentary workshops do not require registrations.
                  </div>
                  <div className='flex flex-col gap-2 justify-center mt-4'>
                    <div className='flex flex-col gap-1 leading-tight'>
                      <div className='font-semibold'>
                        Thursday, October 15th
                      </div>
                      <div className='text-sm text-gray-500'>
                        01:30 PM - 02:30 PM
                      </div>
                      <div className='text-sm text-gray-500'>
                        Conference Room Crepe Myrtle
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full '>
                  <div className='text-sm font-bold text-ap-blue mb-3'>
                    Speed Networking
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='font-bold text-sm'>
                      Wednesday, October 15th
                      <br /> 2:30 PM - 3:30 PM
                    </div>
                    <div className='text-sm text-gray-500'>
                      Conference Room Redbud A/B/C
                    </div>
                    <div className='text-sm font-semibold mt-2'>
                      Status:
                      <span
                        className={`font-bold ${
                          registrant.speedNetworkingStatus === 'APPROVED'
                            ? 'text-green-500'
                            : registrant.speedNetworkingStatus === 'PENDING'
                            ? 'text-yellow-500'
                            : 'text-red-500'
                        }`}
                      >
                        {' '}
                        {registrant.speedNetworkingStatus === 'APPROVED'
                          ? 'Approved'
                          : registrant.speedNetworkingStatus === 'PENDING'
                          ? 'Pending'
                          : 'Not Registered'}
                      </span>
                    </div>
                    {registrant.speedNetworkingStatus !== 'APPROVED' &&
                    registrant.speedNetworkingStatus !== 'PENDING' ? (
                      <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                        <button
                          onClick={() => {
                            registerSpeedNetworking(registrant.id);
                            sendActivity({
                              type: 'SPEED_NETWORKING_REGISTERED',
                              activity: `${registrant.firstName} ${registrant.lastName} Speed Networking Registered`,
                            });
                            refreshData();
                          }}
                          className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                        >
                          <PlusIcon className='w-4 h-4 text-white' />
                        </button>
                        <div className=' text-sm text-gray-700'>
                          Register for Speed Networking
                        </div>
                      </div>
                    ) : (
                      <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                        <button
                          onClick={() => {
                            unregisterSpeedNetworking(registrant.id);
                            sendActivity({
                              type: 'SPEED_NETWORKING_UNREGISTERED',
                              activity: `${registrant.firstName} ${registrant.lastName} Speed Networking Unregistered`,
                            });
                            refreshData();
                          }}
                          className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                        >
                          <MinusIcon className='w-4 h-4 text-white' />
                        </button>
                        <div className=' text-sm text-gray-700'>
                          Unregister for Speed Networking
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='w-full grid lg:grid-cols-3 gap-12'>
                {registrant.attendeeType === 'Speaker' ? (
                  <div className='w-full flex flex-col gap-2'>
                    <div className='text-sm font-bold text-ap-blue mb-2'>
                      Tours
                    </div>
                    <div className='flex flex-col gap-3 divide-y divide-gray-300'>
                      {/* MORISSETTE TOUR */}
                      <div className='flex flex-col gap-1'>
                        <div
                          className='font-bold flex items-center justify-between cursor-pointer'
                          onClick={() =>
                            setShowMorrisetteDetails(!showMorrisetteDetails)
                          }
                        >
                          <div className='flex items-center gap-2'>
                            {registrant.morrisetteStatus === 'APPROVED' ? (
                              <div>
                                <MdCheckCircle color='green' size={20} />
                              </div>
                            ) : registrant.morrisetteStatus === 'PENDING' ? (
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                            ) : (
                              <div>
                                <MdCancel color='red' size={20} />
                              </div>
                            )}
                            <span>Morrisette Tour</span>
                          </div>
                          <span className='text-sm'>
                            {showMorrisetteDetails ? '▼' : '▶'}
                          </span>
                        </div>
                        {showMorrisetteDetails && (
                          <>
                            <div className='text-sm text-gray-500'>
                              Wednesday, October 15th
                              <br /> 10:30 AM - 01:00 PM
                            </div>
                            <div className='text-sm'>
                              24 Tyger River Dr.
                              <br /> Duncan, SC 29334
                            </div>
                            {registrant.morrisetteTransportation && (
                              <div className='text-sm font-semibold mt-2'>
                                Transportation Preference:
                                <span className='capitalize'>
                                  {' '}
                                  {registrant.morrisetteTransportation}
                                </span>
                              </div>
                            )}
                            <div className='text-sm font-semibold mt-2'>
                              Tour Registration Status:
                              <span
                                className={`font-bold ${
                                  registrant.morrisetteStatus === 'PENDING'
                                    ? 'text-yellow-500'
                                    : 'text-green-500'
                                }`}
                              >
                                {' '}
                                {registrant.morrisetteStatus === 'PENDING' ? (
                                  <div className='flex items-center gap-1'>
                                    <div>
                                      <MdAccessTime color='#eab308' size={20} />
                                    </div>
                                    <div>Pending</div>
                                  </div>
                                ) : registrant.morrisetteStatus ===
                                  'APPROVED' ? (
                                  <div className='flex items-center gap-1'>
                                    <div>
                                      <MdCheckCircle color='green' size={20} />
                                    </div>
                                    <div>Approved</div>
                                  </div>
                                ) : (
                                  <div>Not Registered</div>
                                )}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                      {/* ARISTO TOUR */}
                      <div className={`flex flex-col gap-1 pt-3`}>
                        <div
                          className='font-bold flex items-center justify-between cursor-pointer'
                          onClick={() =>
                            setShowAristoDetails(!showAristoDetails)
                          }
                        >
                          <div className='flex items-center gap-2'>
                            {registrant.aristoStatus === 'APPROVED' ? (
                              <div>
                                <MdCheckCircle color='green' size={20} />
                              </div>
                            ) : registrant.aristoStatus === 'PENDING' ? (
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                            ) : (
                              <div>
                                <MdCancel color='red' size={20} />
                              </div>
                            )}
                            <span>Aristo Tour</span>
                          </div>
                          <span className='text-sm'>
                            {showAristoDetails ? '▼' : '▶'}
                          </span>
                        </div>
                        {showAristoDetails && (
                          <>
                            <div className='text-sm text-gray-500'>
                              Wednesday, October 15th
                              <br /> 2:00 - 4:00 PM
                            </div>
                            <div className='text-sm'>
                              2006 Perimeter Road <br />
                              Greenville 29605
                            </div>
                            {registrant.aristoTransportation && (
                              <div className='text-sm font-semibold mt-2'>
                                Transportation Preference:
                                <span className='capitalize'>
                                  {' '}
                                  {registrant.aristoTransportation}
                                </span>
                              </div>
                            )}
                            <div className='text-sm font-semibold mt-2'>
                              Tour Registration Status:
                              <span
                                className={`font-bold ${
                                  registrant.aristoStatus === 'PENDING'
                                    ? 'text-yellow-500'
                                    : 'text-green-500'
                                }`}
                              >
                                {' '}
                                {registrant.aristoStatus === 'PENDING' ? (
                                  <div className='flex items-center gap-1'>
                                    <div>
                                      <MdAccessTime color='#eab308' size={20} />
                                    </div>
                                    <div>Pending</div>
                                  </div>
                                ) : registrant.aristoStatus === 'APPROVED' ? (
                                  <div className='flex items-center gap-1'>
                                    <div>
                                      <MdCheckCircle color='green' size={20} />
                                    </div>
                                    <div>Approved</div>
                                  </div>
                                ) : (
                                  <div>Not Registered</div>
                                )}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                      {/* MAGNA MIRRORS */}
                      <div className={`flex flex-col gap-1 pt-3`}>
                        <div
                          className='font-bold flex items-center justify-between cursor-pointer'
                          onClick={() => setShowMagnaDetails(!showMagnaDetails)}
                        >
                          <div className='flex items-center gap-2'>
                            {registrant.magnaStatus === 'APPROVED' ? (
                              <div>
                                <MdCheckCircle color='green' size={20} />
                              </div>
                            ) : registrant.magnaStatus === 'PENDING' ? (
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                            ) : (
                              <div>
                                <MdCancel color='red' size={20} />
                              </div>
                            )}
                            <span>Magna Mirrors Tour</span>
                          </div>
                          <span className='text-sm'>
                            {showMagnaDetails ? '▼' : '▶'}
                          </span>
                        </div>
                        {showMagnaDetails && (
                          <>
                            <div className='text-sm text-gray-500'>
                              Friday, October 17th
                              <br /> 10:00 AM - 12:00 PM
                            </div>
                            <div className='text-sm'>
                              1150 S Danzler Rd.
                              <br /> Duncan, SC 29334
                            </div>
                            {registrant.magnaTransportation && (
                              <div className='text-sm font-semibold mt-2'>
                                Transportation Preference:
                                <span className='capitalize'>
                                  {' '}
                                  {registrant.magnaTransportation}
                                </span>
                              </div>
                            )}
                            <div className='text-sm font-semibold mt-2'>
                              Tour Registration Status:
                              <span
                                className={`font-bold ${
                                  registrant.magnaStatus === 'PENDING'
                                    ? 'text-yellow-500'
                                    : 'text-green-500'
                                }`}
                              >
                                {' '}
                                {registrant.magnaStatus === 'PENDING' ? (
                                  <div className='flex items-center gap-1'>
                                    <div>
                                      <MdAccessTime color='#eab308' size={20} />
                                    </div>
                                    <div>Pending</div>
                                  </div>
                                ) : registrant.magnaStatus === 'APPROVED' ? (
                                  <div className='flex items-center gap-1'>
                                    <div>
                                      <MdCheckCircle color='green' size={20} />
                                    </div>
                                    <div>Approved</div>
                                  </div>
                                ) : (
                                  <div>Not Registered</div>
                                )}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='w-full flex flex-col gap-2 col-span-3'>
                    <div className='text-sm font-bold text-ap-blue mb-2 col-span-3 border-b border-gray-300 pb-2'>
                      Tours
                    </div>
                    <div className='w-full grid grid-cols-3 gap-10'>
                      {/* MORISSETTE TOUR */}
                      <div className='flex flex-col gap-1'>
                        <div
                          className='font-bold flex items-center justify-between cursor-pointer'
                          onClick={() =>
                            setShowMorrisetteDetails(!showMorrisetteDetails)
                          }
                        >
                          <div className='flex items-center gap-2'>
                            {registrant.morrisetteStatus === 'APPROVED' ? (
                              <div>
                                <MdCheckCircle color='green' size={20} />
                              </div>
                            ) : registrant.morrisetteStatus === 'PENDING' ? (
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                            ) : (
                              <div>
                                <MdCancel color='red' size={20} />
                              </div>
                            )}
                            <span>Morrisette Tour</span>
                          </div>
                        </div>
                        <div className='text-sm text-gray-500'>
                          Wednesday, October 15th
                          <br /> 10:30 AM - 01:00 PM
                        </div>
                        <div className='text-sm'>
                          24 Tyger River Dr.
                          <br /> Duncan, SC 29334
                        </div>
                        {registrant.morrisetteTransportation && (
                          <div className='text-sm font-semibold mt-2'>
                            Transportation Preference:
                            <br />
                            <span className='capitalize font-medium text-gray-500'>
                              {' '}
                              {registrant.morrisetteTransportation}
                            </span>
                          </div>
                        )}
                        <div className='text-sm font-semibold mt-2'>
                          Tour Registration Status:
                          <span
                            className={`font-bold ${
                              registrant.morrisetteStatus === 'PENDING'
                                ? 'text-yellow-500'
                                : 'text-green-500'
                            }`}
                          >
                            {' '}
                            {registrant.morrisetteStatus === 'PENDING' ? (
                              <div className='flex items-center gap-1'>
                                <div>
                                  <MdAccessTime color='#eab308' size={20} />
                                </div>
                                <div>Pending</div>
                              </div>
                            ) : registrant.morrisetteStatus === 'APPROVED' ? (
                              <div className='flex items-center gap-1'>
                                <div>
                                  <MdCheckCircle color='green' size={20} />
                                </div>
                                <div>Approved</div>
                              </div>
                            ) : (
                              <div>Not Registered</div>
                            )}
                          </span>
                        </div>
                        {registrant.morrisetteStatus !== 'APPROVED' &&
                        registrant.morrisetteStatus !== 'PENDING' ? (
                          <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                            <button
                              onClick={() => {
                                registerMorrisette(registrant.id);
                                sendActivity({
                                  type: 'MORISSETTE_REGISTERED',
                                  activity: `${registrant.firstName} ${registrant.lastName} Morrisette Registered`,
                                });
                                refreshData();
                              }}
                              className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                            >
                              <PlusIcon className='w-4 h-4 text-white' />
                            </button>
                            <div className=' text-sm text-gray-700'>
                              Register for Morrisette Tour
                            </div>
                          </div>
                        ) : (
                          <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                            <button
                              onClick={() => {
                                unregisterMorrisette(registrant.id);
                                sendActivity({
                                  type: 'MORISSETTE_UNREGISTERED',
                                  activity: `${registrant.firstName} ${registrant.lastName} Morrisette Unregistered`,
                                });
                                refreshData();
                              }}
                              className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                            >
                              <MinusIcon className='w-4 h-4 text-white' />
                            </button>
                            <div className=' text-sm text-gray-700'>
                              Unregister for Morrisette Tour
                            </div>
                          </div>
                        )}
                      </div>
                      {/* ARISTO TOUR */}
                      <div className={`flex flex-col gap-1`}>
                        <div className='font-bold flex items-center justify-between cursor-pointer'>
                          <div className='flex items-center gap-2'>
                            {registrant.aristoStatus === 'APPROVED' ? (
                              <div>
                                <MdCheckCircle color='green' size={20} />
                              </div>
                            ) : registrant.aristoStatus === 'PENDING' ? (
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                            ) : (
                              <div>
                                <MdCancel color='red' size={20} />
                              </div>
                            )}
                            <span>Aristo Tour</span>
                          </div>
                        </div>
                        <div className='text-sm text-gray-500'>
                          Wednesday, October 15th
                          <br /> 2:00 - 4:00 PM
                        </div>
                        <div className='text-sm'>
                          2006 Perimeter Road <br />
                          Greenville 29605
                        </div>

                        <div className='text-sm font-semibold mt-2'>
                          Transportation Preference:
                          <br />
                          <span className='capitalize text-gray-500 font-medium'>
                            {' '}
                            {registrant.aristoTransportation
                              ? registrant.aristoTransportation
                              : 'Not Registered'}
                          </span>
                        </div>
                        <div className='text-sm font-semibold mt-2'>
                          Tour Registration Status:
                          <span
                            className={`font-bold ${
                              registrant.aristoStatus === 'PENDING'
                                ? 'text-yellow-500'
                                : 'text-green-500'
                            }`}
                          >
                            {' '}
                            {registrant.aristoStatus === 'PENDING' ? (
                              <div className='flex items-center gap-1'>
                                <div>
                                  <MdAccessTime color='#eab308' size={20} />
                                </div>
                                <div>Pending</div>
                              </div>
                            ) : registrant.aristoStatus === 'APPROVED' ? (
                              <div className='flex items-center gap-1'>
                                <div>
                                  <MdCheckCircle color='green' size={20} />
                                </div>
                                <div>Approved</div>
                              </div>
                            ) : (
                              <div>Not Registered</div>
                            )}
                          </span>
                        </div>
                        {registrant.aristoStatus !== 'APPROVED' &&
                        registrant.aristoStatus !== 'PENDING' ? (
                          <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                            <button
                              onClick={() => {
                                registerAristo(registrant.id);
                                sendActivity({
                                  type: 'ARISTO_REGISTERED',
                                  activity: `${registrant.firstName} ${registrant.lastName} Aristo Registered`,
                                });
                                refreshData();
                              }}
                              className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                            >
                              <PlusIcon className='w-4 h-4 text-white' />
                            </button>
                            <div className=' text-sm text-gray-700'>
                              Register for Aristo Tour
                            </div>
                          </div>
                        ) : (
                          <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                            <button
                              onClick={() => {
                                unregisterAristo(registrant.id);
                                sendActivity({
                                  type: 'ARISTO_UNREGISTERED',
                                  activity: `${registrant.firstName} ${registrant.lastName} Aristo Unregistered`,
                                });
                                refreshData();
                              }}
                              className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                            >
                              <MinusIcon className='w-4 h-4 text-white' />
                            </button>
                            <div className=' text-sm text-gray-700'>
                              Unregister for Aristo Tour
                            </div>
                          </div>
                        )}
                      </div>
                      {/* MAGNA MIRRORS */}
                      <div className={`flex flex-col gap-1`}>
                        <div className='font-bold flex items-center justify-between cursor-pointer'>
                          <div className='flex items-center gap-2'>
                            {registrant.magnaStatus === 'APPROVED' ? (
                              <div>
                                <MdCheckCircle color='green' size={20} />
                              </div>
                            ) : registrant.magnaStatus === 'PENDING' ? (
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                            ) : (
                              <div>
                                <MdCancel color='red' size={20} />
                              </div>
                            )}
                            <span>Magna Mirrors Tour</span>
                          </div>
                        </div>
                        <div className='text-sm text-gray-500'>
                          Friday, October 17th
                          <br /> 10:00 AM - 12:00 PM
                        </div>
                        <div className='text-sm'>
                          1150 S Danzler Rd.
                          <br /> Duncan, SC 29334
                        </div>
                        <div className='text-sm font-semibold mt-2'>
                          Transportation Preference:
                          <br />
                          <span className='capitalize text-gray-500 font-medium'>
                            {' '}
                            {registrant.magnaTransportation
                              ? registrant.magnaTransportation
                              : 'Not Registered'}
                          </span>
                        </div>
                        <div className='text-sm font-semibold mt-2'>
                          Tour Registration Status:
                          <span
                            className={`font-bold ${
                              registrant.magnaStatus === 'PENDING'
                                ? 'text-yellow-500'
                                : 'text-green-500'
                            }`}
                          >
                            {' '}
                            {registrant.magnaStatus === 'PENDING' ? (
                              <div className='flex items-center gap-1'>
                                <div>
                                  <MdAccessTime color='#eab308' size={20} />
                                </div>
                                <div>Pending</div>
                              </div>
                            ) : registrant.magnaStatus === 'APPROVED' ? (
                              <div className='flex items-center gap-1'>
                                <div>
                                  <MdCheckCircle color='green' size={20} />
                                </div>
                                <div>Approved</div>
                              </div>
                            ) : (
                              <div>Not Registered</div>
                            )}
                          </span>
                        </div>
                        {registrant.magnaStatus !== 'APPROVED' &&
                        registrant.magnaStatus !== 'PENDING' ? (
                          <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                            <button
                              onClick={() => {
                                registerMagna(registrant.id);
                                sendActivity({
                                  type: 'MAGNA_REGISTERED',
                                  activity: `${registrant.firstName} ${registrant.lastName} Magna Registered`,
                                });
                                refreshData();
                              }}
                              className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                            >
                              <PlusIcon className='w-4 h-4 text-white' />
                            </button>
                            <div className=' text-sm text-gray-700'>
                              Register for Magna Mirrors Tour
                            </div>
                          </div>
                        ) : (
                          <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                            <button
                              onClick={() => {
                                unregisterMagna(registrant.id);
                                sendActivity({
                                  type: 'MAGNA_UNREGISTERED',
                                  activity: `${registrant.firstName} ${registrant.lastName} Magna Unregistered`,
                                });
                                refreshData();
                              }}
                              className='text-gray-700 w-5 h-5 bg-ap-blue hover:bg-ap-blue/80 rounded-full flex items-center justify-center'
                            >
                              <MinusIcon className='w-4 h-4 text-white' />
                            </button>
                            <div className=' text-sm text-gray-700'>
                              Unregister for Magna Mirrors Tour
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-6 max-w-6xl mx-auto'>
          <div className='flex flex-col gap-2 font-bold text-lg'>
            Loading...
          </div>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const registrant = await getCurrentAPS25Registrant(params.id);
  return {
    props: { registrant },
  };
};

export default Page;
