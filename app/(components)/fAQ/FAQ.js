'use client'
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import QuestionOne from '../ui/question/QuestionOne';
import QuestionTwo from '../ui/question/QuestionTwo';
import QuestionFive from '../ui/question/QuestionFive';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: 'What do I need to rent a car?',
            content: <QuestionOne />
        },
        {
            title: 'How old do I have to be to rent a car?',
            content: <QuestionTwo text="For most car rental companies, the age requirement is between 21 and 70 years old. If you{`'`}re under 25 or over 70, you might have to pay an additional fee." />
        },
        {
            title: 'Can I book a rental car for someone else?',
            content: <QuestionTwo text="Yes, as long as they meet these requirements. Just fill in their details while you{`'}re making the reservation." />
        },
        {
            title: 'How do I find the cheapest car rental deal',
            content: <QuestionTwo text="We work with all the major international car hire brands (and lots of smaller local companies) to bring you a huge choice of cars at the very best prices. That{`'`}s how we can find you cheap car hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form." />
        },
        {
            title: 'What should I look for when Im choosing a car?',
            content: <QuestionFive />
        },
        {
            title: 'Are all fees included in the rental price?',
            content: <QuestionTwo text="The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes, airport surcharges and any road fees. You{`'`}ll pay for any extras when you pick your car up, along with any young driver, additional driver or one-way fees – but we{`'`}ll explain any additional costs before you book your car (and taking your own child seats or GPS can be an easy way to reduce your costs). For more details on what{`'`}s included, just check the Ts&Cs of any car you{`'`}re looking at." />
        },
      
    ]


    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <div className="w-full md:w-[90%] mx-auto mt-3">
                <p className='font-bold text-2xl text-gray-800 my-5'>Frequently Asked Questions</p>
                {accordionData.map((item, index) => (
                    <div key={index} className="border-b-2 border-gray-200">
                        <div
                            aria-expanded={activeIndex === index}
                            className="w-full text-left p-4 focus:outline-none bg-cyan-50"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex justify-between items-center text-blue-500">
                                <span className=" font-medium">{item.title}</span>
                                {activeIndex === index ? (
                                    <ChevronUpIcon className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                                ) : (
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                                )}
                            </div>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? ' p-4 bg-white' : 'max-h-0'}`}
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
