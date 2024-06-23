"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './events.css'

export default function page() {
  const images = [
      "/congestionPricing.jpg",
      "/Lawyer.jpg",
      "/DAOffice.jpg",
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
    const [nextTab, setTab] = useState(true)

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const tabChange= (nextTab) => {
      setTab(nextTab)
      setCurrentIndex(0);
    };

    return (
      <div className="container">
        <header className="header">
          <h1>Welcome to the Events Page</h1>
          <p>Upcoming and Past</p>
          <div className="tabs">
            <button
              className={`tab ${nextTab ? 'active' : ''}`}
              onClick={() => tabChange(true)}
            >
              Past
            </button>
            <button
              className={`tab ${!nextTab ? 'active' : ''}`}
              onClick={() => tabChange(false)}
            >
              Upcoming
            </button>
          </div>
        </header>
        <main className="main">
          <section className="imageSection">
            <button onClick={handlePrevious}>←</button>
            <div className="imageContainer">
              <Image
                src={images[currentIndex]}
                alt={'${eventName[currentIndex + 1]} : ${descriptions[currentIndex + 1]}'} 
                width={800}
                height={600}
                className="image"
              />
              <h2>{eventName[currentIndex]}</h2>
              <p>{descriptions[currentIndex]}</p>
            </div>
            <button onClick={handleNext}>→</button>
          </section>
        </main>
      </div>
    );
}
