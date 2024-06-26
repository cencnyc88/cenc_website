import React from 'react';

export default function PDFDisplay() {
    return (
        <div className="pdf-display">
            <iframe
                src="/CENC JOURNAL (2).pdf"
                width="100%"
                height="800px"
                className="pdf-border"
            >
            </iframe>
        </div>
    );
}


