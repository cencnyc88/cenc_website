"use client";
import React, { useState } from 'react'
import Image from 'next/image'

export default function EventsSelection({ events }) {
    const [show, setShow] = useState(null);

    const handleClick = (eventSelected) => {
        setShow(eventSelected == show ? null : eventSelected)
    };


    return (
        <div>
            {events.events.map((event) =>
                <div key={event.id} className='event-container'>
                    <button className='event-name' onClick={() => handleClick(event.id)}>
                        {event.name}
                    </button>
                    {show === event.id && (
                        <div className='provided-content'>
                            <div className='event-image'>
                                <Image
                                    src={event.path}
                                    alt={'${events.name}' + "not loaded"}
                                    quality={100}
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className='event-description'>
                                {event.description}
                            </div>
                        </div>
                    )}   
                </div>
            )}
        </div>
    )
}
