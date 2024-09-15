import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

function footer() {
    return (
        <Box className="bg-black w-full text-white py-10 px-5 lg:px-20">
            {/* Footer Logo and Description */}
            <Box className="flex flex-col lg:flex-col justify-between items-center gap-8 lg:gap-0">
                <Box className="flex items-center gap-4">
                    {/* Replace 'logo.png' with the actual logo */}
                    <Image src="/SocLogo.svg" alt="SOC Logo" width={80} height={80} className="object-contain" />
                    <Typography variant="h6" className="text-lime-300 font-bold">Society of Cybersecurity <span className='text-white'>@AUS</span></Typography>
                </Box>

                {/* Footer Links */}
                <Box className="flex justify-center flex-col lg:flex-row items-center gap-5 lg:gap-12">
                    <a href="#events" className="text-white hover:text-lime-200 transition">Upcoming Events</a>
                    <a href="#events" className="text-white hover:text-lime-200 transition">Previous Events</a>
                    <a href="#faq" className="text-white hover:text-lime-200 transition">FAQ</a>
                    <a href="#members" className="text-white hover:text-lime-200 transition">Members</a>
                </Box>
            </Box>

            {/* Social Media Links */}
            <Box className="flex justify-center lg:justify-center gap-8 pt-20 lg:mt-0">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-200 transition">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-200 transition">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-200 transition">
                    <FaWhatsapp size={24} />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-200 transition">
                    <FaYoutube size={24} />
                </a>
            </Box>

            {/* Copyright */}
            <Box className="mt-8 text-center">
                <Typography variant="body2" className="text-slate-400">
                    © {new Date().getFullYear()} SOC | All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default footer;
