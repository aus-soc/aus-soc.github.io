import React from 'react'
import NavbarInner from '@/components/navbar2'
import { Box, Typography, AvatarGroup, Avatar, Button } from '@mui/material'
import Image from 'next/image'

function lifeaftercs() {
  return (
    <Box width="100vw" height="100vh" gap={5} className="bg-white overflow-x-hidden">
      <NavbarInner />
      <Box className="w-full h-72 relative">
        <Image src={'lifeafterCS.svg'} fill className="object-cover object-center" alt='life after cs'/>
      </Box>

      <Box className="flex flex-col lg:flex-row justify-center items-center gap-10 my-10 px-5">
        <Box className="lg:w-1/3 w-full">
          <Typography variant="h3" className="font-bold font-sans text-black pt-5 text-center lg:text-left">Life After Computer Science</Typography>
          <Typography className="pb-5 pt-5 text-center text-slate-800 lg:text-left">
            <b>📅 &nbsp;Date :</b> 1st May 2024, Wednesday <br />
            <b>⌛ &nbsp;Time :</b> 5:00 - 6:00 pm <br />
            <b>📍 &nbsp;Location :</b> ESB 1026
          </Typography>

          <Typography variant="h6" className="text-left text-black">
            Thana is a cybersecurity professional based in the UAE, she will talk about:
            <ul className="list-disc list-inside pt-3">
              <li>What is it like after graduation as a Computer Science/Engineering student?</li>
              <li>How to find your pathway in a tech role?</li>
              <li>Navigating the job market, resume building, rejections, and standing out to employers.</li>
              <li>Cybersecurity, CTFs, resources and what makes this field unique</li>
              <li>Amongst many other relevant career topics.</li>
            </ul>
            This talk will be useful to you if you are looking to study cybersecurity or approaching graduation and want fresh insights on the tech/cybersec job market.
          </Typography>
        </Box>

        <Box className="lg:w-1/3 w-full">
          <Image src={'lifeafterCS.svg'} height={400} width={400} layout="responsive" alt='life after cs' />
        </Box>
      </Box>

      <Box className="flex flex-col sm:flex-row justify-center items-center gap-8 my-10">
        <Button variant="contained" className="w-40 h-12 bg-black hover:bg-lime-200 hover:text-black">Register Now</Button>
        <Button variant="contained" className="w-40 h-12 bg-lime-200 text-black hover:bg-black hover:text-white">Mark the Date</Button>
      </Box>

      <Box className="flex flex-col justify-center items-center my-10">
        <Typography variant="h3" className="font-bold font-sans text-center">Speakers</Typography>
        <Box className="flex flex-row justify-center gap-5 pt-5">
          <div className="skeleton h-32 w-32"></div>
          <div className="skeleton h-32 w-32"></div>
          <div className="skeleton h-32 w-32"></div>
        </Box>
      </Box>

      <Box className="flex flex-col justify-center items-center my-10">
        <Typography variant="h4" className="font-bold font-sans text-center">Joined Participants</Typography>
        <AvatarGroup max={4} className="pt-3">
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

export default lifeaftercs
