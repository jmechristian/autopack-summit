import React, { useState, useEffect } from 'react';
import { addons } from '../../data/addons';
import { FaEnvelope } from 'react-icons/fa'; // Import the email icon
import { sendAgenda } from '../../util/api';
const Addons = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAddons, setFilteredAddons] = useState(addons);

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
    const res = await sendAgenda(registrant);
    console.log(res);
  };

  return (
    <div className='w-full max-w-[1600px] mx-auto py-20'>
      <h1 className='text-xl font-bold mb-2'>Addon List</h1>
      <input
        type='text'
        placeholder='Search by email'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='mb-2 p-1 border rounded text-sm'
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
                    >
                      <FaEnvelope className='inline mr-1' size={12} />
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
  );
};

export default Addons;
