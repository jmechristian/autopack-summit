import React, { useState, useEffect } from 'react';
import { getBoardMembers } from '../../util/api';

const MemberCard = ({ member, onReadBio }) => (
  <div className='bg-white border border-gray-900 p-4 flex items-center gap-4'>
    <div>
      <div
        className='w-28 h-28 rounded-full bg-gray-900 flex items-center justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${member.profilePic})` }}
      ></div>
    </div>
    <div className='flex flex-col justify-between'>
      <h3 className='text-lg font-semibold'>{member.name}</h3>
      <p className='text-sm text-gray-600'>{member.company}</p>
      <p className='text-sm text-gray-600'>{member.title}</p>
      <p className='text-sm text-gray-600'>{member.email}</p>
      <button
        onClick={() => onReadBio(member)}
        className='mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600'
      >
        Read Bio
      </button>
    </div>
  </div>
);

const BioModal = ({ member, onClose }) => (
  <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
    <div className='bg-white p-6 rounded-lg shadow-lg max-w-md'>
      <h2 className='text-xl font-bold mb-4'>About {member.name}</h2>
      <p className='text-gray-700'>{member.bio}</p>
      <button
        onClick={onClose}
        className='mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600'
      >
        Close
      </button>
    </div>
  </div>
);

const Index = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      const members = await getBoardMembers();
      setBoardMembers(members);
    };
    fetchBoardMembers();
  }, []);

  return (
    <div className='py-16 max-w-7xl mx-auto'>
      <h1 className='text-4xl tracking-tight uppercase font-medium font-oswald mb-16'>
        2025 Advisory Board
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
        {boardMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onReadBio={setSelectedMember}
          />
        ))}
      </div>
      {selectedMember && (
        <BioModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default Index;
