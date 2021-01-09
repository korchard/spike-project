import { Button, ButtonGroup } from '@pdftron/webviewer';
import './App.css';
import Contact from '../Contact/Contact';
import WebViewer from '@pdftron/webviewer';
import React, { useRef, useEffect } from 'react';

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
      <div className="webviewer" ref={viewerDiv}>

      </div>
      <main className="app__main">
        <div className="app__placeholder">Click Load PDF to begin organizing pages.</div>
      </main>
      <footer className="app__footer">
        <ButtonGroup>
          <Button buttonStyle="borderless">Load PDF</Button>
          <Button disabled>Download PDF</Button>
        </ButtonGroup>
      </footer>
    </div>
  );
}

export default App;
