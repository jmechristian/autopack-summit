import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    attendeeType: '',
    termsAccepted: false,
    interests: [],
    otherInterest: '',
    speedNetworking: false,
  });

  const [errors, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState({ 1: false, 2: false });

  const validateStep = (stepToValidate) => {
    const newErrors = {};
    if (stepToValidate === 1) {
      if (!formData.firstName) newErrors.firstName = 'First Name is required';
      if (!formData.lastName) newErrors.lastName = 'Last Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone Number is required';
      if (!formData.companyName)
        newErrors.companyName = 'Company Name is required';
      if (!formData.jobTitle) newErrors.jobTitle = 'Job Title is required';
      if (!formData.attendeeType)
        newErrors.attendeeType = 'Attendee Type is required';
      if (!formData.termsAccepted)
        newErrors.termsAccepted = 'You must accept the terms';
    } else if (stepToValidate === 2) {
      if (formData.interests.length === 0)
        newErrors.interests = 'At least one interest is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setCompletedSteps((prev) => ({ ...prev, [step]: true }));
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newErrors = { ...errors };

    if (type === 'checkbox' && name === 'interests') {
      setFormData((prevData) => {
        const newInterests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);
        if (newInterests.length > 0) {
          delete newErrors.interests; // Clear error if at least one interest is selected
        }
        return { ...prevData, interests: newInterests };
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });

      // Clear specific field error if the field is valid
      if (name === 'firstName' && value) delete newErrors.firstName;
      if (name === 'lastName' && value) delete newErrors.lastName;
      if (name === 'email' && value) delete newErrors.email;
      if (name === 'phone' && value) delete newErrors.phone;
      if (name === 'companyName' && value) delete newErrors.companyName;
      if (name === 'jobTitle' && value) delete newErrors.jobTitle;
      if (name === 'attendeeType' && value) delete newErrors.attendeeType;
      if (name === 'termsAccepted' && checked) delete newErrors.termsAccepted;
      if (name === 'speedNetworking' && checked)
        delete newErrors.speedNetworking;
    }

    setErrors(newErrors);
  };

  const renderProgress = () => {
    const steps = [
      'Basic Information',
      'Interests & Preferences',
      'Payment',
      'Confirmation',
    ];
    return (
      <div className='flex justify-between mb-4'>
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isDisabled = stepNumber > 2 && !completedSteps[stepNumber - 1];
          return (
            <div
              key={index}
              className={`flex-1 text-center ${
                step === stepNumber
                  ? 'font-bold text-blue-500'
                  : 'text-gray-500'
              } ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={() => !isDisabled && setStep(stepNumber)}
            >
              <div
                className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                  step === stepNumber ? 'bg-blue-500 text-white' : 'bg-gray-300'
                }`}
              >
                {stepNumber}
              </div>
              <div>{label}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-gray-300 p-4 lg:p-10'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-sm font-bold'>First Name</label>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold'>Last Name</label>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              />
              {errors.lastName && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.lastName}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold'>Email Address</label>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              />
              {errors.email && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.email}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold'>Phone Number</label>
              <input
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.phone}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-sm font-bold'>Company Name</label>
              <input
                type='text'
                name='companyName'
                placeholder='Company Name'
                value={formData.companyName}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              />
              {errors.companyName && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.companyName}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-sm font-bold'>Job Title</label>
              <input
                type='text'
                name='jobTitle'
                placeholder='Job Title'
                value={formData.jobTitle}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              />
              {errors.jobTitle && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.jobTitle}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-sm font-bold'>Attendee Type</label>
              <select
                name='attendeeType'
                value={formData.attendeeType}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded'
              >
                <option value=''>Select Attendee Type</option>
                <option value='OEM'>OEM</option>
                <option value='Tier1'>Tier 1 Part Supplier</option>
                <option value='Sponsor'>Sponsor</option>
                <option value='Solution-Provider'>Solution Provider</option>
                <option value='Speaker'>Speaker</option>
              </select>
              {errors.attendeeType && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.attendeeType}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-2 w-full bg-gray-300 p-5'>
              <label className='text-sm font-bold'>Terms & Conditions</label>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  name='termsAccepted'
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className='mr-2'
                />
                I agree to the Terms & Conditions.
              </label>
              {errors.termsAccepted && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.termsAccepted}
                </p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className='space-y-4 w-full border border-gray-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 divide-x divide-gray-300'>
              <div className='flex flex-col items-start gap-5 p-10'>
                <label className='flex flex-col items-start gap-1'>
                  <h3 className='text-lg font-bold'>
                    What are you most interested in learning about?
                  </h3>
                  <p className=' text-gray-500'>
                    (Choose all that apply. Must select one.)
                  </p>
                </label>
                <div className='flex flex-col gap-5'>
                  {[
                    'AI',
                    'ML',
                    'DataScience',
                    'CloudComputing',
                    'CyberSecurity',
                    'IoT',
                    'Blockchain',
                    'ARVR',
                    'Robotics',
                  ].map((interest) => (
                    <label key={interest} className='flex items-center'>
                      <input
                        type='checkbox'
                        name='interests'
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className='mr-2'
                      />
                      {interest}
                    </label>
                  ))}
                </div>
                {errors.interests && (
                  <p className='text-red-500'>{errors.interests}</p>
                )}
                <input
                  type='text'
                  name='otherInterest'
                  placeholder='Other'
                  value={formData.otherInterest}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div className='flex flex-col items-start gap-5 p-10'>
                <h3 className='text-lg font-bold'>
                  Add-Ons: Complimentary Activities
                </h3>
                <div className='flex flex-col gap-2 w-full'>
                  <div>Tours</div>
                  <div className='flex gap-2 justify-between border border-gray-300 p-4 rounded'>
                    <div className='font-bold'>Tour Title</div>
                    <div>
                      <ChevronDownIcon className='w-5 h-5' />
                    </div>
                  </div>
                  <div className='flex gap-2 justify-between border border-gray-300 p-4 rounded'>
                    <div className='font-bold'>Tour Title</div>
                    <div>
                      <ChevronDownIcon className='w-5 h-5' />
                    </div>
                  </div>
                  <div className='flex gap-2 justify-between border border-gray-300 p-4 rounded'>
                    <div className='font-bold'>Tour Title</div>
                    <div>
                      <ChevronDownIcon className='w-5 h-5' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <div>Workshops</div>

                  <div className='flex gap-2 justify-between border border-gray-300 p-4 rounded'>
                    <div className='font-bold'>Workshop Title</div>
                    <div>
                      <ChevronDownIcon className='w-5 h-5' />
                    </div>
                  </div>
                  <div className='flex gap-2 justify-between border border-gray-300 p-4 rounded'>
                    <div className='font-bold'>Workshop Title</div>
                    <div>
                      <ChevronDownIcon className='w-5 h-5' />
                    </div>
                  </div>
                </div>
                {formData.attendeeType === 'OEM' ||
                formData.attendeeType === 'Tier1' ? (
                  <div className='flex flex-col gap-2 w-full bg-gray-300 p-5'>
                    <div className='flex gap-2 justify-between border border-gray-300 p-4 rounded'>
                      <label className='flex items-center'>
                        <input
                          type='checkbox'
                          name='speedNetworking'
                          checked={formData.speedNetworking}
                          onChange={handleChange}
                          className='mr-2'
                        />
                        Speed Networking
                      </label>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      // ... existing code for steps 3 and 4 ...
    }
  };

  return (
    <div className='max-w-6xl mx-auto py-10 flex flex-col gap-6'>
      <header>{renderProgress()}</header>
      {renderStep()}
      <div className='flex justify-center gap-6'>
        {step > 1 && (
          <button
            onClick={handlePrev}
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
          >
            Prev
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
