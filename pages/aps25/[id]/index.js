import React from 'react';
import { useRouter } from 'next/router';
import { getCurrentAPS25Registrant } from '../../../util/api';
import { MdDownload, MdAccessTime, MdCheckCircle } from 'react-icons/md';

export const Page = ({ registrant }) => {
  const router = useRouter();
  const billingPhone = registrant.billingAddressPhone;
  const billingEmail = registrant.billingAddressEmail;
  return (
    <div className='w-full py-10'>
      {registrant ? (
        // <div className='flex flex-col gap-6 max-w-5xl mx-auto w-full'>
        //   <div className='w-full p-8 rounded-lg bg-white'>

        //     </div>
        //   </div>
        //   {registrant.attendeeType === 'Speaker' && (
        //     <div className='w-full grid lg:grid-cols-3 gap-7 bg-white rounded-lg p-8'>
        //       <div className='flex flex-col gap-3'>
        //         <div className='text-sm font-bold text-ap-blue mb-2'>
        //           Speaker Details
        //         </div>
        //         <div className='w-36 h-40 bg-gray-200 rounded-lg flex items-center justify-center'>
        //           <div className='text-xs font-semibold'>Upload Headshot</div>
        //         </div>
        //         <div className='w-36 h-20 border border-gray-300 border-dashed rounded-lg flex items-center justify-center'>
        //           <div className='text-xs font-semibold'>
        //             Upload Presentation
        //           </div>
        //         </div>
        //       </div>
        //       <div className='flex flex-col gap-5 col-span-2'>
        //         <div className='text-sm font-bold text-ap-blue'>
        //           Presentation Details
        //         </div>
        //         <div className='flex flex-col gap-1'>
        //           <div className='text-sm font-bold'>Presentation Title</div>
        //           <div>Please Enter Title</div>
        //         </div>
        //         <div className='flex flex-col gap-1'>
        //           <div className='text-sm font-bold'>Presentation Topic</div>
        //           <div>{registrant.speakerTopic}</div>
        //         </div>
        //         <div className='flex flex-col gap-1'>
        //           <div className='text-sm font-bold'>Learning Objectives</div>
        //           <div>{registrant.learningObjectives}</div>
        //         </div>
        //       </div>
        //     </div>
        //   )}
        //   <div className='w-full grid lg:grid-cols-3 gap-7'>
        //     <div className='w-full p-8 bg-white rounded-lg flex flex-col gap-2'>
        //       <div className='text-sm font-bold text-ap-blue mb-2'>Tours</div>
        //       <div className='flex flex-col gap-5 divide-y divide-gray-300'>
        //         {(registrant.morrisetteStatus === 'PENDING' ||
        //           registrant.morrisetteStatus === 'APPROVED') && (
        //           <div className='flex flex-col gap-1'>
        //             <div className='font-bold'>Morrisette Tour</div>
        //             <div className='text-sm text-gray-500'>
        //               Wednesday, October 15th
        //               <br /> 10:30 AM - 01:00 PM
        //             </div>
        //             <div className='text-sm'>
        //               24 Tyger River Dr.
        //               <br /> Duncan, SC 29334
        //             </div>
        //             <div className='text-sm font-semibold mt-2'>
        //               Transportation Preference:
        //               <span className='capitalize'>
        //                 {' '}
        //                 {registrant.morrisetteTransportation}
        //               </span>
        //             </div>
        //             <div className='text-sm font-semibold mt-2'>
        //               Tour Registration Status:
        //               <span
        //                 className={`font-bold ${
        //                   registrant.morrisetteStatus === 'PENDING'
        //                     ? 'text-yellow-500'
        //                     : 'text-green-500'
        //                 }`}
        //               >
        //                 {' '}
        //                 {registrant.morrisetteStatus === 'PENDING' ? (
        //                   <div className='flex items-center gap-1'>
        //                     <div>
        //                       <MdAccessTime color='#eab308' size={20} />
        //                     </div>
        //                     <div>Pending</div>
        //                   </div>
        //                 ) : registrant.morrisetteStatus === 'APPROVED' ? (
        //                   <div className='flex items-center gap-1'>
        //                     <div>
        //                       <MdCheckCircle color='green' size={20} />
        //                     </div>
        //                     <div>Approved</div>
        //                   </div>
        //                 ) : (
        //                   <div>Not Registered</div>
        //                 )}
        //               </span>
        //             </div>
        //           </div>
        //         )}
        //         {(registrant.magnaStatus === 'PENDING' ||
        //           registrant.magnaStatus === 'APPROVED') && (
        //           <div
        //             className={`flex flex-col gap-1 ${
        //               registrant.morrisetteStatus === 'PENDING'
        //                 ? 'pt-5'
        //                 : 'pt-0'
        //             }`}
        //           >
        //             <div className='font-bold'>Magna Mirrors Tour</div>
        //             <div className='text-sm text-gray-500'>
        //               Friday, October 17th
        //               <br /> 10:00 AM - 12:00 PM
        //             </div>
        //             <div className='text-sm'>
        //               1150 S Danzler Rd.
        //               <br /> Duncan, SC 29334
        //             </div>
        //             <div className='text-sm font-semibold mt-2'>
        //               Transportation Preference:
        //               <span className='capitalize'>
        //                 {' '}
        //                 {registrant.magnaTransportation}
        //               </span>
        //             </div>
        //             <div className='text-sm font-semibold mt-2'>
        //               Tour Registration Status:
        //               <span
        //                 className={`font-bold ${
        //                   registrant.magnaStatus === 'PENDING'
        //                     ? 'text-yellow-500'
        //                     : 'text-green-500'
        //                 }`}
        //               >
        //                 {' '}
        //                 {registrant.magnaStatus === 'PENDING' ? (
        //                   <div className='flex items-center gap-1'>
        //                     <div>
        //                       <MdAccessTime color='#eab308' size={20} />
        //                     </div>
        //                     <div>Pending</div>
        //                   </div>
        //                 ) : registrant.magnaStatus === 'APPROVED' ? (
        //                   <div className='flex items-center gap-1'>
        //                     <div>
        //                       <MdCheckCircle color='green' size={20} />
        //                     </div>
        //                     <div>Approved</div>
        //                   </div>
        //                 ) : (
        //                   <div>Not Registered</div>
        //                 )}
        //               </span>
        //             </div>
        //           </div>
        //         )}
        //         {!registrant.magnaStatus && !registrant.morrisetteStatus && (
        //           <div className='flex flex-col gap-1 pt-5'>
        //             <div className='text-sm text-gray-500'>
        //               No Tours Registered
        //             </div>
        //           </div>
        //         )}
        //       </div>
        //     </div>
        //     <div className='w-full p-8 bg-white rounded-lg'>
        //       <div className='text-sm font-bold text-ap-blue mb-2'>
        //         Workshops
        //       </div>
        //       <div className='flex flex-col gap-2 w-full h-full justify-center items-center text-sm text-gray-500'>
        //         The complimentary workshops do not require registrations.
        //         Walk-ins are welcome! More details will be provided shortly.
        //       </div>
        //     </div>
        //     <div className='w-full p-8 bg-white rounded-lg'>
        //       <div className='text-sm font-bold text-ap-blue mb-5'>
        //         Speed Networking
        //       </div>
        //       <div className='flex flex-col gap-1'>
        //         <div className='font-bold'>
        //           Wednesday, October 15th
        //           <br /> 2:30 PM - 3:30 PM
        //         </div>
        //         <div className='text-sm text-gray-500'>
        //           Conference Room Redbud A/B/C
        //         </div>
        //         <div className='text-sm font-semibold mt-2'>
        //           Speed Networking Registration Status:
        //           <span
        //             className={`font-bold ${
        //               registrant.speedNetworking &&
        //               registrant.status === 'PENDING'
        //                 ? 'text-yellow-500'
        //                 : 'text-red-500'
        //             }`}
        //           >
        //             {' '}
        //             {registrant.speedNetworking &&
        //             registrant.status === 'PENDING'
        //               ? 'Pending'
        //               : 'Not Registered'}
        //           </span>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className='w-full max-w-7xl mx-auto border border-gray-300 p-8 grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-12 lg:col-span-3'>
            <div
              className='w-full h-[550px] bg-ap-blue p-6 bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://apsmedia.s3.us-east-1.amazonaws.com/profile-header.png')`,
              }}
            >
              <div className='flex flex-col justify-between h-full'>
                <div className='w-full h-full flex flex-col gap-2'>
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
                <div className='flex flex-col gap-10'>
                  <div className='flex flex-col gap-1'>
                    <div className='text-sm font-bold text-white'>
                      Registration Type
                    </div>
                    <div className='text-white text-lg font-oswald uppercase'>
                      {registrant.attendeeType}
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='text-sm font-bold text-white'>
                      Registration Status
                    </div>
                    <div
                      className={`flex items-center gap-1 text-lg font-oswald uppercase w-fit ${
                        registrant.status === 'PENDING'
                          ? 'bg-ap-yellow px-3 py-1 rounded-lg'
                          : 'bg-green-600 px-3 py-1 rounded-lg'
                      }`}
                    >
                      <div>
                        {registrant.status === 'PENDING' ? (
                          <MdAccessTime color='gray' size={24} />
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
            <div className='w-full h-full bg-white p-8 bg-ap-yellow/10'>
              <div className='grid lg:grid-cols-3 gap-12 w-full'>
                <div className='flex flex-col gap-1 leading-tight'>
                  <div className='font-bold text-gray-900 mb-2'>
                    Billing Details
                  </div>
                  <div className='text-gray-600'>
                    {registrant.billingAddressFirstName}{' '}
                    {registrant.billingAddressLastName}
                  </div>
                  <div className='text-gray-600'>{billingPhone}</div>
                  <div className='text-gray-600'>{billingEmail}</div>
                  <div className='text-gray-600'>
                    {registrant.billingAddressStreet}
                  </div>
                  <div className='text-gray-600'>
                    {registrant.billingAddressCity},{' '}
                    {registrant.billingAddressState},{' '}
                    {registrant.billingAddressZip}
                  </div>
                  <div className='w-fit gap-1 bg-gray-900 hover:bg-gray-700 flex items-center justify-center cursor-pointer mt-2 border border-black px-2 py-2 rounded-lg'>
                    <div>
                      <MdDownload color='white' size={18} />
                    </div>
                    <div className='text-xs font-medium text-white'>
                      Download Invoice
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
