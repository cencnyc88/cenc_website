import React from 'react'
import EventsSelection from './EventsSelection'

async function getEvents() {
    const response = await fetch("https://smallgiant1010.github.io/cenc_api/db.json", {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}

export default async function EventsList() {
    const events = await getEvents()

    return (
        <>
            <EventsSelection events={events} />
        </>
    )
}
