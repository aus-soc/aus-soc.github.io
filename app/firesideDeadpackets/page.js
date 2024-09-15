'use client'
import React from 'react'
import NavbarInner from '@/components/navbar2'
import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem, ImageListItemBar, IconButton, Icon } from '@mui/material'
import { InfoIcon } from '@mui/icons-material'
import Image from 'next/image'

function firesideDeadpackets() {
  return (
    <Box width="100vw" height="100vh" gap={5} className="bg-white overflow-x-hidden">
        <NavbarInner/>
        {/* <Box className="w-screen h-72 relative"><Image src={'firesideDeadpackets.svg'} fill className='object-cover object-center'></Image></Box> */}
        <Box className="flex flex-row justify-center items-center gap-x-10 my-10">
            <Box>
                <Typography variant="h3" className='font-bold font-sans pt-5'>Life After Computer Science</Typography>
                <Typography className=' pb-5'>
                    <b>Date :</b> 12th October 2021 <br/>
                    <b>Location :</b> Online
                </Typography>

                <Typography variant="h6" className='w-96'>
                Get valuable insights on cybersecurity, career, self-study, getting hired and much more with AUS alumnus and cybersecurity professional Youssef Awad (DeadPackets)!
                <br /><br />
                What’s in it for you? <br />
                → <b>Story:</b> Hear Youssef’s journey from CS student to becoming a cybersecurity professional! <br />
                → <b>Industry:</b> Get professional insights on cybersecurity including UAE market, specializations and salaries.<br />
                → <b>Ask:</b> QA time with our guest so you can ask him anything you → *Community:* Become part of the SOC, AUS’ first cybersecurity community.<br />
                <br />
                Youssef Awad (DeadPackets) is an AUS alumnus and a professional penetration tester at a leading cybersecurity firm based in the UAE.
                <br /><br />
                Throughout his years at AUS, Youssef hosted many hacking and security workshops for students. He is also the author of popular AUS tools (including Banner+, CRNotify, AUSCrawl) and co-founder of CTF platform ctf.ae

                </Typography>
            </Box>
            <Box>
                {/* <Image src={'firesideDeadpackets.svg'} height={400} width={400} layout='responsive' alt='Deadpackets fireside'></Image> */}
            </Box>
        </Box>
        <Box className='flex flex-col justify-center items-center gap-x-10 my-10'>
            <Typography variant='h3' className='text-left font-bold font-sans'>Speakers</Typography>
        </Box>
        <Box className='flex flex-col justify-center items-center gap-x-10 my-10'>
            <Typography variant='h4' className='text-left font-bold font-sans'>Joined Participants</Typography>
            <AvatarGroup max={4}>
                <Avatar alt="Adham" />
                <Avatar alt="Hassan" />
                <Avatar alt="Omar" />
                <Avatar alt="Ahmad" />
                <Avatar alt="Someone1" />
                <Avatar alt="Someone2" />
            </AvatarGroup>
        </Box>
    </Box>
  )
}

export default firesideDeadpackets