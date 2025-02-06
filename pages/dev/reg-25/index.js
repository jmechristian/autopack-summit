import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { QRCodeSVG } from 'qrcode.react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import {
  getAPSCompanies,
  createCompany,
  getAPS25AddOns,
  createNewAPS25Registrant,
  getAPS25Codes,
  createAPS25Notification,
} from '../../../util/api';
import AddOnCard from '../../../components/registration/AddOnCard';
// Initialize Stripe (put this outside the component)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const RegistrationForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [discountCodeError, setDiscountCodeError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    aPSRegistrant2025CompanyNameId: '',
    jobTitle: '',
    attendeeType: '',
    termsAccepted: false,
    interests: [],
    otherInterest: '',
    speedNetworking: false,
    billingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    sameAsAttendee: false,
    speakerTopic: '',
    learningObjectives: '',
    totalAmount: '',
    discountCode: '',
    morrisetteTransportation: '',
    paymentConfirmation: '',
  });

  const interests = [
    'Customizable Returnable Packaging',
    'Rack manufacturing and AMRs (Autonomous Mobile Robots)',
    'Automation-Ready Packaging Designs',
    'Lightweight Solutions for Complex Components',
    'Protective Films and Wrappings',
    'Biodegradable Expendable Packaging',
    'Sustainable Packaging for Global Supply Chains',
    'Packaging for high-gloss paint parts',
    'Shock and Vibration-Resistant Packaging',
    'Durability Testing for Packaging Solutions',
    'Nested or Collapsible Packaging Systems',
    'Corrosion Protection in Transit',
    'Hazmat Packaging',
    'Updates on EV and battery packaging',
    'End-of-life EV battery strategies',
    'Temperature-Controlled Packaging',
    'High-Mix/Low-Volume Packaging Optimization',
    'Container Tracking Integration',
    'Sharing and benchmarking packaging challenges and solutions',
    'All of the above',
  ];

  const [errors, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState({ 1: false, 2: false });
  const [discountCode, setDiscountCode] = useState('');
  const [clientSecret, setClientSecret] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [addCompanyError, setAddCompanyError] = useState('');
  const [companySearch, setCompanySearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [addOnsSelected, setAddOnsSelected] = useState([]);
  const dropdownRef = useRef(null);
  const [formDataId, setFormDataId] = useState(null);
  const [codes, setCodes] = useState([]);
  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await getAPSCompanies();
      setCompanies(companies);
    };
    const fetchAddOns = async () => {
      const addOns = await getAPS25AddOns();
      setAddOns(addOns);
    };

    const fetchCodes = async () => {
      const codes = await getAPS25Codes();
      console.log('codes', codes);
      setCodes(codes);
    };

    fetchCompanies();
    fetchAddOns();
    fetchCodes();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalAmount = useMemo(() => {
    if (formData.discountCode) {
      return 0;
    }

    if (formData.attendeeType === 'Solution Provider') {
      return 1015;
    } else if (formData.attendeeType === 'Sponsor') {
      return 799;
    } else {
      return 1015;
    }
  }, [formData.attendeeType, formData.discountCode]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      totalAmount: totalAmount,
    }));
  }, [totalAmount]);

  const filteredCompanies = useMemo(() => {
    return [...companies]
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((company) =>
        company.name.toLowerCase().includes(companySearch.toLowerCase())
      );
  }, [companies, companySearch]);

  const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handlePaymentSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) return;

      setProcessing(true);

      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message);
        setProcessing(false);
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              email: formData.email,
              name: `${formData.firstName} ${formData.lastName}`,
            },
          },
        },
        redirect: 'if_required', // This prevents automatic redirect
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent) {
        formData.paymentConfirmation = result.paymentIntent.id;
        const res = await createNewAPS25Registrant(formData);
        setFormDataId(res.createAPSRegistrant2025.id);
        await createAPS25Notification({
          type: 'REGISTRATION_SENT',
          activity:
            formData.attendeeType +
            ' Registration sent from ' +
            formData.firstName +
            ' ' +
            formData.lastName,
        });
        setStep(4);

        // Send payment method ID to the server
        console.log('payment', result);
        console.log('formData', formData);
      }

      setProcessing(false);
    };

    return (
      <form onSubmit={handlePaymentSubmit}>
        <PaymentElement />
        {error && <div className='text-red-500 mt-2'>{error}</div>}
        <button
          type='submit'
          disabled={!stripe || processing}
          className='mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50'
        >
          {processing ? 'Processing...' : `Pay $${totalAmount}`}
        </button>
      </form>
    );
  };

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
      if (formData.attendeeType === 'Speaker') {
        if (!formData.speakerTopic)
          newErrors.speakerTopic = 'Topic description is required';
        if (!formData.learningObjectives)
          newErrors.learningObjectives = 'Learning objectives are required';
      }
    } else if (stepToValidate === 2) {
      if (formData.interests.length === 0)
        newErrors.interests = 'At least one interest is required';
    } else if (stepToValidate === 3) {
      if (!formData.termsAccepted)
        newErrors.termsAccepted = 'You must accept the terms';
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

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newErrors = { ...errors };

    if (name === 'sameAsAttendee') {
      setFormData((prevData) => {
        const newBillingAddress = checked
          ? {
              street: prevData.street,
              city: prevData.city,
              state: prevData.state,
              zip: prevData.zip,
              firstName: prevData.firstName,
              lastName: prevData.lastName,
              email: prevData.email,
              companyName: prevData.companyName,
              phone: prevData.phone,
            }
          : {
              street: '',
              city: '',
              state: '',
              zip: '',
              firstName: '',
              lastName: '',
              email: '',
              companyName: '',
              phone: '',
            };
        return {
          ...prevData,
          sameAsAttendee: checked,
          billingAddress: newBillingAddress,
        };
      });
    } else if (name === 'billingAddress.phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevData) => ({
        ...prevData,
        billingAddress: {
          ...prevData.billingAddress,
          phone: formattedPhone,
        },
      }));
      if (formattedPhone) delete newErrors.billingPhone;
    } else if (name.startsWith('billingAddress.')) {
      const field = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        billingAddress: {
          ...prevData.billingAddress,
          [field]: value,
        },
      }));
      if (value)
        delete newErrors[
          `billing${field.charAt(0).toUpperCase() + field.slice(1)}`
        ];
    } else if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevData) => ({
        ...prevData,
        phone: formattedPhone,
      }));
      return;
    } else if (name === 'interests') {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);
      setFormData({
        ...formData,
        interests: updatedInterests,
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

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApplyDiscount = () => {
    const matchingCode = codes.find(
      (code) => code.code.toLowerCase() === discountCode.toLowerCase()
    );
    if (matchingCode) {
      setFormData((prev) => ({
        ...prev,
        totalAmount: 0,
        discountCode: discountCode,
      }));
      setDiscountCodeError('');
    } else {
      // Optionally show an error message for invalid codes
      setDiscountCodeError('Invalid discount code');
    }
  };

  const validateBillingInfo = () => {
    const newErrors = {};
    const billing = formData.billingAddress;

    if (!billing.firstName)
      newErrors.billingFirstName = 'First Name is required';
    if (!billing.lastName) newErrors.billingLastName = 'Last Name is required';
    if (!billing.email) newErrors.billingEmail = 'Email is required';
    if (!billing.phone) newErrors.billingPhone = 'Phone is required';
    if (!billing.street) newErrors.billingStreet = 'Street address is required';
    if (!billing.city) newErrors.billingCity = 'City is required';
    if (!billing.state) newErrors.billingState = 'State is required';
    if (!billing.zip) newErrors.billingZip = 'ZIP code is required';
    if (!formData.termsAccepted)
      newErrors.termsAccepted = 'You must accept the terms and conditions';

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSubmit = async () => {
    // Check all previous steps are valid
    if (!validateStep(1) || !validateStep(2) || !validateBillingInfo()) {
      return;
    }

    if (totalAmount === 0 && validateStep(3)) {
      setStep(4);
      return;
    } else {
      const response = await fetch('/api/handle-stripe-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'usd',
          description: `APS Registration ${formData.lastName} -- ${formData.attendeeType}`,
          metadata: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            attendeeType: formData.attendeeType,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.companyName,
          },
        }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    }
  };

  const handleFreeRegistration = async () => {
    if (!validateStep(1) || !validateStep(2)) {
      return;
    }

    const res = await createNewAPS25Registrant(formData);
    setFormDataId(res.createAPSRegistrant2025.id);
    await createAPS25Notification({
      type: 'REGISTRATION_SENT',
      activity:
        formData.attendeeType +
        ' Registration sent from ' +
        formData.firstName +
        ' ' +
        formData.lastName,
    });
    setStep(4);
  };

  const hasStepErrors = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return [
          'firstName',
          'lastName',
          'email',
          'phone',
          'companyName',
          'jobTitle',
          'attendeeType',
        ].some((field) => errors[field]);
      case 2:
        return errors.interests;
      case 3:
        return Object.keys(errors).some(
          (key) => key.startsWith('billing') || key === 'termsAccepted'
        );
      default:
        return false;
    }
  };

  const handleAddCompany = async (e) => {
    e.preventDefault();
    setAddCompanyError('');

    if (!newCompanyName.trim()) {
      setAddCompanyError('Company name is required');
      return;
    }

    if (!formData.email) {
      setAddCompanyError('Email is required');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAddCompanyError('Please enter a valid email address');
      return;
    }

    try {
      // Get domain including @ symbol
      const domain = '@' + formData.email.split('@')[1];
      // Or alternatively: const domain = formData.email.substring(formData.email.indexOf('@'));

      const newCompany = { name: newCompanyName, email: domain };

      const response = await createCompany(newCompany);
      console.log('new company', response);

      // Update companies list
      setCompanies([
        ...companies,
        { id: response.id, name: response.name, email: response.email },
      ]);

      // Select the new company
      setFormData((prev) => ({
        ...prev,
        companyName: newCompany.id,
      }));

      // Close modal and reset form
      setShowAddCompanyModal(false);
      setNewCompanyName('');
      setAddCompanyError('');
    } catch (error) {
      setAddCompanyError('Failed to add company. Please try again.');
    }
  };

  const handleCompanySelect = (company) => {
    setFormData((prev) => ({
      ...prev,
      companyName: company.name,
      aPSRegistrant2025CompanyNameId: company.id,
    }));
    setCompanySearch(company.name);
    setIsDropdownOpen(false);
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
          const isDisabled =
            (stepNumber > 2 && !completedSteps[stepNumber - 1]) || step === 4;
          const hasErrors = hasStepErrors(stepNumber);
          return (
            <div
              key={index}
              className={`flex-1 text-center ${
                step === stepNumber
                  ? 'font-bold text-blue-500'
                  : 'text-gray-500'
              } ${
                isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              }`}
              onClick={() => !isDisabled && setStep(stepNumber)}
            >
              <div className='relative'>
                <div
                  className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                    step === stepNumber
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300'
                  }`}
                >
                  {stepNumber}
                  {hasErrors && (
                    <ExclamationCircleIcon
                      className='w-5 h-5 text-red-500 absolute -right-4 -top-1'
                      aria-hidden='true'
                    />
                  )}
                </div>
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
                placeholder='(xxx) xxx-xxxx'
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
              <div className='relative' ref={dropdownRef}>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search and select company...'
                    value={companySearch}
                    onChange={(e) => {
                      setCompanySearch(e.target.value);
                      setIsDropdownOpen(true);
                      // Clear the selection if user starts typing
                      if (formData.companyName) {
                        setFormData((prev) => ({
                          ...prev,
                          companyName: '',
                          aPSCompanyApsRegistrantsId: '',
                        }));
                      }
                    }}
                    onClick={() => setIsDropdownOpen(true)}
                    className='p-2 pr-8 border border-gray-300 rounded w-full'
                  />
                  {companySearch && (
                    <button
                      onClick={() => {
                        setCompanySearch('');
                        setFormData((prev) => ({
                          ...prev,
                          companyName: '',
                          aPSCompanyApsRegistrantsId: '',
                        }));
                      }}
                      className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    >
                      ×
                    </button>
                  )}
                </div>
                {isDropdownOpen && (
                  <div className='absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-white border border-gray-300 rounded shadow-lg'>
                    {filteredCompanies.length > 0 ? (
                      filteredCompanies.map((company) => (
                        <div
                          key={company.id}
                          className={`p-2 cursor-pointer hover:bg-gray-100 ${
                            formData.companyName === company.id
                              ? 'bg-blue-50'
                              : ''
                          }`}
                          onClick={() => handleCompanySelect(company)}
                        >
                          {company.name}
                        </div>
                      ))
                    ) : (
                      <div className='p-2 text-gray-500'>
                        No companies found
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className='text-sm text-gray-500 cursor-pointer'>
                If your company is not listed,{' '}
                <span
                  className='text-blue-500 hover:underline'
                  onClick={() => setShowAddCompanyModal(true)}
                >
                  click here to add it.
                </span>
              </div>
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
                <option value='Solution-Provider'>Solution Provider</option>
                <option value='Sponsor'>Sponsor</option>
                <option value='Speaker'>Speaker</option>
              </select>
              {errors.attendeeType && (
                <p className='text-red-500 text-sm text-right'>
                  {errors.attendeeType}
                </p>
              )}
            </div>
            {formData.attendeeType === 'Speaker' && (
              <>
                <div className='flex flex-col gap-2 col-span-2'>
                  <label className='text-sm font-bold'>
                    Give a brief description of your proposed topic and how it
                    is relevant to the automotive packaging audience*
                  </label>
                  <textarea
                    name='speakerTopic'
                    value={formData.speakerTopic || ''}
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded h-32'
                    placeholder='Enter your topic description'
                  />
                  {errors.speakerTopic && (
                    <p className='text-red-500 text-sm text-right'>
                      {errors.speakerTopic}
                    </p>
                  )}
                </div>

                <div className='flex flex-col gap-2 col-span-2'>
                  <label className='text-sm font-bold'>
                    Please input three learning objectives from your proposed
                    presentation*
                  </label>
                  <textarea
                    name='learningObjectives'
                    value={formData.learningObjectives || ''}
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded h-32'
                    placeholder='Enter your learning objectives'
                  />
                  {errors.learningObjectives && (
                    <p className='text-red-500 text-sm text-right'>
                      {errors.learningObjectives}
                    </p>
                  )}
                </div>

                <div className='col-span-2 text-sm text-gray-600 italic'>
                  Note: Speaker application is subject to approval. You will be
                  notified via email once your application has been reviewed.
                </div>
              </>
            )}
          </div>
        );
      case 2:
        return (
          <div className='space-y-4 w-full border border-gray-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 divide-x divide-gray-300'>
              <div className='flex flex-col items-start gap-5 p-7'>
                <label className='flex flex-col items-start gap-1'>
                  <h3 className='text-lg font-bold'>
                    What are you most interested in learning about?
                  </h3>
                  <p className=' text-gray-500'>
                    (Choose all that apply. Must select one.)
                  </p>
                </label>
                <div className='flex flex-col gap-3'>
                  {interests.map((interest) => (
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
              <div className='flex flex-col items-start gap-5 p-7 bg-gray-100'>
                <div className='flex flex-col gap-1.5'>
                  <h3 className='text-lg font-bold'>
                    Add-Ons: Complimentary Activities (Optional)
                  </h3>
                  <span className='text-sm text-gray-500'>
                    Please note, all add-ons and activities are subject to
                    registration approval. You will be notified via email once
                    your registration is approved.
                  </span>
                </div>
                {addOns.length > 0 && (
                  <div className='flex flex-col gap-2 w-full'>
                    <div>Tours</div>
                    <AddOnCard
                      addOn={addOns[0]}
                      onUpdate={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          morrisetteTransportation: value,
                          morrisetteStatus: 'PENDING',
                        }));
                        setAddOnsSelected((prev) => [...prev, addOns[0]]);
                      }}
                    />
                  </div>
                )}

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
      case 3:
        return (
          <div className='w-full border border-gray-300 p-5'>
            <div className='grid lg:grid-cols-5 gap-10'>
              <div className='flex flex-col gap-5 col-span-3 w-full p-5'>
                <h3 className='text-lg font-bold'>Billing Information</h3>

                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    name='sameAsAttendee'
                    checked={formData.sameAsAttendee}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  Same as Attendee
                </label>
                <div className='grid grid-cols-2 gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label>First Name</label>
                    <input
                      type='text'
                      name='billingAddress.firstName'
                      value={formData.billingAddress.firstName}
                      onChange={handleChange}
                      className={`p-2 border ${
                        errors.billingFirstName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded`}
                    />
                    {errors.billingFirstName && (
                      <p className='text-red-500 text-sm'>
                        {errors.billingFirstName}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Last Name</label>
                    <input
                      type='text'
                      name='billingAddress.lastName'
                      value={formData.billingAddress.lastName}
                      onChange={handleChange}
                      className={`p-2 border ${
                        errors.billingLastName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded`}
                    />
                    {errors.billingLastName && (
                      <p className='text-red-500 text-sm'>
                        {errors.billingLastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label>Email</label>
                    <input
                      type='email'
                      name='billingAddress.email'
                      value={formData.billingAddress.email}
                      onChange={handleChange}
                      className={`p-2 border ${
                        errors.billingEmail
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded`}
                    />
                    {errors.billingEmail && (
                      <p className='text-red-500 text-sm'>
                        {errors.billingEmail}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Phone</label>
                    <input
                      type='tel'
                      name='billingAddress.phone'
                      value={formData.billingAddress.phone}
                      onChange={handleChange}
                      className={`p-2 border ${
                        errors.billingPhone
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded`}
                      placeholder='(xxx) xxx-xxxx'
                    />
                    {errors.billingPhone && (
                      <p className='text-red-500 text-sm'>
                        {errors.billingPhone}
                      </p>
                    )}
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label>Company Name</label>
                  <input
                    type='text'
                    name='billingAddress.companyName'
                    value={formData.billingAddress.companyName}
                    onChange={handleChange}
                    className={`p-2 border ${
                      errors.billingCompanyName
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded`}
                  />
                  {errors.billingCompanyName && (
                    <p className='text-red-500 text-sm'>
                      {errors.billingCompanyName}
                    </p>
                  )}
                </div>

                <div className='flex flex-col gap-2'>
                  <label>Street</label>
                  <input
                    type='text'
                    name='billingAddress.street'
                    value={formData.billingAddress.street}
                    onChange={handleChange}
                    className={`p-2 border ${
                      errors.billingStreet
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded`}
                  />
                  {errors.billingStreet && (
                    <p className='text-red-500 text-sm'>
                      {errors.billingStreet}
                    </p>
                  )}
                </div>
                <div className='flex flex-col gap-2'>
                  <label>City</label>
                  <input
                    type='text'
                    name='billingAddress.city'
                    value={formData.billingAddress.city}
                    onChange={handleChange}
                    className={`p-2 border ${
                      errors.billingCity ? 'border-red-500' : 'border-gray-300'
                    } rounded`}
                  />
                  {errors.billingCity && (
                    <p className='text-red-500 text-sm'>{errors.billingCity}</p>
                  )}
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='flex flex-col gap-2'>
                    <label>State</label>
                    <select
                      name='billingAddress.state'
                      value={formData.billingAddress.state}
                      onChange={handleChange}
                      className={`p-2 border ${
                        errors.billingState
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded`}
                    >
                      <option value=''>Select State</option>
                      <option value='AL'>Alabama</option>
                      <option value='AK'>Alaska</option>
                      <option value='AZ'>Arizona</option>
                      <option value='AR'>Arkansas</option>
                      <option value='CA'>California</option>
                      <option value='CO'>Colorado</option>
                      <option value='CT'>Connecticut</option>
                      <option value='DE'>Delaware</option>
                      <option value='FL'>Florida</option>
                      <option value='GA'>Georgia</option>
                      <option value='HI'>Hawaii</option>
                      <option value='ID'>Idaho</option>
                      <option value='IL'>Illinois</option>
                      <option value='IN'>Indiana</option>
                      <option value='IA'>Iowa</option>
                      <option value='KS'>Kansas</option>
                      <option value='KY'>Kentucky</option>
                      <option value='LA'>Louisiana</option>
                      <option value='ME'>Maine</option>
                      <option value='MD'>Maryland</option>
                      <option value='MA'>Massachusetts</option>
                      <option value='MI'>Michigan</option>
                      <option value='MN'>Minnesota</option>
                      <option value='MS'>Mississippi</option>
                      <option value='MO'>Missouri</option>
                      <option value='MT'>Montana</option>
                      <option value='NE'>Nebraska</option>
                      <option value='NV'>Nevada</option>
                      <option value='NH'>New Hampshire</option>
                      <option value='NJ'>New Jersey</option>
                      <option value='NM'>New Mexico</option>
                      <option value='NY'>New York</option>
                      <option value='NC'>North Carolina</option>
                      <option value='ND'>North Dakota</option>
                      <option value='OH'>Ohio</option>
                      <option value='OK'>Oklahoma</option>
                      <option value='OR'>Oregon</option>
                      <option value='PA'>Pennsylvania</option>
                      <option value='RI'>Rhode Island</option>
                      <option value='SC'>South Carolina</option>
                      <option value='SD'>South Dakota</option>
                      <option value='TN'>Tennessee</option>
                      <option value='TX'>Texas</option>
                      <option value='UT'>Utah</option>
                      <option value='VT'>Vermont</option>
                      <option value='VA'>Virginia</option>
                      <option value='WA'>Washington</option>
                      <option value='WV'>West Virginia</option>
                      <option value='WI'>Wisconsin</option>
                      <option value='WY'>Wyoming</option>
                    </select>
                    {errors.billingState && (
                      <p className='text-red-500 text-sm'>
                        {errors.billingState}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Zip</label>
                    <input
                      type='text'
                      name='billingAddress.zip'
                      value={formData.billingAddress.zip}
                      onChange={handleChange}
                      className={`p-2 border ${
                        errors.billingZip ? 'border-red-500' : 'border-gray-300'
                      } rounded`}
                    />
                    {errors.billingZip && (
                      <p className='text-red-500 text-sm'>
                        {errors.billingZip}
                      </p>
                    )}
                  </div>
                </div>

                <div className='flex flex-col gap-2 w-full bg-gray-300 p-5'>
                  <label className='text-sm font-bold'>
                    Terms & Conditions
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      name='termsAccepted'
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className='mr-2'
                    />
                    I acknowledge and accept the
                    <a href='/policies' className='underline ml-1'>
                      Event Terms and Conditions.
                    </a>
                  </label>

                  {errors.termsAccepted && (
                    <p className='text-red-500 text-sm'>
                      {errors.termsAccepted}
                    </p>
                  )}
                </div>
              </div>
              <div className='flex flex-col gap-2 col-span-2 w-full bg-gray-200 p-5'>
                <h3 className='text-lg font-bold'>Payment Information</h3>
                <div className='flex flex-col gap-1 border-y border-gray-300 py-5'>
                  <h4 className='font-bold'>Registrant Info</h4>
                  <p>
                    Name: {formData.firstName} {formData.lastName}
                  </p>
                  <p>Email: {formData.email}</p>
                  <p>Company: {formData.companyName}</p>
                  <p>Title: {formData.jobTitle}</p>
                  <p>Phone: {formData.phone}</p>
                </div>

                {(formData.attendeeType === 'OEM' ||
                  formData.attendeeType === 'Tier1') && (
                  <div className='flex flex-col gap-2 py-6'>
                    <label className='text-sm font-bold'>Discount Code</label>
                    <input
                      type='text'
                      value={discountCode}
                      onChange={handleDiscountChange}
                      className='p-2 border border-gray-300 rounded'
                    />
                    <button
                      onClick={handleApplyDiscount}
                      className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600 mt-2'
                    >
                      Apply Discount
                    </button>
                    {discountCodeError && (
                      <p className='text-red-500 text-sm'>
                        {discountCodeError}
                      </p>
                    )}
                  </div>
                )}

                <div className='flex flex-col gap-1 pt-6 border-t border-gray-300'>
                  <h4 className='font-bold mb-2'>Order Summary</h4>
                  <div className='flex justify-between bg-gray-300 p-2 rounded text-sm'>
                    <span>Ticket Name</span>
                    <span>Quantity</span>
                    <span>Total</span>
                  </div>
                  {/* Example ticket item */}
                  <div className='flex justify-between px-2'>
                    <span>General Admission</span>
                    <span>1</span>
                    <span>${totalAmount}</span>
                  </div>
                  {/* Add more ticket items as needed */}
                </div>
                <div className='flex justify-between mt-4 font-bold bg-black text-white p-2 rounded'>
                  <span>Total</span>
                  <span>${totalAmount}</span>{' '}
                  {/* Update with actual total calculation */}
                </div>

                {formData.discountCode ? (
                  <div>
                    <button
                      onClick={handleFreeRegistration}
                      className='px-4 py-3 font-bold bg-blue-500 text-white rounded hover:bg-blue-600 mt-2 w-full disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      Pay ${totalAmount}
                    </button>
                  </div>
                ) : (
                  <div className='py-6 flex flex-col gap-2 col-span-2 w-full'>
                    {clientSecret ? (
                      <Elements
                        stripe={stripePromise}
                        options={{ clientSecret }}
                      >
                        <PaymentForm />
                      </Elements>
                    ) : (
                      <div>
                        <button
                          onClick={handlePaymentSubmit}
                          disabled={Object.keys(errors).some((key) =>
                            key.startsWith('billing')
                          )}
                          className='px-4 py-3 font-bold bg-blue-500 text-white rounded hover:bg-blue-600 mt-2 w-full disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                          Pay ${totalAmount}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className='w-full border border-gray-300 p-5'>
            <div className='flex gap-16 w-full px-10 py-16 items-center bg-ap-darkblue'>
              <div className='flex flex-col gap-5 '>
                <h3 className='text-3xl font-bold text-white'>
                  Thank you for completing your registration!
                </h3>
                <p className='text-white text-lg max-w-prose leading-snug'>
                  We're reviewing your information and will send you a
                  confirmation email soon once it's approved. Scan the QR code
                  to view your registration information and download a virtual
                  ticket once confirmed.
                </p>
              </div>
              <div className='flex flex-col gap-2 w-1/4 items-center'>
                <div
                  className='aspect-square bg-gray-300 ring-4 ring-ap-yellow w-36 shadow-lg cursor-pointer'
                  onClick={() => router.push(`/aps25/${formDataId}`)}
                >
                  <QRCodeSVG
                    value={`http://localhost:3000/aps25/${formDataId}`}
                    size={144}
                    bgColor='#ffffff'
                    fgColor='#000000'
                    level='Q'
                  />
                </div>
              </div>
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-16 p-5 border border-gray-300 rounded'>
              <div>
                <h4 className='text-lg font-bold'>Registrant Details:</h4>
                <ul className='list-none list-inside border-b border-gray-300 pb-5'>
                  <li>
                    <strong>Name:</strong> {formData.firstName}{' '}
                    {formData.lastName}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email}
                  </li>
                  <li>
                    <strong>Company:</strong> {formData.companyName}
                  </li>
                  <li>
                    <strong>Title:</strong> {formData.jobTitle}
                  </li>
                  <li>
                    <strong>Phone:</strong> {formData.phone}
                  </li>
                  <li>
                    <strong>Attendee Type:</strong> {formData.attendeeType}
                  </li>
                </ul>
                <h4 className='text-lg font-bold mt-4'>Billing Details:</h4>
                <ul className='list-none list-inside'>
                  <li>
                    <strong>Name:</strong> {formData.firstName}{' '}
                    {formData.lastName}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email}
                  </li>
                  <li>
                    <strong>Phone:</strong> {formData.phone}
                  </li>
                  <li>
                    <strong>Street:</strong> {formData.billingAddress.street}
                  </li>
                  <li>
                    <strong>City:</strong> {formData.billingAddress.city}
                  </li>
                  <li>
                    <strong>State:</strong> {formData.billingAddress.state}
                  </li>
                  <li>
                    <strong>Zip:</strong> {formData.billingAddress.zip}
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-lg font-bold'> Your Ticket Details:</h4>
                <div className='flex flex-wrap gap-1'>
                  <strong>Add Ons:</strong>
                  {addOnsSelected.map((addOn) => (
                    <div key={addOn.id}>{addOn.title}</div>
                  ))}
                </div>
                <div>
                  <strong>Networking Events:</strong>
                  {formData.speedNetworking ? ' Speed Networking' : ' None'}
                </div>
                <div className='flex flex-col gap-1 mt-4'>
                  <div className='flex justify-between bg-gray-300 p-2 rounded text-sm'>
                    <span>Ticket Name</span>
                    <span>Quantity</span>
                    <span>Total</span>
                  </div>
                  {/* Example ticket item */}
                  <div className='flex justify-between px-2'>
                    <span>General Admission</span>
                    <span>1</span>
                    <span>${totalAmount}</span>
                  </div>
                  {/* Add more ticket items as needed */}
                </div>
                <div className='flex justify-between mt-4 font-bold bg-black text-white p-2 rounded'>
                  <span>Paid</span>
                  <span>${totalAmount}</span>{' '}
                  {/* Update with actual total calculation */}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='max-w-6xl mx-auto py-10 flex flex-col gap-6'>
      <header>{renderProgress()}</header>
      {renderStep()}
      <div className='flex justify-center gap-6'>
        {step > 1 && step < 4 && (
          <button
            onClick={handlePrev}
            disabled={step === 4}
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Prev
          </button>
        )}
        {step < 3 && (
          <button
            onClick={handleNext}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Next
          </button>
        )}
      </div>

      {/* Add modal */}
      {showAddCompanyModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-full max-w-md'>
            <h3 className='text-lg font-bold mb-4'>Add New Company</h3>
            <form onSubmit={handleAddCompany} className='space-y-4'>
              <div>
                <label className='block text-sm font-bold mb-2'>
                  Company Name
                </label>
                <input
                  type='text'
                  value={newCompanyName}
                  onChange={(e) => setNewCompanyName(e.target.value)}
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Enter company name'
                />
              </div>

              <div>
                <label className='block text-sm font-bold mb-2'>
                  Company Email
                </label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={(e) =>
                    handleChange({
                      target: { name: 'email', value: e.target.value },
                    })
                  }
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Enter your email'
                />
              </div>

              {addCompanyError && (
                <p className='text-red-500 text-sm'>{addCompanyError}</p>
              )}

              <div className='flex justify-end gap-2 mt-4'>
                <button
                  type='button'
                  onClick={() => setShowAddCompanyModal(false)}
                  className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                  Add Company
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
