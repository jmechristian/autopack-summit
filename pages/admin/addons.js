import React, { useState, useEffect } from 'react';
import { addons } from '../../data/addons';
import { FaEnvelope } from 'react-icons/fa'; // Import the email icon
import { sendAgenda } from '../../util/api';
const Addons = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAddons, setFilteredAddons] = useState(addons);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    const filtered = addons.filter((addon) =>
      addon.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAddons(filtered);
  }, [searchTerm]);

  const handleEmailClick = async (registrant) => {
    setIsLoading(true);
    // const res = await sendAgenda(registrant);
    console.log('clicked');
    setIsLoading(false);
  };

  return (
    <div className='w-full max-w-[1600px] mx-auto py-20 flex flex-col gap-20'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-bold mb-2'>
          Addon List: {addons.length} Registrants (minus staff and students)
        </h1>
        <input
          type='text'
          placeholder='Search by email'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='mb-2 p-1 border rounded text-sm w-1/3'
        />
        <div className='overflow-x-auto'>
          <div className='max-h-[70vh] overflow-y-auto'>
            <table className='min-w-full bg-white text-xs'>
              <thead className='bg-gray-100 sticky top-0'>
                <tr>
                  <th className='px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  {Object.keys(addons[0]).map((key) => (
                    <th
                      key={key}
                      className='px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider'
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {filteredAddons.map((addon, index) => (
                  <tr key={index}>
                    <td className='px-2 py-1 whitespace-nowrap'>
                      <button
                        onClick={() => handleEmailClick(addon)}
                        className='text-blue-600 hover:text-blue-800'
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className='animate-pulse'>...</div>
                        ) : (
                          <>
                            <FaEnvelope className='inline mr-1' size={12} />
                          </>
                        )}
                      </button>
                    </td>
                    {Object.entries(addon).map(([key, value], idx) => (
                      <td key={idx} className='px-2 py-1 whitespace-nowrap'>
                        {value === null
                          ? ''
                          : typeof value === 'object'
                          ? JSON.stringify(value)
                          : value.toString()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 w-full'>
        <div className='flex flex-col gap-2 border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Morrisette:{' '}
            {addons.filter((addon) => addon.morrisette === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.morrisette === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Clemson: {addons.filter((addon) => addon.clemson === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.clemson === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Bosch: {addons.filter((addon) => addon.bosch === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.bosch === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Guardian:{' '}
            {addons.filter((addon) => addon.guardian === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.guardian === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Surgere: {addons.filter((addon) => addon.surgere === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.surgere === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            BMW: {addons.filter((addon) => addon.bmw === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.bmw === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Speed Returnable:{' '}
            {addons.filter((addon) => addon.speedReturnable === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.speedReturnable === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Speed Aftersales:{' '}
            {addons.filter((addon) => addon.speedAftersales === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.speedAftersales === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  border border-black p-4'>
          <h1 className='text-xl font-bold mb-2'>
            Advisory:{' '}
            {addons.filter((addon) => addon.advisory === 'TRUE').length}
          </h1>
          <div className='grid grid-cols-2 gap-2.5'>
            {addons
              .filter((addon) => addon.advisory === 'TRUE')
              .map((addon, index) => (
                <div key={index} className='flex flex-col gap-0'>
                  <div className='font-bold text-sm'>
                    {addon.first} {addon.last}
                  </div>
                  <div className='text-xs text-gray-500'>{addon.email}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addons;
