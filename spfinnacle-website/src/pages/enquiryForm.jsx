import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import emailjs from '@emailjs/browser';
import Navbar from '../components/navbar';

const EnquiryForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qlg3roy',
        'template_4eaqnun',
        form.current,
        'rdd5jVCHkgsR0vRu3'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const para = `Let's discuss on 
  something cool together`;

  return (
    <div style={{ backgroundColor: colors.primaryColor }}>
      <Navbar />
      <section className='container mx-auto  gap-4 p-4 md:flex  lg:py-14 '>
        <div className='  text-center  md:w-1/2 md:text-left'>
          {/* <Link to="/" className="flex justify-center md:block">
            <img
              src={logo}
              className=" h-24 w-24  lg:h-28 lg:w-28  "
              alt="logo"
            />
          </Link> */}

          <p className='font-mono text-lg text-white lg:py-5 lg:text-4xl'>
            {para}
          </p>
          <div className='lg:mt-[520px]'>
            <Link>
              <FontAwesomeIcon
                className='h-6 w-6 p-4 text-white lg:h-10 lg:w-10 '
                icon={faInstagram}
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                className='h-6 w-6 p-4 text-white lg:h-10 lg:w-10 '
                icon={faWhatsapp}
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                className='h-6 w-6 p-4 text-white lg:h-10 lg:w-10 '
                icon={faFacebook}
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                className='h-6 w-6 p-4 text-white lg:h-10 lg:w-10 '
                icon={faYoutube}
              />
            </Link>
            <Link>
              <FontAwesomeIcon
                className='h-6 w-6 p-4 text-white lg:h-10 lg:w-10 '
                icon={faXTwitter}
              />
            </Link>
          </div>
        </div>
        <div className='  flex flex-col  rounded-3xl  bg-white p-10  md:w-1/2'>
          <form action='' ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col'>
              <label
                htmlFor='name'
                className='mb-1 text-lg font-semibold text-[#2B75BC] md:text-xl  '
              >
                Your Name
              </label>
              <input
                type='text'
                name='user_name'
                id='name'
                className='mb-2 w-11/12 rounded border-b border-gray-400 bg-transparent p-2 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] lg:w-8/12 lg:text-xl'
                placeholder=' Full Name'
                required
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label
                htmlFor='num'
                className='mb-1 text-lg  font-semibold text-[#2B75BC] md:text-xl'
              >
                Mobile Number
              </label>
              <input
                type='tel'
                name='user_number'
                id='num'
                className='mb-2 w-11/12 rounded border-b border-gray-400 bg-transparent p-2 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] lg:w-8/12 lg:text-xl'
                placeholder='10 Digit Number'
                required
                minLength={10}
                maxLength={10}
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label
                htmlFor='mail'
                className='mb-1 text-lg font-semibold  text-[#2B75BC] md:text-xl'
              >
                Email Id
              </label>
              <input
                type='email'
                name='user_email'
                id='mail'
                className='mb-2 w-11/12 rounded border-b border-gray-400 bg-transparent p-2 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] lg:w-8/12 lg:text-xl'
                placeholder='Email Id'
                required
              />
            </div>

            <div className='mb-3 flex flex-col'>
              <label
                htmlFor='pin'
                className='mb-1 text-lg font-semibold  text-[#2B75BC] md:text-xl'
              >
                Pin Code
              </label>
              <input
                type='text'
                name='user_pincode'
                id='pin'
                className=' mb-2 w-11/12  rounded border-b border-gray-400 bg-transparent p-2 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] lg:w-8/12 lg:text-xl'
                placeholder=' Pincode'
                maxLength={6}
                required
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label
                htmlFor='user-loan-type'
                className='mb-1 text-lg font-semibold  text-[#2B75BC] md:text-xl'
              >
                Enquiry Type
              </label>
              <select
                name='loan-type'
                id='user-loan-type'
                className='mb-2 w-11/12 rounded border-b border-gray-400 bg-transparent p-2 text-lg outline-none focus:border-none focus:text-black focus:ring-2  focus:ring-[#EF2670] lg:w-8/12 lg:text-xl'
              >
                <option value=' Select Loan type' selected required>
                  Select Loan type
                </option>
                <option value='personal-loan'>Personal Loan</option>
                <option value='housing-loan'>Housing Loan</option>
                <option value='loan-against-property'>
                  Loan against Property
                </option>
              </select>
            </div>
            <div className='mb-3 flex flex-col'>
              <label
                htmlFor='address'
                className='mb-2 text-lg font-semibold  text-[#2B75BC] md:text-xl'
              >
                Your Address :
              </label>
              <textarea
                name='user_address'
                id='address'
                cols='20'
                rows='5'
                className=' mb-3 w-11/12 rounded-lg border border-gray-400 bg-transparent p-2 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] lg:w-8/12 lg:text-xl'
                placeholder='Contact Address'
                required
              ></textarea>
            </div>
            <div>
              <button
                // style={{ backgroundColor: colors.logoBlue }}
                type='submit'
                className=' overflow-hidden rounded-full border border-[#2B75BC] px-4 py-2 text-lg   text-[#2B75BC] transition-all  duration-500 hover:border-white hover:bg-[#EF2670]  hover:text-white hover:ring-[#EF2670] md:px-7 md:py-3 md:text-xl'
              >
                Request to Contact
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EnquiryForm;
