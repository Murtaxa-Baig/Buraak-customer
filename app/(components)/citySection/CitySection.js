import React from 'react'

export default function CitySection() {
    return (
        <>
            <div className='w-[90%] mx-auto mt-8'>
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-[50%]">
                        <p className='font-bold text-2xl text-gray-800'>Top Worldwide Destinations</p>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Dubai</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>London</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Manchester</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Kuala Lumpur</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Phuket</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Bodrum</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Milan</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Rome</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Lisbon</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Chicago</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <p className='font-bold text-2xl text-gray-800'>Top Worldwide Airports</p>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Manchester Airport</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Heathrow Airport</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Dubai Airport</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Dubai Airport</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Kuala Lumpur International Airport</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Bodrum Airport</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Phuket Airport</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Lisbon Airport</p>
                        </div>
                        <div className='my-2 w-full flex items-center'>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Chicago O{`'`}Hare Airport</p>
                            <p className='w-[50%] text-blue-600 hover:underline cursor-pointer'>Faro Airport</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
