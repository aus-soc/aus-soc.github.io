import React from 'react';
import { Box, Typography } from '@mui/material';

function faq() {
    return (
        <Box className="bg-white py-16 px-6 lg:px-20 w-full" id="faq">
            {/* FAQ Title */}
            <Typography variant="h1" className="text-4xl lg:text-6xl font-bold text-indigo-700 text-center mb-10">
                Frequently Asked Questions
            </Typography>

            {/* FAQ Questions and Answers */}
            <Box className="space-y-6 max-w-4xl mx-auto">
                <Box className="collapse collapse-arrow bg-slate-200 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title font-sans text-lg lg:text-xl font-medium">
                        What is the SOC and its mission?
                    </div>
                    <div className="collapse-content">
                        <Typography className="font-sans text-base lg:text-lg text-slate-700">
                            SOC (Security Of Cybersecurity) is dedicated to fostering the next generation of cybersecurity experts. Our mission is to provide hands-on learning, connect like-minded individuals, and host events that promote cybersecurity education.
                        </Typography>
                    </div>
                </Box>

                <Box className="collapse collapse-arrow bg-slate-200 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title font-sans text-lg lg:text-xl font-medium">
                        Who can join SOC?
                    </div>
                    <div className="collapse-content">
                        <Typography className="font-sans text-base lg:text-lg text-slate-700">
                            Anyone with an interest in cybersecurity can join SOC. Whether you’re a beginner or a seasoned professional, we have activities, workshops, and events tailored for all skill levels.
                        </Typography>
                    </div>
                </Box>

                <Box className="collapse collapse-arrow bg-slate-200 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title font-sans text-lg lg:text-xl font-medium">
                        How often does SOC organize events?
                    </div>
                    <div className="collapse-content">
                        <Typography className="font-sans text-base lg:text-lg text-slate-700">
                            SOC hosts a wide variety of events such as workshops, CTFs, and guest speaker sessions throughout the academic year. We aim to hold at least one major event each month.
                        </Typography>
                    </div>
                </Box>

                <Box className="collapse collapse-arrow bg-slate-200 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title font-sans text-lg lg:text-xl font-medium">
                        How can I participate in SOC events?
                    </div>
                    <div className="collapse-content">
                        <Typography className="font-sans text-base lg:text-lg text-slate-700">
                            You can participate in SOC events by registering through our website or by following us on our social media platforms where we regularly announce upcoming events and their details.
                        </Typography>
                    </div>
                </Box>

                <Box className="collapse collapse-arrow bg-slate-200 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title font-sans text-lg lg:text-xl font-medium">
                        How can I contribute to the SOC?
                    </div>
                    <div className="collapse-content">
                        <Typography className="font-sans text-base lg:text-lg text-slate-700">
                            You can contribute by volunteering for events, sharing your knowledge, or becoming part of our organizing team. We are always looking for passionate individuals to help grow the SOC community.
                        </Typography>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}

export default faq;
