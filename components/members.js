import React from 'react'
import { Box, Typography } from '@mui/material'
import BubbleChart from '@/components/bubblechart'

function Members() {
  return (
    <Box width={"100vw"} className="bg-white flex flex-col gap-10 justify-center items-center py-10">
        <Typography variant='h1' className='font-bold text-6xl text-gray-900'>Members</Typography>
        <BubbleChart/> 
    </Box>
  )
}

export default Members