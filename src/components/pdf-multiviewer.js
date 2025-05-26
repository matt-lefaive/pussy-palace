import React, { useState } from 'react';
import '../styles/pdf-multiviewer.css';
import PDFViewer from './pdf-viewer';

const PDFMultiviewer = ({ files }) => {
    const [currentPDF, setCurrentPDF] = useState(0);

    return (
        <div className='pdf-multiviewer-container'>
            {files && files.map((file, i) => {
                return (
                    <div key={`pdf-multiviewer-${i}`} className={`pdf-multiviewer ${i !== currentPDF ? 'hidden' : ''}`}>
                        <PDFViewer path={file.path} pages={file.pages}/>
                        {file?.desc && <div className='pdf-multiviewer-caption'>{file.desc}</div>}
                        {i > 0 && <button className='pdf-multiviewer-prev-button' onClick={() => setCurrentPDF(prevState => prevState - 1)}>&lt;</button>}
                        {i < files.length - 1 && <button className='pdf-multiviewer-next-button' onClick={() => setCurrentPDF(prevState => prevState + 1)}>&gt;</button>}
                        {file?.path && <button className='pdf-multiviewer-download' onClick={() => window.open(file.path)}>⤓</button>}
                    </div>
                )
            })}
        </div>
    )
}

export default PDFMultiviewer;
