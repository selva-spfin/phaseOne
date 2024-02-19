import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from 'react-icons/ri';
import { FaAnglesRight } from 'react-icons/fa6';
import { contents } from '../constants/blog.js';

const Blog = () => {
  return (
    <div className=''>
      <Navbar />
      <h1>Latest Events</h1>
      <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {contents.map((content) => (
          <div className=' w-auto gap-4 rounded-lg p-6 shadow-lg'>
            <img
              src={content.image}
              alt='stock-market'
              className='rounded-md'
            />

            <div className='border-b-2 p-3'>
              <p className='my-3 text-sm'>{content.date}</p>
              <h1 className='text-md font-semibold'>{content.title}</h1>
              <p className='text-justify indent-5'>{content.description}</p>
            </div>
            <div className='flex items-end justify-between gap-3 p-3'>
              <div className='flex'>
                <RiFacebookBoxFill />
                <RiInstagramFill />
                <RiLinkedinBoxFill />
              </div>
              <div className='flex items-center gap-2'>
                <Link
                  to=''
                  className=" relative before:absolute before:top-5 before:h-[2px] before:w-full before:bg-slate-800 before:content-['']"
                >
                  Readmore
                </Link>
                <FaAnglesRight className='cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
