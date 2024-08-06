'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Box, AppBar, Button, Toolbar, Tooltip, IconButton, Typography, MenuIcon, Container, Avatar, MenuItem } from '@mui/material'
import AdbIcon from '@mui/icons-material/adb'
import Menu from '@mui/icons-material/Menu'
import App from 'next/app'
import Image from 'next/image'

function hero() {
  return (
    <Box className="flex flex-row items-center gap-10">
        <Box className='flex flex-col justify-center'>
            <Typography variant="h1" className="text-6xl text-white font-bold text-left">
                The Society of <br /> <span className="text-6xl text-indigo-700">Cyber Security</span> 
            </Typography>
            <Typography className='text-slate-100 font-thin font-sans text-xl py-4 tracking-wide'>
                @American University of Sharjah
            </Typography>
            <Box className="flex flex-col gap-5 w-fit py-10">
                <Button variant='contained' className='bg-indigo-700 '>
                    <Typography>Become a Member</Typography>
                </Button>
                <Button variant='outlined' className='text border-white'>
                    <Typography className='text-white'>Upcoming Events</Typography>
                </Button>
            </Box>
        </Box>
        <Box>
            <Image src='/SocLogo.svg' width={500} height={500}>
            

            </Image>
        </Box>
    </Box>
  )
}

export default hero