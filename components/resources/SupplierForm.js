import React from 'react';
import { useForm } from 'react-hook-form';

const SupplierForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className='px-6 mx-auto max-w-6xl mb-12'>
      <form
        className='space-y-8 divide-y divide-gray-200'
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className='space-y-8 divide-y divide-gray-200'>
          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Company Information
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Please use your main office address.
              </p>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Company Name
                </label>
                <div className='mt-1'>
                  <input
                    {...register('companyName')}
                    type='text'
                    name='companyName'
                    id='companyName'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Company Website
                </label>
                <div className='mt-1'>
                  <input
                    {...register('website')}
                    type='text'
                    name='website'
                    id='website'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='address1'
                  className='block text-sm font-medium text-gray-700'
                >
                  Address Line 1
                </label>
                <div className='mt-1'>
                  <input
                    {...register('address1')}
                    id='address1'
                    name='address1'
                    type='text'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='address2'
                  className='block text-sm font-medium text-gray-700'
                >
                  Address Line 2
                </label>
                <div className='mt-1'>
                  <input
                    {...register('address2')}
                    id='address2'
                    name='address2'
                    type='text'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country
                </label>
                <div className='mt-1'>
                  <input
                    {...register('country-add')}
                    id='country-add'
                    name='country-add'
                    type='text'
                    autoComplete='country-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  City
                </label>
                <div className='mt-1'>
                  <input
                    {...register('city')}
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='region'
                  className='block text-sm font-medium text-gray-700'
                >
                  State / Province
                </label>
                <div className='mt-1'>
                  <input
                    {...register('region')}
                    type='text'
                    name='region'
                    id='region'
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal-code'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-1'>
                  <input
                    {...register('postal-code')}
                    type='text'
                    name='postal-code'
                    id='postal-code'
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Add an Additional Facility
              </h3>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='address1'
                  className='block text-sm font-medium text-gray-700'
                >
                  Address Line 1
                </label>
                <div className='mt-1'>
                  <input
                    {...register('address1-add')}
                    id='address1-add'
                    name='address1-add'
                    type='text'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='address2'
                  className='block text-sm font-medium text-gray-700'
                >
                  Address Line 2
                </label>
                <div className='mt-1'>
                  <input
                    {...register('address2-add')}
                    id='address2-add'
                    name='address2-add'
                    type='text'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country
                </label>
                <div className='mt-1'>
                  <input
                    {...register('country-add')}
                    id='country-add'
                    name='country-add'
                    type='text'
                    autoComplete='country-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  City
                </label>
                <div className='mt-1'>
                  <input
                    {...register('city-add')}
                    type='text'
                    name='city-add'
                    id='city-add'
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='region'
                  className='block text-sm font-medium text-gray-700'
                >
                  State / Province
                </label>
                <div className='mt-1'>
                  <input
                    {...register('region-add')}
                    type='text'
                    name='region-add'
                    id='region-add'
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal-code'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-1'>
                  <input
                    {...register('postal-code-add')}
                    type='text'
                    name='postal-code-add'
                    id='postal-code-add'
                    autoComplete='postal-code-add'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Personal Information
              </h3>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    {...register('firstName')}
                    id='firstName'
                    name='firstName'
                    type='text'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    {...register('lastName')}
                    id='lastName'
                    name='lastName'
                    type='text'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    {...register('email')}
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'
                >
                  Phone
                </label>
                <div className='mt-1'>
                  <input
                    {...register('phone')}
                    type='tel'
                    name='phone'
                    id='phone'
                    autoComplete='phone'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Industry Information
              </h3>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='col-span-6'>
                <label
                  htmlFor='Industry'
                  className='block text-sm font-medium text-gray-700'
                >
                  Industry
                </label>
                <select
                  {...register('industry')}
                  id='industry'
                  name='industry'
                  className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                >
                  <option>-Select-</option>
                  <option>Corrugated/ Boxes</option>
                  <option>Plastic Containers and Returnables (RPCs)</option>
                  <option>Wood Pallets and Crates</option>
                  <option>Protective Packaging and Dunnage</option>
                  <option>Metal and Racking</option>
                  <option>3PL (Logistics, Transportation)</option>
                  <option>Services (Consulting, Design)</option>
                  <option>Distributors and Service Providers</option>
                  <option>Labels and Tape</option>
                  <option>Casters</option>
                  <option>Other</option>
                </select>
              </div>
              <div className='col-span-6'>
                <div className='mt-1'>
                  <textarea
                    {...register('industry-other')}
                    id='industry-other'
                    name='industry-other'
                    placeholder='If other, please describe...'
                    rows={4}
                    defaultValue={''}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='col-span-6'>
                <div className='mt-1'>
                  <textarea
                    {...register('industry-products')}
                    id='industry-products'
                    name='industry-products'
                    placeholder='If other, please describe...'
                    rows={4}
                    defaultValue={''}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div className='col-span-6'>
                <div className='mt-1'>
                  <textarea
                    {...register('industry-questions')}
                    id='industry-questions'
                    name='industry-questions'
                    placeholder='Any questions?'
                    rows={4}
                    defaultValue={''}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;
