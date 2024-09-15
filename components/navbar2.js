'use client'
import React, { useState } from 'react'
import { AppBar, Typography } from '@mui/material'
import Image from 'next/image'

function NavbarInner() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AppBar position="static" className='bg-black'>
            {/* Navbar for larger screens */}
            <div className="hidden lg:flex justify-center flex-row gap-12 place-content-evenly py-8">
                <a href='/'><Typography className='font-bold text-white'>Home</Typography></a>
                <a href='#events'><Typography className='font-bold text-white'>Previous Events</Typography></a>
                <a href='#'><Typography className='font-bold text-white'>Event FAQ</Typography></a>
                <a href='#'><Typography className='font-bold text-white'>Speakers</Typography></a>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            </div>

            {/* Burger menu for smaller screens */}
            <div className="lg:hidden flex justify-between items-center px-4 py-4">
                <Image src={'SocLogo.svg'} height={30} width={30} />
                <button className="text-white" onClick={toggleMenu}>
                    <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Dropdown menu for mobile when toggled */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-black">
                    <a href='/'><Typography className='font-bold text-white'>Home</Typography></a>
                    <a href='#events'><Typography className='font-bold text-white'>Previous Events</Typography></a>
                    <a href='#'><Typography className='font-bold text-white'>Event FAQ</Typography></a>
                    <a href='#'><Typography className='font-bold text-white'>Speakers</Typography></a>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                </div>
            )}
        </AppBar>
    );
}

export default NavbarInner;
