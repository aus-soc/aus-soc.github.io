'use client'
import React from 'react'
import { AppBar, Typography } from '@mui/material'

function navbar() {
    return (
        <AppBar position="static" className='bg-transparent flex justify-center flex-row gap-12 place-content-evenly py-8'>
            <a href='#events'><Typography className='font-bold'>Upcoming Events</Typography></a>
            <a href='#events'><Typography className='font-bold'>Previous Events</Typography></a>
            <a href='#'><Typography className='font-bold'>FAQ</Typography></a>
            <a href='#'><Typography className='font-bold'>Members</Typography></a>
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
        </AppBar>
    );
}

export default navbar