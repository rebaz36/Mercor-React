import { useState } from 'react';
import './App.css';
// eslint-disable-next-line import/extensions
import Header from './Components/Header';
import TextAnimation from './Sections/TextAnimation';
import FancyScroll from './Sections/FancyScroll';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header />
      <TextAnimation setShow={setShow} show={show} />
      <FancyScroll show={show} />

    </div>
  );
}

export default App;
