import './App.css';
import Contact from '../Contact/Contact';
import WebViewer from '@pdftron/webviewer';
import React, { useRef, useEffect } from 'react';
import Typescript from 'typescript';

function App() {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer({path: 'lib', initialDoc: './assets/herbalintake.pdf'}, 
    viewerDiv.current as HTMLDivElement).then(instance => {

    });
  }, [])

  return (
    <div className="app">
      <Contact />
      <div className="webviewer" ref={viewerDiv}></div>

    </div>
  );
}

export default App;
