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
            {/* <div className="container-14"> */}
              <div className="container-9">
                <Link href="/events" className="events-label">
                EVENTS
                </Link>
              </div>
              <div className="container-10">
                <Link href="/projects" className="projects-label">
                PROJECTS
                </Link>
              </div>
              {/* <div className=''>
                <Link className="contact-label">
                CONTACT US
                </Link>
              </div> */}
              <div className="container-13">
                <Link href="/signup" className="contact-us-button">
                    SIGN UP
                </Link> 
              </div>
            {/* </div> */}
            {/* <div className="contact-block">
            </div> */}
          </div>
    </div>
  );
}
