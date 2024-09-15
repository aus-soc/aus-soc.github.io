'use client'
import React, { useState } from 'react'
import { AppBar, Typography } from '@mui/material'
import Image from 'next/image'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AppBar position="static" className="bg-transparent">
            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-center flex-row gap-12 place-content-evenly py-8">
                <a href='#events'><Typography className='font-bold text-white'>Upcoming Events</Typography></a>
                <a href='#events'><Typography className='font-bold text-white'>Previous Events</Typography></a>
                <a href='#'><Typography className='font-bold text-white'>FAQ</Typography></a>
                <a href='#'><Typography className='font-bold text-white'>Members</Typography></a>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            </div>

            {/* Burger Menu for Smaller Screens */}
            <div className="lg:hidden flex justify-between items-center px-4 py-4">
                <Image src={'SocLogo.svg'} height={30} width={30} />
                <button className="text-white" onClick={toggleMenu}>
                    <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-transparent">
                    <a href='#events'><Typography className='font-bold text-white'>Upcoming Events</Typography></a>
                    <a href='#events'><Typography className='font-bold text-white'>Previous Events</Typography></a>
                    <a href='#'><Typography className='font-bold text-white'>FAQ</Typography></a>
                    <a href='#'><Typography className='font-bold text-white'>Members</Typography></a>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                </div>
            )}
        </AppBar>
    );
}

export default Navbar;
