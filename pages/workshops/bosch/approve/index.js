import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { updateBoschForm } from '../../../../src/graphql/mutations';
import { sendBoschWelcome } from '../../../../util/api';

const Page = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isStatus, setIsStatus] = useState({
    error: false,
    message: 'Approving and Sending Confirmation.',
  });
  const router = useRouter();

  useEffect(() => {
    const approveUser = async () => {
      setIsUpdating(true);

      try {
        const status = await API.graphql({
          query: updateBoschForm,
          variables: { input: { id: router.query.id, approved: true } },
        });

        if (status.data.updateBoschForm.id) {
          const topics = {
            topicOne: status.data.updateBoschForm.topicOne,
            topicTwo: status.data.updateBoschForm.topicTwo,
            topicThree: status.data.updateBoschForm.topicThree,
            topicFour: status.data.updateBoschForm.topicFour,
          };
          await sendBoschWelcome(router.query.email, topics);
          setIsStatus({ error: false, message: 'Success!' });
        }
      } catch (error) {
        setIsStatus({ error: true, message: 'Error! Error!' });
      }

      setIsUpdating(false);
    };

    router.query.id && approveUser();
  }, [router]);

  return (
    <div className='w-full max-w-xl px-5 xl:px-0 pt-10 pb-20 mx-auto'>
      <div className='rounded-2xl border-2 border-black shadow-[6px_8px_0_black] bg-white'>
        <div className='aspect-[4/3] w-full flex flex-col gap-5 justify-center items-center px-5'>
          <div
            className={`font-medium text-center font-oswald text-5xl lg:text-6xl uppercase ${
              isUpdating ? 'animate-pulse' : 'animate-none'
            }`}
          >
            {isStatus.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
