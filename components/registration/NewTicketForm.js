import React, { useState } from 'react';
import { checkForExistingRegistrant } from '../../util/api';

const NewTicketForm = ({
  setRegistrant,
  close,
  company,
  companyId,
  formData,
}) => {
  const [newTicketRegistrant, setNewTicketRegistrant] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    aPSRegistrant2025CompanyNameId: companyId,
    jobTitle: '',
    attendeeType: 'Solution-Provider',
    termsAccepted: true,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
  });

  const validateForm = async () => {
    const newErrors = {};
    let isValid = true;

    if (!newTicketRegistrant.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!newTicketRegistrant.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!newTicketRegistrant.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(newTicketRegistrant.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    } else {
      const emailExists = await checkForExistingRegistrant(
        newTicketRegistrant.email
      );
      if (emailExists) {
        newErrors.email = 'Email already exists';
        isValid = false;
      }
    }

    if (!newTicketRegistrant.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!newTicketRegistrant.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field, value) => {
    setNewTicketRegistrant({
      ...newTicketRegistrant,
      [field]: value,
    });
    // Clear the error for the field being edited
    setErrors({
      ...errors,
      [field]: '',
    });
  };

  const handleCreateTicket = async () => {
    const isValid = await validateForm();
    if (isValid) {
      setRegistrant(newTicketRegistrant);
      close();
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='absolute top-0 right-0 p-2'>
        <button onClick={close}>Close</button>
      </div>
      <div className='bg-white px-6 py-5 rounded-lg w-1/2 flex flex-col gap-4'>
        <div className='p-3 bg-ap-darkblue text-white font-oswald text-xl font-medium uppercase'>
          <h2>
            Create New Ticket :{' '}
            <span className='font-normal text-ap-yellow'>{company}</span>
          </h2>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='firstName' className='flex items-center gap-1'>
            First Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='firstName'
            value={newTicketRegistrant.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`border rounded p-2 ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm'>{errors.firstName}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='lastName' className='flex items-center gap-1'>
            Last Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='lastName'
            value={newTicketRegistrant.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`border rounded p-2 ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm'>{errors.lastName}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='flex items-center gap-1'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            value={newTicketRegistrant.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`border rounded p-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='phone' className='flex items-center gap-1'>
            Phone <span className='text-red-500'>*</span>
          </label>
          <input
            type='tel'
            id='phone'
            value={newTicketRegistrant.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`border rounded p-2 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className='text-red-500 text-sm'>{errors.phone}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='jobTitle' className='flex items-center gap-1'>
            Job Title <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='jobTitle'
            value={newTicketRegistrant.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className={`border rounded p-2 ${
              errors.jobTitle ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.jobTitle && (
            <p className='text-red-500 text-sm'>{errors.jobTitle}</p>
          )}
        </div>
        <div className='flex items-center justify-end gap-6 mt-4'>
          <button className='text-gray-600' onClick={close}>
            Cancel
          </button>
          <button
            onClick={handleCreateTicket}
            className='bg-ap-darkblue hover:bg-ap-blue transition-colors duration-300 font-bold text-white px-4 py-2 rounded-md'
          >
            Create Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTicketForm;
