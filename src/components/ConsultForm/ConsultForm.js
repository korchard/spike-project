import '../App/App.css';
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import herbalintake from '../../assets/herbalintake.pdf';

export default function ConsultForm() {
    pdfjs.GlobalWorkerOptions.workerSrc =  
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
    const [numPages, setNumPages] = useState(null);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <Document
        file={herbalintake}
        options={{workerSrc: "pdf.worker.js"}}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    );
}
