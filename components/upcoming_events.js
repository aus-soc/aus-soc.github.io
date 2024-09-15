'use client'
import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Tabs, Tab } from '@mui/material'
import Image from 'next/image'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Upcoming_events() {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width={"100vw"} id='events' className="bg-white flex flex-col justify-center items-center my-20 py-10">
        
        <Typography variant='h1' className='text-6xl font-bold text-indigo-700'>Events</Typography>
            <Box className="w-full flex justify-center items-center text-left py-10">
                <Tabs value={value} onChange={handleChange} className='flex justify-center'>
                    <Tab label='Upcoming Events' {...a11yProps(0)} variant='h1' className='text-base text-indigo-700 font-bold text-center'></Tab>
                    <Tab label='Past Events' {...a11yProps(1)} variant='h1' className='text-base text-indigo-700 font-bold text-center'></Tab>
                </Tabs>
            </Box>
        <CustomTabPanel value={value} index={0} className="flex justify-center">
            <Box className="flex justify-center items-center w-svw flex-col">
                <div className="carousel carousel-center bg-gradient-radial from-slate-200 to-white rounded-box w-11/12 lg:w-6/12 space-x-4 p-3 scroll-smooth ">
                    <div id='item1' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image
                            src="/clubfairFall24.svg"
                            height={500}
                            width={500}
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">Fun Tech</div>
                                <div className="badge badge-outline">Explore SOC</div>
                            </div>
                            <h2 className="card-title">Club Fair F'24</h2>
                            <p>Visit the SOC Booth during Club Fair and dive deep into the world of cybersecurity!</p>
                            <div className="card-actions justify-between py-3">
                            <a href='./clubfairFall24'><button className="btn btn-primary">Learn More!</button></a>
                            <button className="btn border-indigo-700 bg-white hover:border-indigo-700 hover:bg-white">Register</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Box>
        </CustomTabPanel>

        {/* // Past Events */}
        <CustomTabPanel value={value} index={1}>
        <Box className="flex justify-center items-center w-svw flex-col">
                <div className="carousel carousel-center bg-white rounded-box w-11/12 lg:w-6/12 space-x-4 p-3 scroll-smooth">
                    <div id='item1' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/linux12sept24.jpg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">Linux</div>
                                <div className="badge badge-outline">Beginners</div>
                            </div>
                            <h2 className="card-title">The most important skill in IT and Cybersecurity: Linux</h2>
                            <p>Join us to learn Linux with a hands-on approach. Completely Beginner-friendly!</p>
                            <div className="card-actions justify-between py-3">
                            <a href='./lifeaftercs'><button className="btn btn-primary">Learn More!</button></a>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item2' className="card carousel-item glass w-96 scroll-smooth">
                    <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/lifeafterCS.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">Student Life</div>
                                <div className="badge badge-outline">Tech</div>
                            </div>
                            <h2 className="card-title">Life After CS</h2>
                            <p>Thana AlShammari, UAE Cybersecurity specialist speaks about how a CS student can get into the field of cybersecurity</p>
                            <div className="card-actions justify-between py-3">
                            <a href='./lifeaftercs'><button className="btn btn-primary">Learn More!</button></a>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item3' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/cyberweekly.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">CTFs</div>
                                <div className="badge badge-outline">Hack The Box</div>
                                <div className="badge badge-outline">Beginners</div>
                            </div>
                            <h2 className="card-title">Cyber Weekly</h2>
                            <p>Learn free Hands-on Cybersecurity Skills Every weekly Sunday. Practice CTFs and Hack the Box.</p>
                            <div className="card-actions justify-between py-3">
                            <a href='./lifeaftercs'><button className="btn btn-primary">Learn More!</button></a>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item4' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/ramadanNightsCTFae.jpg"
                            className='object-cover'
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">CTFs</div>
                                <div className="badge badge-outline">Linux</div>
                                <div className="badge badge-outline">Beginners | Intermediate</div>
                            </div>
                            <h2 className="card-title">Ramadan Nights: Hacking Linux</h2>
                            <p>Exciting Prizes Alert! Let's explore Linux in a new set of *beginner-friendly, hands-on* challenges...</p>
                            <div className="card-actions justify-between py-3">
                            <a href='./lifeaftercs'><button className="btn btn-primary">Learn More!</button></a>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item5' className="card carousel-item glass w-96 scroll-smooth">
                        <figure>
                            <Image height={500} width={500}
                            src="/ramadanNightswebsiteshack.jpg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">CTFs</div>
                                <div className="badge badge-outline">Linux</div>
                                <div className="badge badge-outline">Beginners | Intermediate</div>
                            </div>
                            <h2 className="card-title">Ramadan Nights: Hacking Linux</h2>
                            <p>Exciting Prizes Alert! Let's explore Linux in a new set of *beginner-friendly, hands-on* challenges...</p>
                            <div className="card-actions justify-between py-3">
                            <a href='./lifeaftercs'><button className="btn btn-primary">Learn More!</button></a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </Box>
        </CustomTabPanel>
    </Box>
  )
}

export default Upcoming_events