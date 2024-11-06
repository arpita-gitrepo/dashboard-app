import React from 'react';
import { FaAdjust, FaArrowUp, FaSearch } from 'react-icons/fa';
import { FiUpload } from "react-icons/fi";
import { TbDotsVertical } from "react-icons/tb";
import { SlGraph } from "react-icons/sl";
import { BsGraphUp } from "react-icons/bs";
import ReactSpeedometer from "react-d3-speedometer";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { NavLink } from 'react-router-dom';


const doubleLineChartData = [
    { month: "Jan", position: 46, market: 53 },
    { month: "Feb", position: 51, market: 56 },
    { month: "Mar", position: 54, market: 62 },
    { month: "Apr", position: 57, market: 67 },
    { month: "May", position: 59, market: 68 },
    { month: "Jun", position: 61, market: 71 },
    { month: "Jul", },
    { month: "Aug", },
    { month: "Sep", },
    { month: "Oct", },
    { month: "Nov", },
    { month: "Dec", },
];

const pieChartData = [
    { name: 'Pattern Tiles', value: 32 },
    { name: 'Wooden Floor', value: 49 },
    { name: 'Stone Textured Tiles', value: 27 },
    { name: 'Empty', value: 180 - (32 + 49 + 27) },
];

const COLORS = ['#1e3a8a', '#065f46', '#d97706', '#e5e7eb'];


const lineChartData = [
    { month: 'Jan', value: 44 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 42 },
    { month: 'Apr', value: 46 },
    { month: 'May', value: 45 },
    { month: 'Jun', value: 48 },
    { month: 'Jul', value: 50 },
    { month: 'Aug', value: 51 },
    { month: 'Sep', value: 54 },
];

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
            <div className="mb-8 space-y-2 sm:flex sm:justify-between sm:space-y-0">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className='flex items-center text'>
                    <FaSearch className="text-lg me-4" />
                    <span className='flex items-center border-2 px-2 py-1 me-2'>
                        <FaAdjust className='text-lg me-2' />
                        Customise
                    </span>
                    <span className='flex items-center border-2 px-2 py-1 me-2'>
                        <FiUpload className='text-lg me-2' />
                        Export
                    </span>
                </div>
            </div>
            <p className="text-lg mb-12">
                <NavLink to='/dashboard' className={({ isActive }) => `px-2 py-1 text-base sm:px-6 sm:py-2 sm:text-lg border-b-2 ${isActive ? 'border-b-green-600' : ''}`}>Market Analysis</NavLink>
                <NavLink to='/dashboard/performance' className={({ isActive }) => `px-2 py-1 text-base sm:px-6 sm:py-2 sm:text-lg border-b-2 ${isActive ? 'border-b-green-600' : ''}`}>Performance</NavLink>
            </p>

            <div className="space-y-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex justify-between mb-6">
                            <h2 className="text-xl font-semibold">Today's Revenue</h2>
                            <TbDotsVertical />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold mb-2">$1,280</p>
                                <p className="flex items-center">
                                    <FaArrowUp className='text-green-600' />
                                    <span className='text-green-600 me-1'>10%</span>
                                    <span className='text-black'>last mth</span>
                                </p>
                            </div>
                            <div>
                                <BsGraphUp className='text-6xl text-green-600' />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex justify-between mb-6">
                            <h2 className="text-xl font-semibold">Today's Orders</h2>
                            <TbDotsVertical />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold mb-2">14</p>
                                <p className="flex items-center">
                                    <SlGraph className='text-green-600' />
                                    <span className='text-green-600 me-1'>10%</span>
                                    <span className='text-black'>last mth</span>
                                </p>
                            </div>
                            <div>
                                <SlGraph className='text-6xl text-green-600' />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex justify-between mb-6">
                            <h2 className="text-xl font-semibold">Avg. order value</h2>
                            <TbDotsVertical />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold mb-2">$91.42</p>
                                <p className="flex items-center">
                                    <FaArrowUp className='text-green-600' />
                                    <span className='text-green-600 me-1'>10%</span>
                                    <span className='text-black'>last mth</span>
                                </p>
                            </div>
                            <div>
                                <BsGraphUp className='text-6xl text-green-600' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:p-10 lg:p-12 space-y-8 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    <div className="col-span-1 lg:col-span-1 p-4 border-2">
                        <div className="flex justify-between text-lg mb-4">
                            <p className='text-gray-600'>Industry Opportunities</p>
                            <TbDotsVertical className='text-gray-600' />
                        </div>
                        <div className='scale-[0.80] flex justify-center'>
                            <ReactSpeedometer minValue={0} maxValue={100} value={52} segments={4} customSegmentStops={[0, 52, 70, 85, 100]} segmentColors={["#065f46", "#0f766e", "#10b981", "#d1fae5"]} needleColor="#374151" needleHeightRatio={0.7} ringWidth={30} textColor="transparent" currentValueText="" needleTransitionDuration={1000} needleTransition="easeElastic" height={200} />
                        </div>
                        <p className='text-lg text-gray-600 mb-4'>You can achieve <span className='text-green-600'>44%</span> more opportunities in market</p>
                        <ul className='list-inside list-disc'>
                            <li className='bullet-1'>Your Position in Market</li>
                            <li className='bullet-2'>Total Market Opportunities</li>
                            <li className='bullet-3'>Achievable Market Opportunities</li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-2 border-2">
                        <div className='flex bg-yellow-50 mb-4 px-2'>
                            <div className='flex justify-center sm:items-center p-1 sm:p-2'>
                                <HiOutlineSpeakerphone className='text-2xl sm:text-4xl text-blue-800' />
                            </div>
                            <div>
                                <p className='text-black text-base sm:text-lg'>Your customer market is increasing! Set up Ad Campaign to reach your customers</p>
                                <p className='text-red-950 text-sm sm:text-base'>We will guide you through entire setup of Campaign</p>
                            </div>
                        </div>
                        <div className='flex justify-between px-2 mb-6'>
                            <div>
                                <p className='text-lg sm:text-xl font-bold'>
                                    Current Market Trend
                                </p>
                                <p className='text-sm sm:text-base text-red-950'>
                                    Track how your rating compares to your industry average.
                                </p>
                            </div>
                            <div>
                                <button className="w-16 py-1 text-xs sm:w-24 sm:py-2 sm:text-sm border-2 border-gray-300">12 months</button>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-2xl mx-auto sm:p-4 bg-white rounded-lg">
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={doubleLineChartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                                        <XAxis dataKey="month" label={{ value: "Month", position: "insideBottom", offset: -5, fill: "#92400e", fontSize: 16, fontWeight: 'bold' }} />
                                        <YAxis label={{ value: "Market Trend", angle: -90, position: "insideLeft", fill: "#92400e", fontSize: 16, fontWeight: 'bold' }} />
                                        <Tooltip contentStyle={{ backgroundColor: "#f5f5f5", borderColor: "#cbd5e1", color: "#1f2937" }} />
                                        <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ top: -20, right: 10 }} />
                                        <Line type="monotone" dataKey="position" stroke="#f59e0b" strokeWidth={2} dot={{ r: 5 }} name="Your Position in Market" />
                                        <Line type="monotone" dataKey="market" stroke="#1e3a8a" strokeWidth={2} dot={{ r: 5 }} name="Current Market" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:p-10 lg:p-12 space-y-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className="col-span-1 p-2 sm:p-4 border-2">
                        <div className="flex justify-between text-lg mb-4">
                            <p className='text-black'>Trending in your Industry</p>
                            <TbDotsVertical className='text-black' />
                        </div>
                        <div>
                            <div className="flex justify-between mb-4">
                                <div className="relative w-48 h-48 scale-75 sm:scale-100">
                                    <PieChart width={200} height={200}>
                                        <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} startAngle={-120} endAngle={240}>
                                            {pieChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <h2 className="text-2xl font-bold">49%</h2>
                                        <p className="text-base text-gray-500">Wooden Floor</p>
                                    </div>
                                </div>

                                <div className="text-sm mt-4">
                                    <div className="mb-3">
                                        <p className='text-base sm:text-xl text-black font-semibold'>32%</p>
                                        <p className='flex items-center'><p className="h-2 w-2 rounded-full me-1" style={{ backgroundColor: COLORS[0] }}></p><p className='text-xs sm:text-base'>Pattern Tiles</p></p>
                                    </div>
                                    <div className="mb-3">
                                        <p className='text-base sm:text-xl text-black font-semibold'>49%</p>
                                        <p className='flex items-center'><p className="h-2 w-2 rounded-full me-1" style={{ backgroundColor: COLORS[1] }}></p><p className='text-xs sm:text-base'>Wooden Floor</p></p>
                                    </div>
                                    <div className="mb-3">
                                        <p className='text-base sm:text-xl text-black font-semibold'>27%</p>
                                        <p className='flex items-center'><p className="h-2 w-2 rounded-full me-1" style={{ backgroundColor: COLORS[2] }}></p><p className='text-xs sm:text-base'> Stone Textured Tiles</p></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='p-2 sm:px-2 sm:py-0'>
                                    <SlGraph className='text-3xl sm:text-4xl text-blue-500' />
                                </div>
                                <div>
                                    <p className='text-sm sm:text-base text-blue-500'>Wooden floor is trending, set up campaign for wooden tiles to reach these users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 p-2 sm:p-4 border-2">
                        <div className="flex justify-between text-lg mb-4">
                            <p className='text-black'>Visibility</p>
                            <TbDotsVertical className='text-black' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4'>
                            <div className="col-span-1 p-1 border-[1px]">
                                <p className='text-gray-500'>Impressions</p>
                                <div className='flex justify-between'>
                                    <p className='text-lg md:text-xl xl:text-2xl'>4,862</p>
                                    <div className='flex items-center space-x-2 lg:space-x-1'>
                                        <SlGraph className='text-green-600 text-lg' />
                                        <span className='text-green-500 text-base'>6.6%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 p-1 border-[1px]">
                                <p className='text-gray-500'>Views</p>
                                <div className='flex justify-between'>
                                    <p className='text-lg md:text-xl xl:text-2xl'>2,671</p>
                                    <div className='flex items-center space-x-2 lg:space-x-1'>
                                        <SlGraph className='text-green-600 text-lg' />
                                        <span className='text-green-500 text-base'>6.6%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 p-1 border-[1px]">
                                <p className='text-gray-500'>Clicks</p>
                                <div className='flex justify-between'>
                                    <p className='text-lg md:text-xl xl:text-2xl'>822</p>
                                    <div className='flex items-center space-x-2 lg:space-x-1'>
                                        <SlGraph className='text-green-600 text-lg' />
                                        <span className='text-green-500 text-base'>6.6%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={lineChartData}>
                                    <XAxis dataKey="month" />
                                    <YAxis hide />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#16A34A" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
