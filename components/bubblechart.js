'use client'
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { Box } from '@mui/material';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);

const BubbleChart = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = { 
        chart: {
            type: 'packedbubble',
            height: '100%'
        },
        legend: {
            enabled: false
        },
        accessibility: {
            enabled: false
        },
        title: {
            text: 'SOC Members who have joined the League of Extraordinary Hackers'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}'
        },
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: false
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'bold'
                    }
                }
            }
        },
        series: [{ 
            name: 'Computer Engineering',
            data: [{
                name: 'Adham Elmosalamy',
                value: 767.1
            }, {
                name: 'Aley Eshra',
                value: 20.7
            },
            {
                name: 'Hassan Abouelela',
                value: 97.2
            },
            {
                name: 'Muhammad Hamza',
                value: 111.7
            },
            {
                name: 'Sidratul Muntaha Sara',
                value: 158.1
            },
            {
                name: 'Yousef Irshaid',
                value: 241.6
            },
            {
                name: 'Adrish Hussain Danka',
                value: 249.1
            },
            {
                name: 'Hadi Abdallah',
                value: 298.1
            },
            {
                name: 'Mariam Habib',
                value: 323.7
            },
            {
                name: 'Sayam Ahmad Saif',
                value: 78.3
            },
            {
                name: 'Jerusha Paul',
                value: 415.4
            }, {
                name: 'Faris Nasser',
                value: 353.2
            }, {
                name: 'Afif Zughayer',
                value: 337.6
            },
            {
                name: 'Timothy Joseph',
                value: 71.1
            }
            ]
        }, {
            name: 'Computer Science',
            data: [{
                name: 'Omer Safwat',
                value: 8.2
            },
            {
                name: 'AbdulAziz Mohammad',
                value: 9.2
            },
            {
                name: 'Karim Elsayed',
                value: 13.1
            },
            {
                name: 'Mohammed Selmy',
                value: 14.1
            },
            {
                name: 'Abdulrahman Hanifa',
                value: 14.1
            },
            {
                name: 'Faris Abu Shaqra',
                value: 17.3
            },
            {
                name: 'Saeed Bin Mizan',
                value: 24.3
            },
            {
                name: 'Asma Kamali',
                value: 25
            },
            {
                name: 'Taufiq Syed',
                value: 50.6
            },
            {
                name: 'Yousuf Alwasefey',
                value: 7.3
            },
            {
                name: 'Farah Maimoona Jayas',
                value: 60.7
            },
            {
                name: 'Mouaz Kassouma',
                value: 8.9
            },
            {
                name: 'Angelo Cabarloc',
                value: 9.1
            },
            {
                name: 'Rithik Rajiv Vaikkat',
                value: 93.9
            }
            ]
        }, {
            name: 'Math',
            data: [{
                name: 'AbdulAziz Mohammad',
                value: 409.4
            }
            ]
        }]
    };

    if (!isClient) {
        return null;
    }

    return (
        <Box width={"50vw"}>
            <HighchartsReact 
                highcharts={Highcharts}
                options={options}
            />
        </Box>
    );
};

export default BubbleChart;
