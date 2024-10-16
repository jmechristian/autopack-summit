import React, { useEffect, useState } from 'react';
import { getEmailTracking } from '../../util/api';

const Page = () => {
  const [emailTracking, setEmailTracking] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getEmails = async () => {
      const tracking = await getEmailTracking();
      console.log(tracking);
      setEmailTracking(tracking.listEmailTrackings.items);
    };
    getEmails();
  }, []);

  const filteredEmails = emailTracking.filter((email) =>
    email.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>
        Email Tracking: {emailTracking.length} Sent /{' '}
        {emailTracking.filter((email) => email.opened).length} Opened
      </h1>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by email'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
        />
      </div>
      <div className='overflow-x-auto bg-white shadow-md rounded-lg'>
        <table className='min-w-full table-auto'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Created At
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Sent
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Opened
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Opened Date
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {filteredEmails.map((email) => (
              <tr key={email.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>{email.email}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {new Date(email.createdAt).toLocaleString()}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {new Date(email.sent).toLocaleString()}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      email.opened
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {email.opened ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {email.openedDate
                    ? new Date(email.openedDate).toLocaleString()
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
