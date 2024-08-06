import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import { Box} from '@mui/material'

function main() {
  return (
    <Box width="100vw" height="100vh" 
    gap={2} className="flex flex-col justify-start items-center bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
    </Box>
  )
}

export default main