'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        'English', 'Russian', 'Italian',
        'German', 'French', 'Portuguese',
        'Spanish', 'Polish', 'Chinese',
        'Dutch', 'Czech'
    ];

    return (
        <>
            <div className="bg-gray-100 p-4">
                <nav className="flex justify-between items-center">
                    {/* Left Side - App name and Links */}
                    <div className="flex space-x-4">
                        <span className="text-xl font-bold">Buraak</span>
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900">Contact</Link>
                            <Link href="#" className="text-gray-700 hover:text-gray-900">About</Link>
                        </div>
                    </div>

                    {/* Right Side - Sign In/Sign Up and Language Dropdown */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600">Inquire a reservation</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>

                        <select name="" id="" className='h-10'>
                            {
                                languages.map((language, index) => (
                                    <option key={index} value={language}>{language}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {/* Icon for Menu */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col mt-4 space-y-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</button>
                    </div>
                )}
            </div>
        </>
    )
}
