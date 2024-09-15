'use client'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'

function Hero() {
  return (
    <Box className="flex flex-col items-center justify-center w-full px-4">
      {/* Container for text and image, responsive for larger and smaller screens */}
      <Box className="flex flex-col md:flex-row items-center justify-center gap-10 w-full" zIndex={1}>
        
        {/* Text Section */}
        <Box className='flex flex-col justify-center text-center md:text-left'>
          <Typography variant="h1" className="text-4xl md:text-6xl text-white font-bold">
            The Society of <br /> 
            <span className="text-4xl md:text-6xl text-indigo-700">Cyber Security</span>
          </Typography>
          <Typography className='text-slate-100 font-thin font-sans text-lg md:text-xl py-4 tracking-wide'>
            @American University of Sharjah
          </Typography>

          {/* Buttons Section */}
          <Box className="flex flex-col md:flex-row gap-5 w-full py-10">
            <Button variant='contained' className='bg-indigo-700 hover:bg-white hover:text-indigo-700'>
              <Typography>Become a Member</Typography>
            </Button>
            <Button variant='outlined' className='text border-white hover:border-indigo-700'>
              <Typography className='text-white'>Upcoming Events</Typography>
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box className="w-72 md:w-96">
          <Image src='/SocLogo.svg' width={500} height={500} className="object-contain" />
        </Box>

      </Box>
    </Box>
  )
}

export default Hero;
