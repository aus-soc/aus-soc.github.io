import React from 'react'
import { Box, Typography } from '@mui/material'  
import Image from 'next/image' 

function about() {
  return (
    <Box width={"100vw"} className="flex flex-col justify-center items-center mb-20">
        <Typography variant="h1" className='text-6xl text-white font-bold'>About <span className='text-lime-300'>The Soc Team</span> </Typography>
        <Box className='w-full px-52 flex flex-row justify-center items-center gap-20'>
            <Box className='mb-10 w-5/12'>
                <p className='text-slate-300 justify-center text-left py-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Box>
            <Box className='py-10 w-5/12'>
                <Image src={'/socpic.png'} width={1440} height={810} className='rounded-lg flex items-center '></Image>
            </Box>
        </Box>
    </Box>
  )
}

export default about