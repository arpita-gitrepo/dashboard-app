import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBell, FaEnvelope, FaChartBar, FaChartPie } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-800 text-white w-12 md:w-auto">
            <nav className="flex-1 overflow-y-auto p-2 scrollbar-thin-gray">
                <div className="flex flex-col justify-around h-full">
                    <ul className="flex flex-col items-center space-y-2">
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/home'>
                                <FaHome className="text-lg md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/dashboard'>
                                <FaChartBar className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/inbox'>
                                <FaEnvelope className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/notification'>
                                <FaBell className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/billing'>
                                <FaChartPie className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/user-info'>
                                <FaUser className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-center space-y-2">
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/sign-out'>
                                <FaSignOutAlt className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <NavLink to='/settings'>
                                <FaCog className="text-xl md:text-2xl lg:text-3xl" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

