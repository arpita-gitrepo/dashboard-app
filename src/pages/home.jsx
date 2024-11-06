import React from 'react';
import { FaUser, FaChartLine, FaShoppingCart, FaTasks, FaBell, FaInbox } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
                <div className="mb-8 space-y-2 sm:flex sm:justify-between sm:space-y-0">
                    <h1 className="text-3xl font-bold">Home</h1>
                </div>
                <div className="p-6 md:p-10 lg:p-12 space-y-8">
                    <div className="bg-gradient-to-r from-teal-500 to-purple-600 rounded-lg p-6 md:p-8 shadow-lg">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Dashboard-App</h1>
                        <p className="text-sm md:text-lg">This page is for displaying content of home page.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg p-6 text-center shadow-md">
                            <FaUser className="text-3xl md:text-4xl mb-2" />
                            <h2 className="text-xl font-semibold">Total Users</h2>
                            <p className="text-2xl md:text-3xl font-bold mt-1">1,245</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-6 text-center shadow-md">
                            <FaChartLine className="text-3xl md:text-4xl mb-2" />
                            <h2 className="text-xl font-semibold">Active Sessions</h2>
                            <p className="text-2xl md:text-3xl font-bold mt-1">305</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-center shadow-md">
                            <FaShoppingCart className="text-3xl md:text-4xl mb-2" />
                            <h2 className="text-xl font-semibold">Sales Today</h2>
                            <p className="text-2xl md:text-3xl font-bold mt-1">$5,789</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-500 to-yellow-600 rounded-lg p-6 text-center shadow-md">
                            <FaTasks className="text-3xl md:text-4xl mb-2" />
                            <h2 className="text-xl font-semibold">Pending Orders</h2>
                            <p className="text-2xl md:text-3xl font-bold mt-1">42</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <button className="bg-blue-500 rounded-lg p-4 text-center shadow-md hover:bg-blue-600 transition">
                            <FaBell className="text-2xl mb-2" />
                            <span>View Notifications</span>
                        </button>
                        <button className="bg-green-500 rounded-lg p-4 text-center shadow-md hover:bg-green-600 transition">
                            <FaInbox className="text-2xl mb-2" />
                            <span>View Inbox</span>
                        </button>
                        <button className="bg-purple-500 rounded-lg p-4 text-center shadow-md hover:bg-purple-600 transition">
                            <FaTasks className="text-2xl mb-2" />
                            <span>Manage Tasks</span>
                        </button>
                        <button className="bg-red-500 rounded-lg p-4 text-center shadow-md hover:bg-red-600 transition">
                            <FaUser className="text-2xl mb-2" />
                            <span>Add New User</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
