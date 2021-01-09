import './App.css';
import Contact from '../Contact/Contact';
import ConsultForm from '../ConsultForm/ConsultForm';
import SinglePage from '../SinglePage/SinglePage';
import React from 'react';
import herbalintake from '../../assets/herbalintake.pdf';
// import WebViewer from '@pdftron/webviewer';
// import React, { useRef, useEffect } from 'react';
// import Typescript from 'typescript';

function App() {
  // const viewerDiv = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   WebViewer({path: 'lib', initialDoc: './assets/herbalintake.pdf'}, 
  //   viewerDiv.current as HTMLDivElement).then(instance => {

  //   });
  // }, [])

  return (
    <div className="app">
      <Contact />
      {/* <div className="webviewer" ref={viewerDiv}></div> */}
      <ConsultForm pfg={herbalintake}/>
      
      <hr />

      <h4>Single Page</h4>
      <div className="all-page-container">
        <SinglePage pdf={herbalintake} />
      </div>

      <hr />
    </div>
  );
}

export default App;
