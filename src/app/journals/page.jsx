import React from 'react';
import ImageList from './ImageList';

export default function ImageGallery() {

    return (
        <main>
            <nav>
                <h1 className='head'>CENC Intern Journals 2023</h1>
            </nav>
            <hr style={ { "width": "98%" , "border-color": "maroon", "margin-bottom": "20px"} }></hr>
            <div className='image-container'>
                <ImageList />
            </div>
        </main>
    );
}


