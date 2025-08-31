import React, { useState, useEffect } from 'react';
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
  uploadToAPS3,
  updateSpeakerProfile,
} from '../../../util/api';
import {
  MdDownload,
  MdAccessTime,
  MdCheckCircle,
  MdCancel,
  MdEdit,
} from 'react-icons/md';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export const RegistrantPage = ({ registrant }) => {
  const [showEditSpeakerProfile, setShowEditSpeakerProfile] = useState(false);
  const router = useRouter();
  const billingPhone = registrant && registrant.billingAddressPhone;
  const billingEmail = registrant && registrant.billingAddressEmail;
  const [showMorrisetteDetails, setShowMorrisetteDetails] = useState(false);
  const [showMagnaDetails, setShowMagnaDetails] = useState(false);
  const [showAristoDetails, setShowAristoDetails] = useState(false);
  console.log('registrant', registrant);

  const [speakerProfile, setSpeakerProfile] = useState({
    headshot: (registrant && registrant.headshot) || '',
    presentationTitle: (registrant && registrant.presentationTitle) || '',
    speakerTopic: (registrant && registrant.speakerTopic) || '',
    learningObjectives: (registrant && registrant.learningObjectives) || '',
    bio: (registrant && registrant.bio) || '',
  });

  const [registrantData, setRegistrantData] = useState(registrant);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFileUpload = async (file, type) => {
    if (!file) return;

    try {
      const url = await uploadToAPS3(file);
      console.log(url);
      setSpeakerProfile((prev) => ({
        ...prev,
        headshot: url,
      }));

      refreshData();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Add your API call to save the changes
      await updateSpeakerProfile(registrant.id, speakerProfile);
      setShowEditSpeakerProfile(false);
      refreshData();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const refreshData = async () => {
    const updatedRegistrant = await getCurrentAPS25Registrant(registrant.id);
    setRegistrantData(updatedRegistrant);
    setRefreshKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (refreshKey > 0) {
      getCurrentAPS25Registrant(registrant.id).then((data) => {
        setRegistrantData(data);
      });
    }
  }, [refreshKey]);

  return (
    <div className='w-full pt-10 pb-16'>
      {registrantData ? (
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
                      {registrantData.firstName} <br />{' '}
                      {registrantData.lastName}
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-0 mt-3'>
                    <div className='text-white text-xl font-oswald uppercase'>
                      {registrantData.company.name}
                    </div>
                    <div className='text-white text-lg max-w-[200px] font-oswald text-white/60 leading-tight'>
                      {registrantData.jobTitle}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-0'>
                    <div className='text-sm font-bold text-ap-yellow'>
                      Registration Type
                    </div>
                    <div className='text-white text-lg font-oswald uppercase'>
                      {registrantData.attendeeType}
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='text-sm font-bold text-ap-yellow'>
                      Registration Status
                    </div>
                    <div
                      className={`flex items-center gap-1 text-lg font-oswald uppercase w-fit ${
                        registrantData.status === 'PENDING'
                          ? 'bg-ap-yellow px-2 py-0.5 rounded-lg'
                          : registrantData.status === 'WAITLIST'
                          ? 'bg-yellow-500 px-2 py-0.5 rounded-lg'
                          : 'bg-green-600 px-2 py-0.5 rounded-lg'
                      }`}
                    >
                      <div>
                        {registrantData.status === 'PENDING' ? (
                          <MdAccessTime color='black' size={24} />
                        ) : registrantData.status === 'WAITLIST' ? (
                          <MdAccessTime color='black' size={24} />
                        ) : (
                          <MdCheckCircle color='green' size={24} />
                        )}
                      </div>
                      <div
                        className={`${
                          registrantData.status === 'PENDING'
                            ? 'text-neutral-600'
                            : registrantData.status === 'WAITLIST'
                            ? 'text-black'
                            : 'text-white'
                        }`}
                      >
                        {registrantData.status === 'PENDING'
                          ? 'Pending'
                          : registrantData.status === 'WAITLIST'
                          ? 'Waitlist'
                          : 'Registered'}
                      </div>
                    </div>
                  </div>
                </div>
                {/* SPEAKER PROFILE */}
                {registrantData.attendeeType === 'Speaker' && (
                  <div className='flex items-end flex-1 gap-2'>
                    <div
                      className='flex items-center gap-4 cursor-pointer'
                      onClick={() => setShowEditSpeakerProfile(true)}
                    >
                      {speakerProfile.headshot ? (
                        <div
                          className='w-16 h-20 bg-cover bg-center bg-no-repeat'
                          style={{
                            backgroundImage: `url(${speakerProfile.headshot})`,
                          }}
                        ></div>
                      ) : (
                        <div className='w-12 h-16 bg-ap-blue rounded flex items-center justify-center'>
                          <div className='text-white/70 text-3xl font-oswald uppercase'>
                            {registrantData.firstName.charAt(0)}
                            {registrantData.lastName.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                          <MdEdit color='black' size={20} />
                        </div>
                        <div className='text-sm font-semibold text-white hover:text-ap-yellow'>
                          Edit Speaker Profile
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* MAIN CONTENT */}
          <div className='col-span-12 lg:col-span-9'>
            <div className='w-full h-full px-8 pt-8 pb-10 bg-ap-yellow/10 flex flex-col gap-12'>
              <div className='grid lg:grid-cols-3 gap-12 w-full'>
                <div className='flex flex-col gap-0.5 leading-tight col-span-1'>
                  <div className='font-bold text-ap-blue mb-2 text-sm'>
                    Billing Details
                  </div>
                  <div className='text-gray-600 text-sm'>
                    {registrantData.billingAddressFirstName}{' '}
                    {registrantData.billingAddressLastName}
                  </div>
                  <div className='text-gray-600 text-sm'>{billingPhone}</div>
                  <div className='text-gray-600 text-sm'>{billingEmail}</div>
                  <div className='text-gray-600 text-sm'>
                    {registrantData.billingAddressStreet}
                  </div>
                  <div className='text-gray-600 text-sm'>
                    {registrantData.billingAddressCity},{' '}
                    {registrantData.billingAddressState},{' '}
                    {registrantData.billingAddressZip}
                  </div>
                </div>
                {/* WORKSHOPS */}
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
                {/* SPEED NETWORKING */}
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
                          registrantData.speedNetworkingStatus === 'APPROVED'
                            ? 'text-green-500'
                            : registrantData.speedNetworkingStatus === 'PENDING'
                            ? 'text-yellow-500'
                            : 'text-red-500'
                        }`}
                      >
                        {' '}
                        {registrantData.speedNetworkingStatus === 'APPROVED'
                          ? 'Approved'
                          : registrantData.speedNetworkingStatus === 'PENDING'
                          ? 'Pending'
                          : 'Not Registered'}
                      </span>
                    </div>
                    {registrantData.speedNetworkingStatus !== 'APPROVED' &&
                    registrantData.speedNetworkingStatus !== 'PENDING' ? (
                      <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                        <button
                          onClick={() => {
                            registerSpeedNetworking(registrant.id);
                            sendActivity({
                              type: 'SPEED_NETWORKING_REGISTERED',
                              activity: `${registrantData.firstName} ${registrantData.lastName} Speed Networking Registered`,
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
                              activity: `${registrantData.firstName} ${registrantData.lastName} Speed Networking Unregistered`,
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
              {/* TOURS */}
              <div className='w-full grid lg:grid-cols-3 gap-12'>
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
                          {registrantData.morrisetteStatus === 'APPROVED' ? (
                            <div>
                              <MdCheckCircle color='green' size={20} />
                            </div>
                          ) : registrantData.morrisetteStatus === 'PENDING' ? (
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
                      <div className='text-sm font-semibold mt-2'>
                        Transportation Preference:
                        <br />
                        <span className='capitalize font-medium text-gray-500'>
                          {' '}
                          {registrantData.morrisetteTransportation
                            ? registrantData.morrisetteTransportation
                            : 'Not Registered'}
                        </span>
                      </div>
                      <div className='text-sm font-semibold mt-2'>
                        Tour Registration Status:
                        <span
                          className={`font-bold ${
                            registrantData.morrisetteStatus === 'PENDING'
                              ? 'text-yellow-500'
                              : 'text-green-500'
                          }`}
                        >
                          {' '}
                          {registrantData.morrisetteStatus === 'PENDING' ? (
                            <div className='flex items-center gap-1'>
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                              <div>Pending</div>
                            </div>
                          ) : registrantData.morrisetteStatus === 'APPROVED' ? (
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
                      {registrantData.morrisetteStatus !== 'APPROVED' &&
                      registrantData.morrisetteStatus !== 'PENDING' ? (
                        <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                          <button
                            onClick={() => {
                              registerMorrisette(registrant.id);
                              sendActivity({
                                type: 'MORISSETTE_REGISTERED',
                                activity: `${registrantData.firstName} ${registrantData.lastName} Morrisette Registered`,
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
                                activity: `${registrantData.firstName} ${registrantData.lastName} Morrisette Unregistered`,
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
                          {registrantData.aristoStatus === 'APPROVED' ? (
                            <div>
                              <MdCheckCircle color='green' size={20} />
                            </div>
                          ) : registrantData.aristoStatus === 'PENDING' ? (
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
                          {registrantData.aristoTransportation
                            ? registrantData.aristoTransportation
                            : 'Not Registered'}
                        </span>
                      </div>
                      <div className='text-sm font-semibold mt-2'>
                        Tour Registration Status:
                        <span
                          className={`font-bold ${
                            registrantData.aristoStatus === 'PENDING'
                              ? 'text-yellow-500'
                              : 'text-green-500'
                          }`}
                        >
                          {' '}
                          {registrantData.aristoStatus === 'PENDING' ? (
                            <div className='flex items-center gap-1'>
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                              <div>Pending</div>
                            </div>
                          ) : registrantData.aristoStatus === 'APPROVED' ? (
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
                      {registrantData.aristoStatus !== 'APPROVED' &&
                      registrantData.aristoStatus !== 'PENDING' ? (
                        <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                          <button
                            onClick={() => {
                              registerAristo(registrant.id);
                              sendActivity({
                                type: 'ARISTO_REGISTERED',
                                activity: `${registrantData.firstName} ${registrantData.lastName} Aristo Registered`,
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
                                activity: `${registrantData.firstName} ${registrantData.lastName} Aristo Unregistered`,
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
                          {registrantData.magnaStatus === 'APPROVED' ? (
                            <div>
                              <MdCheckCircle color='green' size={20} />
                            </div>
                          ) : registrantData.magnaStatus === 'PENDING' ? (
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
                          {registrantData.magnaTransportation
                            ? registrantData.magnaTransportation
                            : 'Not Registered'}
                        </span>
                      </div>
                      <div className='text-sm font-semibold mt-2'>
                        Tour Registration Status:
                        <span
                          className={`font-bold ${
                            registrantData.magnaStatus === 'PENDING'
                              ? 'text-yellow-500'
                              : 'text-green-500'
                          }`}
                        >
                          {' '}
                          {registrantData.magnaStatus === 'PENDING' ? (
                            <div className='flex items-center gap-1'>
                              <div>
                                <MdAccessTime color='#eab308' size={20} />
                              </div>
                              <div>Pending</div>
                            </div>
                          ) : registrantData.magnaStatus === 'APPROVED' ? (
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
                      {registrantData.magnaStatus !== 'APPROVED' &&
                      registrantData.magnaStatus !== 'PENDING' ? (
                        <div className='flex items-center w-full gap-1 mt-2 cursor-pointer border-t border-gray-300 pt-2'>
                          <button
                            onClick={() => {
                              registerMagna(registrant.id);
                              sendActivity({
                                type: 'MAGNA_REGISTERED',
                                activity: `${registrantData.firstName} ${registrantData.lastName} Magna Registered`,
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
                                activity: `${registrantData.firstName} ${registrantData.lastName} Magna Unregistered`,
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
      {showEditSpeakerProfile && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
          <div className='w-full max-w-4xl mx-auto bg-white p-6 rounded-lg'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-ap-blue'>
                  Edit Speaker Profile
                </h2>
                <button
                  onClick={() => setShowEditSpeakerProfile(false)}
                  className='text-gray-500 hover:text-gray-700'
                >
                  ×
                </button>
              </div>

              <div className='grid gap-8'>
                <div className='flex flex-col gap-6'>
                  <div className='flex gap-6 bg-ap-yellow/10 rounded-lg p-4'>
                    {/* Headshot Upload */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-ap-blue'>
                        Speaker Photo
                      </label>
                      <label
                        className='w-28 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer relative bg-cover bg-center bg-no-repeat'
                        style={
                          speakerProfile.headshot
                            ? {
                                backgroundImage: `url(${speakerProfile.headshot})`,
                              }
                            : {}
                        }
                      >
                        {!speakerProfile.headshot && (
                          <div className='text-gray-500 text-sm text-center px-2'>
                            Click to upload photo
                          </div>
                        )}
                        <input
                          type='file'
                          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                          accept='image/*'
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(e.target.files[0], 'headshot');
                            }
                          }}
                        />
                      </label>
                      <p className='text-xs text-gray-500 text-center'>
                        10MB max
                      </p>
                    </div>
                    {/* Bio */}
                    <div className='flex flex-col gap-2 w-full'>
                      <label className='text-sm font-bold text-ap-blue'>
                        Bio
                      </label>
                      <textarea
                        value={speakerProfile.bio}
                        onChange={(e) => {
                          setSpeakerProfile((prev) => ({
                            ...prev,
                            bio: e.target.value,
                          }));
                        }}
                        className='p-2 border border-gray-300 rounded h-32'
                        placeholder='Provide a brief bio of yourself'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  {/* Presentation Title - Moved to top */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Presentation Title
                    </label>
                    <input
                      type='text'
                      value={speakerProfile.presentationTitle || ''}
                      onChange={(e) =>
                        setSpeakerProfile((prev) => ({
                          ...prev,
                          presentationTitle: e.target.value,
                        }))
                      }
                      className='p-2 border border-gray-300 rounded'
                      placeholder='Enter your presentation title'
                    />
                  </div>

                  {/* Presentation Summary */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Presentation Summary
                    </label>
                    <textarea
                      value={speakerProfile.speakerTopic}
                      onChange={(e) => {
                        setSpeakerProfile((prev) => ({
                          ...prev,
                          speakerTopic: e.target.value,
                        }));
                      }}
                      className='p-2 border border-gray-300 rounded h-24'
                      placeholder='Provide a brief summary of your presentation'
                    />
                  </div>

                  {/* Learning Objectives */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Learning Objectives
                    </label>
                    <textarea
                      value={speakerProfile.learningObjectives}
                      onChange={(e) => {
                        setSpeakerProfile((prev) => ({
                          ...prev,
                          learningObjectives: e.target.value,
                        }));
                      }}
                      className='p-2 border border-gray-300 rounded h-20'
                      placeholder='List the key learning objectives of your presentation'
                    />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className='flex justify-end gap-3 mt-4 pt-4 border-t border-gray-200'>
                <button
                  onClick={() => setShowEditSpeakerProfile(false)}
                  className='px-4 py-2 text-gray-600 hover:text-gray-800'
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleSaveChanges();
                  }}
                  className='px-4 py-2 bg-ap-blue text-white rounded hover:bg-ap-blue/80'
                >
                  Save Changes
                </button>
              </div>
            </div>
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

export default RegistrantPage;
