'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Box, AppBar, Button, Toolbar, Tooltip, IconButton, Typography, MenuIcon, Container, Avatar, MenuItem } from '@mui/material'
import AdbIcon from '@mui/icons-material/adb'
import Menu from '@mui/icons-material/Menu'
import App from 'next/app'

function navbar() {
    return (
        <AppBar position="static"   className='bg-transparent flex justify-center flex-row gap-12 place-content-evenly py-8'>
            <a href='#'><Typography className='font-bold'>Upcoming Events</Typography></a>
            <a href='#'><Typography className='font-bold'>Previous Events</Typography></a>
            <a href='#'><Typography className='font-bold'>FAQ</Typography></a>
            <a href='#'><Typography className='font-bold'>Members</Typography></a>
        </AppBar>
    );
}

export default navbar