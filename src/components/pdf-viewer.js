import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/pdf-viewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ path, desc, pages }) => {
    const [numPages, setNumPages] = useState(pages);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const changePage = offset => setPageNumber(prevPageNumber => prevPageNumber + offset);
    
    const previousPage = () => changePage(-1);

    const nextPage = () => changePage(1);
    
    

    return (
        <div className='pdf-viewer'>
            <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({length: numPages}, (_, i) => i).map(page => <Page key={`page_${page + 1}`} pageNumber={page + 1}/>)}
            </Document>
        </div>
    )
}

export default PDFViewer;
