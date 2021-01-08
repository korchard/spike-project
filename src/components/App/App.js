import { Button, ButtonGroup } from '@pdftron/webviewer-react-toolkit';
import './App.css';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="app">
      <main className="app__main">
      <Contact />
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
