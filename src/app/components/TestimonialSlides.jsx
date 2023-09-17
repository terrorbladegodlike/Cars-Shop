'use client'
import React from 'react'

// Import Swiper React Component
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import Required Modules
import { Pagination } from 'swiper/modules'

// Icons 
import { FaQuoteLeft } from 'react-icons/fa'

// Import Motion
import { motion } from 'framer-motion'

// Variants 
import { fadeIn } from '../../../variants'

// Next Image
import Image from 'next/image'

// Data
const testimonialsData = [
  {
    message: 'They truly exceeded my expectations and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: 'Jane Joe',
    job: 'Photographer & Videographer',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, cupiditate?',
    avatar: '/images/testimonial/avatar.png',
    name: 'Lana Del Ray',
    job: 'Backend Development',
  },
]

const TestimonialSlides = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className='container mx-auto'
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='h-[450px] xl:h-[400px]'
      >
        {testimonialsData.map((person, index) => {
          const { message, avatar, name, job } = person
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col justify-center items-center text-center'>
                <FaQuoteLeft className='text-7xl text-accent-default mb-6' />
                <div className='text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium'>
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt=''
                  className='mb-4'
                />
                <div className='text-lg font-medium'>
                  {name}
                </div>
                <div className='text-secondary'>
                  {job}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  )
}

export default TestimonialSlides