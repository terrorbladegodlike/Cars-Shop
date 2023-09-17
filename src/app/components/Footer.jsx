'use client'
import React from 'react'

// Next Image
import Image from 'next/image'

// Icons
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

// Components
import Copyright from './Copyright'

// Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from '../../../variants'

// Link / React Scroll
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='pt-20 bg-white z-20' id='contact'>
      <div className="container mx-auto mb-24">
        {/* Grid */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
        >
          <div className='flex flex-col flex-1 gap-y-8'>
            {/* Logo */}
            <Link
              to={'home'}
              smooth={true}
              spy={true}
              className='cursor-pointer'
            >
              <Image
                src={'/icons/logo.svg'}
                width={200}
                height={200}
              />
            </Link>
            {/* Text */}
            <div className='text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, similique.
            </div>
            {/* Phone */}
            <div className='flex flex-col gap-y-4 font-semibold'>
              <div className='flex items-center gap-x-[10px]'>
                <FaPhone />
                <div className='font-medium'>(193)237-5916</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <FaEnvelope />
                <div className='font-medium'>ternovetchii.2002@mail.ru</div>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <h3 className='h3 font-bold mb-8'>
                Company
              </h3>
              <ul className='flex flex-col gap-y-4 font-semibold'>
                <li><a href="">New York</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Mobile</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">How we work</a></li>
              </ul>
            </div>
          </div>
          {/* Program */}
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>Working Hours</h3>
            <div className='flex flex-col gap-y-4'>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>
                  Mon-Fri:
                </div>
                <div className='font-semibold'>
                  09:00 AM - 09:00PM
                </div>
              </div>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>
                  Sat:
                </div>
                <div className='font-semibold'>
                  09:00 AM - 07:00PM
                </div>
              </div>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>
                  Sun:
                </div>
                <div className='font-semibold'>
                  Closed
                </div>
              </div>
            </div>
          </div>
          {/* NewsLetter */}
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>NewsLetter</h3>
            <div className='mb-9 text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <form className='flex gap-x-2 h-14'>
              <input
                className='outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent-default'
                type="text"
                placeholder='Your email'
              />
              <button
                className='btn btn-sm btn-accent w-24'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer