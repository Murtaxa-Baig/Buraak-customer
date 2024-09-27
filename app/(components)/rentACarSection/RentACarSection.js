'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Autocomplete from 'react-google-autocomplete'; // Assuming you're using react-google-autocomplete
import bdImage from '@/public/images/bdImage.jpg';
import search from '@/public/images/search.svg'

export default function RentACarSection() {
    // State to store location data
    const [location, setLocation] = useState('');
    const [returnAtDifferent, setReturnAtDifferent] = useState(false)

    // Function to handle when a place is selected
    const handlePlaceSelected = (place) => {
        // Update the state with the selected location's name
        setLocation(place.formatted_address || place.name);
    };

    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center py-10"
                style={{ backgroundImage: `url(${bdImage.src})` }}
            >
                <div className="w-[90%] mx-auto">
                    <div className='bg-white rounded-md p-5'>
                        <h1 className="text-4xl text-center font-bold my-5 text-gray-700">Rent A Car Section</h1>

                        <div className='flex flex-wrap items-center justify-between w-full gap-2'>
                            {/* Pickup Location */}
                            <div className='w-full md:w-[29%] lg:w-[29%]'>
                                <p className='text-sm text-gray-700'>Pickup location</p>
                                <Autocomplete
                                    apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                                    onPlaceSelected={handlePlaceSelected}
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="border-2 rounded-[5px] p-1 outline-none w-full"
                                />
                                {
                                    returnAtDifferent ?
                                        <button onClick={() => setReturnAtDifferent(false)} className='py-1 mt-1 px-3 bg-blue-800 text-white rounded-md w-full'>
                                            Hide return location
                                        </button>
                                        :
                                        <button onClick={() => setReturnAtDifferent(true)} className='py-1 mt-1 px-3 bg-blue-800 text-white rounded-md w-full'>
                                            I want to deliver in a different place
                                        </button>
                                }
                                {returnAtDifferent && (
                                    <div className='w-full '>
                                        <div className='w-full'>
                                            <p className='text-sm text-gray-700'>Return location</p>
                                            <Autocomplete
                                                apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                                                onPlaceSelected={handlePlaceSelected}
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="border-2 rounded-[5px] p-1 w-full outline-none"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Pickup Date and Time */}
                            <div className='w-full flex items-center gap-1 md:w-[29%] lg:w-[29%] '>
                                <div className='w-[70%]'>
                                    <p className='text-sm text-gray-700'>Pickup date</p>
                                    <input type="date" className='outline-none border-[1px] p-1 rounded-md border-gray-600 w-full' />
                                </div>
                                <div className='w-[30%]'>
                                    <p className='text-sm text-gray-700'>Pickup time</p>
                                    <input type="time" className='outline-none border-[1px] p-1 rounded-md border-gray-600 w-full' />
                                </div>
                            </div>

                            {/* Return Date and Time */}
                            <div className='w-full flex gap-1 items-center md:w-[29%] lg:w-[29%] '>
                                <div className='w-[70%]'>
                                    <p className='text-sm text-gray-700'>Return date</p>
                                    <input type="date" className='outline-none border-[1px] p-1 rounded-md border-gray-600 w-full' />
                                </div>
                                <div className='w-[30%]'>
                                    <p className='text-sm text-gray-700'>Return time</p>
                                    <input type="time" className='outline-none border-[1px] p-1 rounded-md border-gray-600 w-full' />
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className='w-full md:w-[5%] lg:w-[10%] text-center'>
                                <button className='md:hidden lg:hidden p-2 px-8 bg-blue-500 text-white font-bold rounded-md mt-3 w-full md:w-auto'>
                                    Search
                                </button>
                                <div className='md:flex justify-start mt-4 hidden '>
                                    <button className='bg-blue-800 p-2 rounded-md'>
                                        <Image
                                            src={search}
                                            height={20}
                                            width={20}
                                            alt="Search Icon"
                                        />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Footer Content */}
                    <div className="grid grid-cols-1 mt-10 bg-white rounded-md p-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="col-span-1 m-3">
                            <p className='text-2xl text-gray-800 font-bold'>Flexible rentals</p>
                            <p>Cancel or change most bookings for free up to 48 hours before pick-up</p>
                        </div>
                        <div className="col-span-1 m-3">
                            <p className='text-2xl text-gray-800 font-bold'>No hidden fees</p>
                            <p>Know exactly what you{`'`}re paying</p>
                        </div>
                        <div className="col-span-1 m-3">
                            <p className='text-2xl text-gray-800 font-bold'>5 million+ reviews</p>
                            <p>By real, verified customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
