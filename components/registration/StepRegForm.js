import { useForm } from 'react-hook-form';

const StepRegForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Step 1 of 3: Personal Info
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Please fill out all fields to continue.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form>
              <div className='shadow sm:overflow-hidden sm:rounded-md'>
                <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-3 gap-6'>
                    <div className='col-span-3 sm:col-span-3'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-gray-700 flex justify-between'
                      >
                        <div>Full Name</div>
                        <div className='text-xs'>*Required</div>
                      </label>
                      <div className='mt-1 flex rounded-md shadow-sm'>
                        <input
                          {...register('name', { required: true })}
                          type='text'
                          name='name'
                          id='name'
                          className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        {errors.name?.type === 'required' && (
                          <p
                            role='alert'
                            className=' text-sm text-red-600 mt-1'
                          >
                            Name is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='col-span-3 sm:col-span-3'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium text-gray-700 flex justify-between'
                      >
                        <div>Email</div>
                        <div className='text-xs'>*Required</div>
                      </label>
                      <div className='mt-1 flex rounded-md shadow-sm'>
                        <input
                          {...register('email', { required: true })}
                          type='email'
                          name='email'
                          id='email'
                          className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        {errors.email?.type === 'required' && (
                          <p
                            role='alert'
                            className=' text-sm text-red-600 mt-1'
                          >
                            Email is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='col-span-3 sm:col-span-3'>
                      <label
                        htmlFor='company'
                        className='text-sm font-medium text-gray-700 flex justify-between'
                      >
                        <div>Company</div>
                        <div className='text-xs'>*Required</div>
                      </label>
                      <div className='mt-1 flex rounded-md shadow-sm'>
                        <input
                          {...register('company', { required: true })}
                          type='text'
                          name='company'
                          id='company'
                          className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        {errors.company?.type === 'required' && (
                          <p
                            role='alert'
                            className=' text-sm text-red-600 mt-1'
                          >
                            Company Name is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='col-span-3 sm:col-span-3'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-gray-700 flex justify-between'
                      >
                        <div>Title</div>
                        <div className='text-xs'>*Required</div>
                      </label>
                      <div className='mt-1 flex rounded-md shadow-sm'>
                        <input
                          {...register('title', { required: true })}
                          type='text'
                          name='title'
                          id='title'
                          className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        {errors.title?.type === 'required' && (
                          <p
                            role='alert'
                            className=' text-sm text-red-600 mt-1'
                          >
                            Title is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='col-span-3 sm:col-span-3'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-gray-700 flex justify-between'
                      >
                        <div>Phone</div>
                        <div className='text-xs'>*Required</div>
                      </label>
                      <div className='mt-1 flex rounded-md shadow-sm'>
                        <input
                          {...register('phone', { required: true })}
                          type='tel'
                          name='phone'
                          id='phone'
                          className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        {errors.phone?.type === 'required' && (
                          <p
                            role='alert'
                            className=' text-sm text-red-600 mt-1'
                          >
                            Phone is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Step 2 of 3: Registration Code
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Please enter and <strong>click VALIDATE CODE</strong> to
                validate your code. Don't have a code? No problem,{' '}
                <strong>click GET CODE</strong> to request one.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-6'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-gray-700 flex justify-between'
                      >
                        <div>Registration Code</div>
                        <div className='text-xs'>*Required</div>
                      </label>
                      <input
                        {...register('code', { required: true })}
                        type='text'
                        name='code'
                        id='code'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <div className='flex gap-2 justify-end'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Validate Code
                    </button>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Validate Code
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Steap 3 of 3: Complete Registration
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Once you have entered your personal information and have a valid
                code, <strong>click REGISTER</strong> to finish registration.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form action='#' method='POST'>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                  <fieldset>
                    <legend className='sr-only'>By Email</legend>
                    <div
                      className='text-base font-medium text-gray-900'
                      aria-hidden='true'
                    >
                      By Email
                    </div>
                    <div className='mt-4 space-y-4'>
                      <div className='flex items-start'>
                        <div className='flex h-5 items-center'>
                          <input
                            id='comments'
                            name='comments'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        </div>
                        <div className='ml-3 text-sm'>
                          <label
                            htmlFor='comments'
                            className='font-medium text-gray-700'
                          >
                            Comments
                          </label>
                          <p className='text-gray-500'>
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start'>
                        <div className='flex h-5 items-center'>
                          <input
                            id='candidates'
                            name='candidates'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        </div>
                        <div className='ml-3 text-sm'>
                          <label
                            htmlFor='candidates'
                            className='font-medium text-gray-700'
                          >
                            Candidates
                          </label>
                          <p className='text-gray-500'>
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start'>
                        <div className='flex h-5 items-center'>
                          <input
                            id='offers'
                            name='offers'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        </div>
                        <div className='ml-3 text-sm'>
                          <label
                            htmlFor='offers'
                            className='font-medium text-gray-700'
                          >
                            Offers
                          </label>
                          <p className='text-gray-500'>
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className='contents text-base font-medium text-gray-900'>
                      Push Notifications
                    </legend>
                    <p className='text-sm text-gray-500'>
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className='mt-4 space-y-4'>
                      <div className='flex items-center'>
                        <input
                          id='push-everything'
                          name='push-notifications'
                          type='radio'
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='push-everything'
                          className='ml-3 block text-sm font-medium text-gray-700'
                        >
                          Everything
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='push-email'
                          name='push-notifications'
                          type='radio'
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='push-email'
                          className='ml-3 block text-sm font-medium text-gray-700'
                        >
                          Same as email
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='push-nothing'
                          name='push-notifications'
                          type='radio'
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='push-nothing'
                          className='ml-3 block text-sm font-medium text-gray-700'
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepRegForm;
