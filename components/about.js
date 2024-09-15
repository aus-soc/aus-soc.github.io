import React from 'react'
import { Box, Typography } from '@mui/material'  
import Image from 'next/image' 

function about() {
  return (
    <Box width={"100vw"} className="flex flex-col justify-center items-center mb-20">
        <Typography variant="h1" className='text-6xl text-white font-bold'>About <span className='text-lime-300'>the SOC Team</span> </Typography>
        <Box className='w-screen flex flex-col justify-center items-center lg:flex-row lg:w-10/12 lg:gap-10 lg:py-10'>
            <Box className='mb-7 w-screen '>
                <p className='text-slate-300 justify-center text-center py-10 px-5 lg:text-left'>
                The Society of Cybersecurity at the American University of Sharjah (AUS) is a student-led organization that aims to promote awareness, education, and hands-on experience in the field of cybersecurity. It brings together students from various disciplines, particularly those interested in the security of information systems, networks, and data. The society offers opportunities for its members to learn about the latest trends in cybersecurity, participate in workshops, and engage in competitions like Capture the Flag (CTF).
                </p>
            </Box>
            <Box className='w-fit lg:w-6/12'>
                <Image src={'/socpic.png'} alt='soc team' width={1440} height={810} layout='responsive' className='rounded-lg flex items-center '></Image>
            </Box>
        </Box>
    </Box>
  )
}

export default about