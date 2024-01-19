import { useState } from 'react';
import { PlayIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

import Logo from './Logo';
import VideoPlayer from './VideoPlayer';

const ScrollingTestimonials = ({ testimonials }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectedVid, setIsSelectedVid] = useState('');

  return (
    <div className='bg-white pt-24 pb-6 relative'>
      {isOpen && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-md z-[50] flex items-center justify-center'>
          <div className='w-full max-h-[100vh] max-w-2xl lg:max-w-7xl bg-ap-blue rounded-2xl pt-3  lg:px-6 pb-6 flex flex-col'>
            <div className='flex justify-between w-full h-full items-center pb-3 lg:pb-6 lg:pt-3 px-3'>
              <div className='lg:w-48 w-36'>
                <Logo show={true} />
              </div>
              <div
                className='bg-ap-yellow rounded-xl lg:text-lg md:px-3 md:py-2 cursor-pointer text-white font-bold flex items-center gap-1'
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <ArrowLeftCircleIcon className='md:w-5 md:h-5 w-7 h-7 fill-white' />
                </div>
                <div className='hidden md:block'>Back</div>
              </div>
            </div>
            <div className='w-full h-auto aspect-video bg-ap-blue'>
              <VideoPlayer videoEmbedLink={isSelectedVid} />
            </div>
          </div>
        </div>
      )}
      <div className='mb-12 px-4'>
        <h2 className='mx-4 mb-4 text-center text-lg font-oswald uppercase font-medium text-neutral-900 md:text-4xl'>
          Streamling Solutions
        </h2>
        <p className='text-center mt-2 text-lg max-w-2xl mx-auto'>
          Listen to what your peers have to say on the value of Automotive
          Packaging Summit for your organization, now, and in the years to come.
        </p>
      </div>
      <div className='p-4 overflow-x-hidden relative'>
        <div className='absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent' />

        <div className='flex items-center mb-4'>
          <TestimonialList
            list={testimonials}
            duration={125}
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={testimonials}
            duration={125}
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={testimonials}
            duration={125}
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
        </div>
        <div className='flex items-center mb-4'>
          <TestimonialList
            list={testimonials}
            duration={75}
            reverse
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={testimonials}
            duration={75}
            reverse
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
          <TestimonialList
            list={testimonials}
            duration={75}
            reverse
            fn={() => setIsOpen(true)}
            setSelected={(val) => setIsSelectedVid(val)}
          />
        </div>
        {/* <div className='flex items-center'>
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
        </div> */}

        <div className='absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent' />
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
  fn,
  setSelected,
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className='flex gap-4 px-2'
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className='shrink-0 w-[500px] hover:bg-amber-100 flex flex-col rounded-lg overflow-hidden group items-start relative ring-4 ring-black'
          >
            <div className='flex gap-3 px-4 w-full'>
              <div
                className='aspect-[1/1] rounded-full bg-indigo-400 w-20 mx-auto mt-4 bg-cover bg-center border-4 border-black'
                style={{ backgroundImage: `url(${t.headshot})` }}
              ></div>
              <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col justify-center h-full'>
                  <span className='block font-semibold text-lg mb-1'>
                    {t.author}
                  </span>
                  <span className='block text-sm font-medium'>
                    {t.title}, {t.company}
                  </span>
                </div>
                <div
                  className='w-10 h-10 transition-all ease-in rounded-full bg-amber-300 group-hover:bg-neutral-900 flex items-center justify-center cursor-pointer'
                  onClick={() => {
                    setSelected(t.video);
                    fn();
                  }}
                >
                  <div>
                    <PlayIcon className='w-6 h-6 fill-white group-hover:fill-ap-yellow' />
                  </div>
                </div>
              </div>
            </div>
            {/* <img src={t.img} className='w-full h-44 object-cover' /> */}
            <div className='px-4 pt-4 pb-9'>
              <span className='block leading-snug'>{t.content}</span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

// const testimonials = {
//   top: [
//     {
//       id: 1,
//       img: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80',
//       name: 'Jen S.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!',
//     },
//     {
//       id: 2,
//       img: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
//       name: 'Paul A,',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.',
//     },
//     {
//       id: 3,
//       img: 'https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Cindy J.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.',
//     },
//     {
//       id: 4,
//       img: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
//       name: 'Danica W.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.',
//     },
//     {
//       id: 5,
//       img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Peter H.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.',
//     },
//     {
//       id: 6,
//       img: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//       name: 'Lanny B.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!',
//     },
//   ],
//   middle: [
//     {
//       id: 1,
//       img: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Alex F.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.',
//     },
//     {
//       id: 2,
//       img: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Claude O.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.',
//     },
//     {
//       id: 3,
//       img: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
//       name: 'Max Q.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.',
//     },
//     {
//       id: 4,
//       img: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
//       name: 'Jeff R.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!',
//     },
//     {
//       id: 5,
//       img: 'https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
//       name: 'Kevin K.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit!',
//     },
//     {
//       id: 6,
//       img: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//       name: 'Andrea B.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!',
//     },
//   ],
//   bottom: [
//     {
//       id: 1,
//       img: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Danny G.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
//     },
//     {
//       id: 2,
//       img: 'https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
//       name: 'Ian D.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.',
//     },
//     {
//       id: 3,
//       img: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80',
//       name: 'Ben S.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 4,
//       img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Matthew I.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!',
//     },
//     {
//       id: 5,
//       img: 'https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       name: 'Garrett P.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.',
//     },
//     {
//       id: 6,
//       img: 'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
//       name: 'Xavier C.',
//       title: 'Founder of XYZ',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.',
//     },
//   ],
// };

export default ScrollingTestimonials;
