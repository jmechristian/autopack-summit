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
  MdEdit,
} from 'react-icons/md';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
export const Page = ({ registrant }) => {
  console.log(registrant);
  const [showEditSpeakerProfile, setShowEditSpeakerProfile] = useState(false);
  const router = useRouter();
  const billingPhone = registrant.billingAddressPhone;
  const billingEmail = registrant.billingAddressEmail;
  const [showMorrisetteDetails, setShowMorrisetteDetails] = useState(false);
  const [showMagnaDetails, setShowMagnaDetails] = useState(false);
  const [showAristoDetails, setShowAristoDetails] = useState(false);

  const [speakerProfile, setSpeakerProfile] = useState({
    headshot: registrant.headshot || '',
    presentationTitle: registrant.presentationTitle || '',
    presentationSummary: registrant.presentationSummary || '',
    learningObjectives: registrant.learningObjectives || '',
    presentation: registrant.presentation || '',
  });

  const handleFileUpload = async (file, type) => {
    // Add your file upload logic here
    // You might want to use FormData to send the file to your server
    const formData = new FormData();
    formData.append(type, file);

    try {
      // Add your API call to upload the file
      // const response = await uploadFile(formData);
      // setSpeakerProfile(prev => ({
      //   ...prev,
      //   [type]: response.url
      // }));
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Add your API call to save the changes
      // await updateSpeakerProfile(registrant.id, speakerProfile);
      setShowEditSpeakerProfile(false);
      refreshData();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <div className='w-full py-10'>
      {registrant ? (
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
                <div className='flex items-end flex-1 gap-2'>
                  <div
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={() => setShowEditSpeakerProfile(true)}
                  >
                    {registrant.headshot ? (
                      <div
                        className='w-16 h-20 rounded-full bg-cover bg-center bg-no-repeat'
                        style={{
                          backgroundImage: `url(${registrant.headshot})`,
                        }}
                      ></div>
                    ) : (
                      <div className='w-12 h-16 bg-ap-blue rounded flex items-center justify-center'>
                        <div className='text-white/70 text-3xl font-oswald uppercase'>
                          {registrant.firstName.charAt(0)}
                          {registrant.lastName.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className='flex items-center gap-1'>
                      <div>
                        <MdEdit color='white' size={20} />
                      </div>
                      <div className='text-sm font-medium text-white hover:text-ap-yellow'>
                        Edit Speaker Profile
                      </div>
                    </div>
                  </div>
                </div>
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
                      <div className='text-sm font-semibold mt-2'>
                        Transportation Preference:
                        <br />
                        <span className='capitalize font-medium text-gray-500'>
                          {' '}
                          {registrant.morrisetteTransportation
                            ? registrant.morrisetteTransportation
                            : 'Not Registered'}
                        </span>
                      </div>
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
          <div className='w-full max-w-6xl mx-auto bg-white p-10 rounded-lg'>
            <div className='flex flex-col gap-6'>
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

              <div className='grid grid-cols-2 gap-8'>
                {/* Left Column */}
                <div className='flex flex-col gap-6'>
                  {/* Headshot Upload */}
                  <div className='flex flex-col gap-2 bg-ap-yellow/10 rounded-lg p-4'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Speaker Photo
                    </label>
                    <label
                      className='w-28 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer relative bg-cover bg-center bg-no-repeat'
                      style={
                        registrant.headshot
                          ? { backgroundImage: `url(${registrant.headshot})` }
                          : {}
                      }
                    >
                      {!registrant.headshot && (
                        <div className='text-gray-500 text-sm text-center px-2'>
                          Click to upload photo
                        </div>
                      )}
                      <input
                        type='file'
                        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                        accept='image/*'
                        onChange={(e) =>
                          handleFileUpload(e.target.files[0], 'headshot')
                        }
                      />
                    </label>
                    <p className='text-xs text-gray-500'>
                      2MB max, 1024x1024px
                    </p>
                  </div>

                  {/* Presentation File Upload */}
                  <div className='flex flex-col gap-2 bg-ap-blue/10 rounded-lg p-4'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Presentation File
                    </label>
                    <div
                      className='p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer'
                      onClick={() =>
                        document.getElementById('presentation-upload').click()
                      }
                    >
                      <div className='text-center'>
                        <div className='text-gray-500 text-sm'>
                          Click to upload presentation
                        </div>
                        <div className='text-xs text-gray-400'>
                          PDF, PPTX, or PPT (max 50MB)
                        </div>
                      </div>
                      <input
                        type='file'
                        id='presentation-upload'
                        className='hidden'
                        accept='.pdf,.pptx,.ppt'
                        onChange={(e) => {
                          // Handle file upload
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className='flex flex-col gap-6'>
                  {/* Presentation Title - Moved to top */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Presentation Title
                    </label>
                    <input
                      type='text'
                      value={registrant.presentationTitle || ''}
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
                      value={registrant.presentationSummary || ''}
                      onChange={(e) => {
                        // Handle summary change
                      }}
                      className='p-2 border border-gray-300 rounded h-32'
                      placeholder='Provide a brief summary of your presentation'
                    />
                  </div>

                  {/* Learning Objectives */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Learning Objectives
                    </label>
                    <textarea
                      value={registrant.learningObjectives || ''}
                      onChange={(e) => {
                        // Handle objectives change
                      }}
                      className='p-2 border border-gray-300 rounded h-32'
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
                    // Handle save changes
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

export default Page;
