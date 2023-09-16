'use client'
import React, { useContext } from 'react'

// Next Image
import Image from 'next/image'

// Components
import Search from './Search'

// Search Context
import { SearchContext } from '../context/search'

const Hero = () => {
  const { searchActive } = useContext(SearchContext)
  return (
    <section className='h-screen xl:h-[90vh] bg-[#b2b7c2]/10' id='home'>
      <div className="container mx-auto h-full xl:pt-10">
        {/* Text & Img Wrapper */}
        <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
          {/* Text */}
          <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'>
            <h1 className='h1'>
              Explore the Finest
              <span className='text-accent-default'> Global </span>
              Offers
            </h1>
            <p className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
              Find your ideal ride for any adventure with our diverse range of affordable and dependable car rentals.
            </p>
            {/* BTN */}
            <div className='flex gap-x-3 justify-center xl:justify-start'>
              {/* Button AppStore */}
              <button className='btn-cta'>
                <Image
                  width={132}
                  height={36}
                  alt=''
                  src={'/icons/buttons/app-store.svg'}
                />
              </button>
              {/* Button Google */}
              <button className='btn-cta'>
                <Image
                  width={132}
                  height={36}
                  alt=''
                  src={'/icons/buttons/google-play.svg'}
                />
              </button>
            </div>
          </div>
          {/* Image Car */}
          <div className='relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:right-[100px] min-[1680px]:right-[120px] xl:top-48'>
            <Image
              src={'/images/hero/car.svg'}
              fill
              style={{ objectFit: 'contain' }}
              priority
              alt=''
            />
          </div>
        </div>
      </div>
      {searchActive ? (
        <div className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
          <Search />
        </div>
      ) : (
        <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
          <Search />
        </div>
      )}
    </section>
  )
}

export default Hero