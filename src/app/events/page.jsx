"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './events.css'

export default function page() {
  const images = [
      "/congestionPricing.jpg",
      "/Lawyer.jpg",
      "/DAOffice",
      "/MOCA.jpg",
    ];

    const eventName = [
      'Congestion Pricing',
      'Law & Order',
      'Edward J. Cuccia',
      'MOCA'
    ];

    const descriptions = [
      'Congestion Pricing Posters',
      'Visisted DA office to learn about law & order',
      'Guest Speaker Event with Edward J. Cuccia',
      'Visisted the Museum of Chinese in America'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <div className="container">
        <header className="header">
          <h1>Welcome to the Events Page</h1>
          <p>Upcoming and Past Events</p>
        </header>
        <main className="main">
          <section className="imageSection">
            <button onClick={handlePrevious}>Previous</button>
            <div className="imageContainer">
              <Image
                src={images[currentIndex]}
                alt={'${eventName[currentIndex + 1]} : ${descriptions[currentIndex + 1]}'} 
                width={300}
                height={200}
                className="image"
              />
              <h2>{eventName[currentIndex]}</h2>
              <p>{descriptions[currentIndex]}</p>
            </div>
            <button onClick={handleNext}>Next</button>
          </section>
        </main>
      </div>
    );
}
