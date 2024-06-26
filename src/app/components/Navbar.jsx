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
          />
        </Link>
      </div>
      <div className="clickable-tabs">
        <div className="events-tab">
          <Link href="/events" className="events-label">
            EVENTS
          </Link>
        </div>
        <div className="projects-tab">
          <Link href="/journals" className="projects-label">
            JOURNALS
          </Link>
        </div>
        <div className='contact-tab'>
          <Link href="/about-us" className="contact-label">
            ABOUT US
          </Link>
        </div>
        <a href="https://forms.gle/wnsQ3qddAEi18fUt7" target="_blank" className='anchor-text'>
          <button className="signup-button">
              <div className='signup-label'>
                SIGN UP
              </div>
            </button>
        </a>
      </div>
    </div>
  );
}
