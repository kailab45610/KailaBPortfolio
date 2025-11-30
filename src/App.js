import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Visual from './components/Visual';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
        <Route path="/" element={<Work/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Visual" element={<Visual/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
