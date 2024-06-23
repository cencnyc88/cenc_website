import React from 'react';
import Link from 'next/link';
import Logo from './Logo.png';
import Image from "next/image"  

export default function Navbar() {
  return (
    <div className="header">
        <div className='nav-container'>
            <Link href="/" className="nav-logo">
                <Image
                    src={Logo}
                    alt='Alternate Logo'
                    width={241}
                    height={85}
                    quality={100}
                    placeholder='blur'
                >
                </Image>
            </Link>
        </div>
        <div className="clickable-tabs">
              <div className="events-tab">
                <Link href="/events" className="events-label">
                EVENTS
                </Link>
              </div>
              <div className="projects-tab">
                <Link href="/projects" className="projects-label">
                PROJECTS
                </Link>
              </div>
              <div className='contact-tab'>
                <Link href="/contact" className="contact-label">
                CONTACT US
                </Link>
              </div>
              <div className="signup-button">
                <Link href="/signup" className="signup-label">
                    SIGN UP
                </Link> 
              </div>
            {/* <div className="contact-block">
            </div> */}
          </div>
    </div>
  );
}
