import React from 'react'
import Navbar from '@/components/navbar'
import { Box, AppBar } from '@mui/material'

function main() {
  return (
    <Box width="100vw" height="100vh" 
    display="flex"
    flexDirection={"column"}
    justifyContent="space-between"
    alignItems="start"
    gap={2} className="bg-black">
      <Navbar />
    </Box>
  )
}

export default main