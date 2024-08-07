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

function upcoming_events() {
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
                <div className="carousel carousel-center bg-gradient-radial from-slate-200 to-white rounded-box w-6/12 space-x-4 p-3 scroll-smooth ">
                    <div id='item1' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image
                            src="/lifeafterCS.svg"
                            height={500}
                            width={500}
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">Student Life</div>
                                <div className="badge badge-outline">Tech</div>
                            </div>
                            <h2 className="card-title">Event Name</h2>
                            <p>Description of this event</p>
                            <div className="card-actions justify-between py-3">
                            <button className="btn btn-primary">Learn More!</button>
                            <button className="btn border-indigo-700 bg-white hover:border-indigo-700 hover:bg-white">Register</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item2' className="card carousel-item glass w-96 scroll-smooth">
                    <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/cyberweekly.svg"
                            alt="syberweekly" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                                <div className="badge badge-outline">CTFs</div>
                                <div className="badge badge-outline">Hack the Box</div>
                                <div className="badge badge-outline">Beginner</div>
                            </div>
                            <h2 className="card-title">Event Name</h2>
                            <p>Description of this event</p>
                            <div className="card-actions justify-between py-3">
                            <button className="btn btn-primary">Learn More!</button>
                            <button className="btn border-indigo-700 bg-white hover:border-indigo-700 hover:bg-white">Register</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item3' className="card carousel-item glass w-96 scroll-smooth">
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
                            <h2 className="card-title">Event Name</h2>
                            <p>Description of this event</p>
                            <div className="card-actions justify-between py-3">
                            <button className="btn btn-primary">Learn More!</button>
                            <button className="btn border-indigo-700 bg-white hover:border-indigo-700 hover:bg-white">Register</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item4' className="card carousel-item glass w-96 scroll-smooth">
                    <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/cyberweekly.svg"
                            alt="syberweekly" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 ">
                            <div className="badge badge-outline">CTFs</div>
                                <div className="badge badge-outline">Hack the Box</div>
                                <div className="badge badge-outline">Beginner</div>
                            </div>
                            <h2 className="card-title">Event Name</h2>
                            <p>Description of this event</p>
                            <div className="card-actions justify-between py-3">
                            <button className="btn btn-primary">Learn More!</button>
                            <button className="btn border-indigo-700 bg-white hover:border-indigo-700 hover:bg-white">Register</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2  scroll-smooth">
                <a href="#item1" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item2" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item3" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item4" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                </div>
            </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <Box className="flex justify-center items-center w-svw flex-col">
                <div className="carousel carousel-center bg-white rounded-box w-6/12 space-x-4 p-3 scroll-smooth">
                    <div id='item1' className="card carousel-item glass w-96 scroll-smooth">
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
                            <h2 className="card-title">Event Name</h2>
                            <p>Description of this event</p>
                            <div className="card-actions justify-between py-3">
                            <button className="btn btn-primary">Learn More!</button>
                            <button className="btn border-indigo-700 bg-white hover:border-indigo-700 hover:bg-white">Register</button>
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
                            <div className="card-actions justify-start py-2 px-5">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item3' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/lifeafterCS.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 px-5">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item4' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/lifeafterCS.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 px-5">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item5' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/lifeafterCS.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 px-5">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item6' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/lifeafterCS.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 px-5">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div>
                            
                        </div>
                    </div>
                    <div id='item7' className="card carousel-item glass w-96 scroll-smooth">
                        <figure className='h-96'>
                            <Image height={500} width={500}
                            src="/lifeafterCS.svg"
                            alt="SOC Event" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start py-2 px-5">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2  scroll-smooth">
                <a href="#item1" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item2" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item3" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item4" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item5" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item6" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                <a href="#item7" className="btn btn-xs radio active:bg-indigo-700 scroll-smooth"></a>
                </div>
            </Box>
        </CustomTabPanel>
    </Box>
  )
}

export default upcoming_events