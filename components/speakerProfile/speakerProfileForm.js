import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import UploadImage from '../../util/UploadImage';
import axios from 'axios';

const SpeakerProfileForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const [profileUrl, setProfileUrl] = useState(null);

  const onSubmit = async (fields) => {
    let { data } = await axios.post('/api/dynamo/create-speaker', {
      fields,
    });

    console.log('create data:', data);
  };

  return (
    <div className='max-w-4xl mx-auto pt-16'>
      <form
        className='space-y-8 divide-y divide-gray-200'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='space-y-8 divide-y divide-gray-200'>
          <div>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Personal Information
              </h3>
              <p className='mt-1 text-sm text-gray-500'>* indicates required</p>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='firstName'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>First Name*</div>
                  <div className='text-sm text-red-700'>
                    {errors.firstName && <span>This field is required</span>}
                  </div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('firstName', { required: true })}
                    type='text'
                    name='firstName'
                    id='firstName'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-ap-darkblue sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='lastName'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Last Name*</div>
                  <div className='text-sm text-red-700'>
                    {errors.lastName && <span>This field is required</span>}
                  </div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('lastName', { required: true })}
                    type='text'
                    name='lastName'
                    id='lastName'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-ap-darkblue sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='email'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Email*</div>
                  <div className='text-sm text-red-700'>
                    {errors.email && <span>This field is required</span>}
                  </div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('email', { required: true })}
                    type='text'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='Company'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Company*</div>
                  <div className='text-sm text-red-700'>
                    {errors.Company && <span>This field is required</span>}
                  </div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('company', { required: true })}
                    type='text'
                    placeholder='Enter name as it should appear in printed material'
                    name='company'
                    id='company'
                    autoComplete='company'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='title'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Your Title*</div>
                  <div className='text-sm text-red-700'>
                    {errors.title && <span>This field is required</span>}
                  </div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('title', { required: true })}
                    type='text'
                    name='title'
                    id='title'
                    autoComplete='title'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='phone'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Phone</div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('phone')}
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='phone'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-6'>
                <label
                  htmlFor='linkedin'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Linkedin Profile</div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('linkedin')}
                    type='text'
                    name='linkedin'
                    id='linkedin'
                    autoComplete='linkedin'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-6'>
                <label
                  htmlFor='bio'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>
                    Short Biography (Any needed changes will be discussed and
                    agreed upon with the speaker)*
                  </div>
                  <div className='text-sm text-red-700'>
                    {errors.bio && <span>This field is required</span>}
                  </div>
                </label>
                <div className='mt-1'>
                  <textarea
                    {...register('bio', { required: true })}
                    rows={3}
                    name='bio'
                    id='bio'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-6'>
                <label
                  htmlFor='presentationTitle'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Presentation / Discussion Title</div>
                </label>
                <div className='mt-1'>
                  <input
                    {...register('presentationTitle')}
                    type='text'
                    name='presentationTitle'
                    id='presentationTitle'
                    autoComplete='presentationTitle'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-6'>
                <label
                  htmlFor='presentationSummary'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>Presentation Summary</div>
                </label>
                <div className='mt-1'>
                  <textarea
                    {...register('presentationSummary')}
                    rows={3}
                    name='presentationSummary'
                    id='presentationSummary'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-6'>
                <label
                  htmlFor='headshot'
                  className='block text-sm font-medium text-gray-700'
                >
                  Profile photo*
                </label>
                <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 text-gray-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='inline-flex items-center justify-center text-sm text-gray-600 mx-auto'>
                      <label htmlFor='profile' className=''>
                        <UploadImage
                          setUrl={(url) => {
                            setValue('headshot', url);
                          }}
                        />
                        {profileUrl && profileUrl}
                      </label>
                      <input
                        {...register('headshot', { required: true })}
                        id='headshot'
                        name='headshot'
                        type='text'
                        value={profileUrl}
                        className='sr-only'
                      />
                    </div>
                    <div className='text-sm text-red-700'>
                      {errors.headshot && <span>This field is required</span>}
                    </div>
                    <p className='text-xs text-gray-500 pt-2'>
                      PNG, JPG, WEBP up to 2MB
                    </p>
                  </div>
                </div>
              </div>
              <div className='sm:col-span-6'>
                <label
                  htmlFor='mediaConsent'
                  className='flex justify-between items-center text-sm font-medium text-gray-700'
                >
                  <div>
                    Are you interested in making yourself available for media
                    interviews leading up to, during, or after the conference?*
                  </div>
                </label>
                <div className='mt-1 flex flex-col gap-2'>
                  <select
                    id='mediaConsent'
                    {...register('mediaConsent', { required: true })}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-ap-blue focus:ring-indigo-500 sm:text-sm'
                  >
                    <option defaultValue={null} value=''>
                      Please Select Answer
                    </option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    <option value='other'>Need More Information</option>
                  </select>

                  <div className='text-sm text-red-700'>
                    {errors.mediaConsent && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-5 px-8 bg-ap-blue/20 rounded-lg'>
          <div className='flex-col md:flex justify-end gap-6'>
            <div className='relative flex items-start mb-3 sm:mb-5'>
              <div className='flex h-6 items-center'>
                <Controller
                  name='privacyConsent'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type='checkbox'
                      id='privacyConsent'
                      name='privacyConsent'
                      className='h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                  )}
                />
              </div>
              <div className='ml-3 text-sm'>
                <p className='text-slate-700'>
                  * I understand that the information submitted will be placed
                  on the AutoPack Summit website. This information can be
                  modified at any time by contacting the AutoPack Summit team.
                </p>
              </div>
            </div>
            <button
              type='submit'
              className='flex justify-center w-full rounded-md border border-transparent bg-ap-blue py-2 px-4 font-medium text-white shadow-sm hover:bg-ap-darkblue focus:outline-none focus:ring-2 focus:ring-ap-darkblue focus:ring-offset-2'
            >
              <div className='block w-max'>Create Profile</div>
            </button>
          </div>
          <div className='text-sm text-red-700 mt-2'>
            {errors.consent && (
              <span>*Please check consent box before proceeding.</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SpeakerProfileForm;
