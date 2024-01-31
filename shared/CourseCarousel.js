import { motion } from 'framer-motion';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';
import { listLMSCourses } from '../src/graphql/queries';

const CARD_WIDTH = 220;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CourseCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const res = await API.graphql({
        query: listLMSCourses,
        variables: { filter: { partOf: { contains: 'APC' } } },
      }).then((res) => setCourses(res.data));
    };

    getCourses();
  }, []);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) <
    CARD_SIZE *
      (courses.listLMSCourses &&
        courses.listLMSCourses.items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section ref={ref}>
      <div className='relative overflow-hidden px-6 pt-4 pb-6 w-full'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex items-center justify-between'>
            <div className='text-black font-bold uppercase font-oswald text-xl md:text-2xl'>
              Automotive Packaging Courses
            </div>

            <div className='flex items-center gap-2'>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? '' : 'opacity-30'
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? '' : 'opacity-30'
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: 'easeInOut',
            }}
            className='flex mt-3 mb-1 w-full'
          >
            {courses.listLMSCourses &&
              courses.listLMSCourses.items &&
              courses.listLMSCourses.items.map((course) => {
                return (
                  <div
                    className='relative h-full aspect-[4/3] rounded-2xl border border-black shrink-0 bg-ap-yellow cursor-pointer transition-transform hover:-translate-y-1 bg-cover bg-center md:grayscale md:hover:grayscale-0 flex justify-end items-end'
                    style={{
                      width: CARD_WIDTH,
                      marginRight: MARGIN,
                      backgroundImage: `url(${course.seoImage})`,
                    }}
                    onClick={() => window.open(`${course.link}`)}
                  >
                    <div className='w-[90%] border-l border-t border-black bg-white px-3 py-2 font-bold rounded-br-2xl tracking-tight leading-none'>
                      {course.title}
                    </div>
                  </div>
                );
              })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }) => {
  return (
    <div
      className='relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1'
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className='mb-3 h-[200px] w-full rounded-lg object-cover'
        alt={`An image for a fake blog post titled ${title}`}
      />
    </div>
  );
};

export default CourseCarousel;

const posts = [
  {
    id: 1,
    imgUrl: '/imgs/blog/1.png',
    author: 'John Anderson',
    title: 'We built an AI chess bot with ChatGPT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 2,
    imgUrl: '/imgs/blog/2.png',
    author: 'Kyle Parsons',
    title: 'How to grow your personal brand as a web designer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 3,
    imgUrl: '/imgs/blog/3.png',
    author: 'Andrea Bates',
    title: 'Calm down, monoliths are totally fine',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 4,
    imgUrl: '/imgs/blog/4.png',
    author: 'Jess Drum',
    title: 'A quick guide to Framer Motion (for dummies)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 5,
    imgUrl: '/imgs/blog/5.png',
    author: 'Phil White',
    title: "You probably don't need kubernetes",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 6,
    imgUrl: '/imgs/blog/6.png',
    author: 'Karen Peabody',
    title: 'State of JavaScript in 2024',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
  {
    id: 7,
    imgUrl: '/imgs/blog/7.png',
    author: 'Dante Gordon',
    title: "What's new in Python?",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.',
  },
];
