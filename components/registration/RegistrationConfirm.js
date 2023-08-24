export default function RegistrationConfirm({ status, headline, message }) {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-base font-semibold leading-7 text-ap-darkblue'>
            {status}
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {headline}
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>{message}</p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <img
            src='https://apsmedia.s3.amazonaws.com/images/greenville.webp'
            alt='Greenville'
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
            width={1451}
            height={937}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
          </div>
        </div>
      </div>
    </div>
  );
}
