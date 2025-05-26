import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/pdf-viewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ path, pages }) => {
    const [numPages, setNumPages] = useState(pages);
    
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div className='pdf-viewer'>
            <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({length: numPages}, (_, i) => i).map(page => <Page key={`page_${page + 1}`} pageNumber={page + 1}/>)}
            </Document>
        </div>
    )
}

export default PDFViewer;
