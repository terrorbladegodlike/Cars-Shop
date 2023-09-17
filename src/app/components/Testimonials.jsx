'use client'
import React from 'react'

// Components
import TestimonialSlides from './TestimonialSlides'


const Testimonials = () => {
  return (
    <section className='section flex items-center' id='testimonials'>
      <div className="container mx-auto">
        <TestimonialSlides />
      </div>
    </section>
  )
}

export default Testimonials