'use client'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'

function hero() {
  return (
    <Box className="flex flex-col items-center justify-center w-full">
        <Box className="flex flex-row items-center justify-center gap-10 w-full" zIndex={1}>
        <Box className='flex flex-col justify-center'>
            <Typography variant="h1" className="text-6xl text-white font-bold text-left">
                The Society of <br /> <span className="text-6xl text-indigo-700">Cyber Security</span> 
            </Typography>
            <Typography className='text-slate-100 font-thin font-sans text-xl py-4 tracking-wide'>
                @American University of Sharjah
            </Typography>
            <Box className="flex flex-col gap-5 w-fit py-10">
                <Button variant='contained' className='bg-indigo-700 hover:bg-white hover:text-indigo-700'>
                    <Typography>Become a Member</Typography>
                </Button>
                <Button variant='outlined' className='text border-white hover:border-indigo-700'>
                    <Typography className='text-white'>Upcoming Events</Typography>
                </Button>
            </Box>
        </Box>
        <Box>
            <Image src='/SocLogo.svg' width={500} height={500}>
            </Image>
        </Box>
        </Box>
        {/* <Box className="w-full static" marginY={"-50"} zIndex={0}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" height={"30%"} className='w-full absolute bottom-0'>
            <polygon fill="white" points="0,100 100,0 100,100"/>
          </svg>
        </Box> */}
    </Box>
  )
}

export default hero