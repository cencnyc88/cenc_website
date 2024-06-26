import React from 'react';

export default function PDFDisplay() {
    return (
        <div className="pdf-display">
            <iframe
                src="https://drive.google.com/file/d/1VS-NA_hwmBId40OhyEaCIU-fm-5QWJP9/view?usp=drive_link"
                width="100%"
                height="800px"
                className="pdf-border"
            >
            </iframe>
        </div>
    );
}


