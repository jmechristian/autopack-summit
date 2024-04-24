import React, { useState, useMemo } from 'react';
import BrutalistButton from '../../../shared/BrutalistButton';
import { sendBosch, sendGuardian, sendMorrisette } from '../../../util/api';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { createBoschForm } from '../../../src/graphql/mutations';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [problemOneChecked, setProblemOneChecked] = useState(false);
  const [problemTwoChecked, setProblemTwoChecked] = useState(false);
  const [problemThreeChecked, setProblemThreeChecked] = useState(false);
  const [problemFourChecked, setProblemFourChecked] = useState(false);

  const handleOneChange = () => {
    setProblemOneChecked(!problemOneChecked);
  };
  const handleTwoChange = () => {
    setProblemTwoChecked(!problemTwoChecked);
  };
  const handleThreeChange = () => {
    setProblemThreeChecked(!problemThreeChecked);
  };
  const handleFourChange = () => {
    setProblemFourChecked(!problemFourChecked);
  };

  const formValid = useMemo(() => {
    if (
      name &&
      email &&
      title &&
      company &&
      (problemOneChecked ||
        problemTwoChecked ||
        problemThreeChecked ||
        problemFourChecked)
    ) {
      return true;
    } else return false;
  }, [
    name,
    email,
    company,
    title,
    problemOneChecked,
    problemTwoChecked,
    problemThreeChecked,
    problemFourChecked,
  ]);

  const clickHandler = async () => {
    formValid && setIsSending(true);
    const uid = await API.graphql({
      query: createBoschForm,
      variables: {
        input: {
          company: company,
          email: email,
          name: name,
          title: title,
          topicOne: problemOneChecked,
          topicTwo: problemTwoChecked,
          topicThree: problemThreeChecked,
          topicFour: problemFourChecked,
          approved: false,
        },
      },
    });
    await sendBosch({
      name,
      email,
      company,
      title,
      topicOne: problemOneChecked,
      topicTwo: problemTwoChecked,
      topicThree: problemThreeChecked,
      topicFour: problemFourChecked,
      id: uid.data.createBoschForm.id,
    });
    setIsSending(false);
    router.push('/tours/thank-you');
  };

  const speakers = [
    //   {
    //     name: 'Ben Hesskamp',
    //     title: 'Owner, Guardian Container Consulting',
    //   },
    //   {
    //     name: 'Lucas Hesskamp',
    //     title: 'Vice President, Guardian Container Consulting',
    //   },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 xl:px-0'>
      <div className='flex flex-col gap-10 py-10 relative w-full divide-y-2 divide-black'>
        {/* HEADER */}
        <div className='flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='font-medium font-oswald text-3xl md:text-4xl lg:text-5xl uppercase max-w-3xl'>
              Bosch Rexroth Packaging Innovation Workshop
            </div>
            <div className='text-lg font-bold text-ap-darkblue'>
              Tuesday, October 22nd 2:30 PM - 3:30 PM
            </div>
          </div>
          <div className='max-w-[200px] lg:max-w-[250px] w-full'>
            <Image
              src={'https://packschool.s3.amazonaws.com/bosch-rexroth-logo.png'}
              alt='Bosch Rexrox logo'
              width={1144}
              height={457}
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 pt-10'>
          <div className='flex flex-col gap-5 max-w-5xl'>
            <div className='flex flex-col gap-5'>
              <p>
                Bosch is inviting you to participate in this interactive
                workshop with the goal to brainstorm new and innovative ideas to
                improve an on hand packaging problem. Limited space available,
                please indicate your interest upon registration.
              </p>
              {speakers.length > 0 && (
                <div className='flex items-start gap-5 mt-2 p-5 bg-amber-400 w-full'>
                  <div className='font-medium uppercase text-sm lg:mr-5 text-white'>
                    Featuring
                  </div>
                  {speakers.map((sp) => (
                    <div className='leading-tight flex flex-col gap-1 w-40'>
                      <div className='font-bold'>{sp.name}</div>
                      <div className='text-xs leading-tight'>{sp.title}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-10 pt-10'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Name</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Email</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Company</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type='text'
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Title</div>
              <div className='text-red-600'>*Required</div>
            </div>
            <input
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='w-full'
            />
          </div>

          {/* OPTIONS */}
          <div className='my-6 w-full col-span-2 flex flex-col gap-10'>
            <div className=' text-slate-900 w-full flex justify-between'>
              <div className='flex flex-col gap-1'>
                <div className='font-medium'>
                  Please choose which topics you are most interested in.
                </div>
                <div className='text-sm text-neutral-600'>
                  You must select 1, but can select all that interest you.
                </div>
              </div>
              <div className='text-red-600 text-xs font-medium uppercase'>
                *Required
              </div>
            </div>
            {/* CHECKBOXES */}
            <div className='flex flex-col gap-5'>
              <div className='w-full bg-indigo-100 p-6 flex gap-5 border-2 border-black'>
                <div>
                  <input
                    className='border border-black shadow-[2px_2px_0_black]'
                    type='checkbox'
                    checked={problemOneChecked}
                    onChange={handleOneChange}
                  />
                </div>
                <div className='flex flex-col gap-3 max-w-4xl'>
                  <div className='font-bold leading-tight'>
                    Green field location start-ups or product transfers with new
                    users of packaging materials or packing processes give rise
                    to standardization risks.
                  </div>
                  <div className='text-sm'>
                    During development of new locations, requirements may be
                    different from the original location, where the processes
                    might not be fully documented. There may be new workers who
                    don’t know the end product, packaging materials, or packing
                    process, and who may not have the same data tools. It may be
                    necessary to provide internal specifications and create new
                    physical packing stations and internal material supply
                    processes. Other pain points may include providing start-up
                    materials in parallel to developing packaging materials with
                    local vendor base. New processes, new documentation, and new
                    training may be necessary. To what degree the processes and
                    materials must remain exactly the same as the original
                    location must be considered.
                  </div>
                </div>
              </div>
              <div className='w-full bg-indigo-100 p-6 flex gap-5 border-2 border-black'>
                <div>
                  <input
                    type='checkbox'
                    className='border border-black shadow-[2px_2px_0_black]'
                    checked={problemTwoChecked}
                    onChange={handleTwoChange}
                  />
                </div>
                <div className='flex flex-col gap-3 max-w-4xl'>
                  <div className='font-bold leading-tight'>
                    Packaging Engineers must develop a specification, often
                    relying on expertise of service providers, without
                    themselves being familiar with differing materials or
                    potential design solutions.
                  </div>
                  <div className='text-sm'>
                    Packaging is a closed community that depends heavily on the
                    personal experience and network of the designer, working in
                    a very isolated and iterative process. Packaging Engineers
                    may work on designs and prototyping with service providers,
                    who are themselves limited in what they can offer based on
                    own materials focus or on their own technical capabilities
                    for simulations, modeling, and testing. How do you as the
                    Packaging Engineer know the right materials and right design
                    based on your own limited realm of experience? How do you
                    network to gain missing competence, how do you know what you
                    don’t know, and how do you even know what are the right
                    questions to ask?
                  </div>
                </div>
              </div>
              <div className='w-full bg-indigo-100 p-6 flex gap-5 border-2 border-black'>
                <div>
                  <input
                    className='border border-black shadow-[2px_2px_0_black]'
                    type='checkbox'
                    checked={problemThreeChecked}
                    onChange={handleThreeChange}
                  />
                </div>
                <div className='flex flex-col gap-3 max-w-4xl'>
                  <div className='font-bold leading-tight'>
                    Returnable Container management without live asset tracking
                    makes inventory control at multiple locations both
                    inaccurate and costly.
                  </div>
                  <div className='text-sm'>
                    Asset tracking solutions exist but are expensive. Tracking
                    requires administration, and the data is only as accurate as
                    the willingness of partners to scan, unless you do live
                    tags. Poor asset tracking creates inventory issues when
                    locations pull from a common pool of returnable containers,
                    or when internal processes compete for the same containers
                    used by vendors or service providers. Availability and
                    correct sizing of the loop becomes even more complex when
                    factoring in damaged containers and recycle programs, and
                    may necessitate coordination of backup materials when
                    returnable containers are not available. How do you
                    inventory if you don’t use live asset tracking?
                  </div>
                </div>
              </div>
              <div className='w-full bg-indigo-100 p-6 flex gap-5 border-2 border-black'>
                <div>
                  <input
                    type='checkbox'
                    className='border border-black shadow-[2px_2px_0_black]'
                    checked={problemFourChecked}
                    onChange={handleFourChange}
                  />
                </div>
                <div className='flex flex-col gap-3 max-w-4xl'>
                  <div className='font-bold leading-tight'>
                    Change of packaging specifications or requirements after
                    business award or program launch incurs unplanned packaging
                    material and labor costs.
                  </div>
                  <div className='text-sm'>
                    Validation of packaging specifications at vendors may not be
                    included in the APQP and PPAP process. Once the program has
                    started, there will be cost agreement discussions for any
                    change of packaging. In a changing world where ultimate
                    flexibility is the desired state, packaging has to adapt to
                    order quantity, minimum runs, lineside presentation,
                    ergonomics, dimensional pack requirements for storage and
                    handling, repacking scenarios, barcode and label readability
                    requirements, and a host of conditions that may not have
                    been known or agreed during the launch phase. How do we
                    change, how frequently do we change, and how do we update in
                    the system? In multi-location scenarios, agreements may have
                    been made with an international location in Europe or Asia
                    that simply don’t work for a NAFTA location in terms of
                    pallet dimensions, packaging materials, or mixed containers
                    that ultimately result in costly repacking activities.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className='flex justify-end w-full pt-10 border-t-2 border-black col-span-2'>
            <div className='w-fit'>
              <BrutalistButton
                bgColor={'bg-ap-darkblue'}
                textColor={'text-white'}
                text={isSending ? 'Sending...' : 'Submit'}
                fn={clickHandler}
                disabled={!formValid}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
