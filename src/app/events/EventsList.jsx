import React from 'react'

async function getEvents() {
    const response = await fetch("https://smallgiant1010.github.io/cenc_api/db.json", {
        revalidate : 60
    })
    
    return response.json()
}

export default async function EventsList() {
    const events = getEvents()


    return (
        <>
        <div>
            {events.map((event) => 
                <div key={event.id}> 
                    <div className='event-name'>
                        {event.name}
                    </div>
                    <div className='event-image'>
                        <Image 
                            src={event.path}
                            alt={'${events.name}' + "not loaded"}
                            quality={100}
                            width={400}
                            height={300}
                        />
                    </div>
                    <div className='event-description'> 
                        {event.description}
                    </div>
                </div>
            )}
        </div>
        </>
    )
}
