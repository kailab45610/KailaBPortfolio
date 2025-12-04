import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Landing/Header';
import Work from './components/Landing/Work';
import About from './components/About/About';
import Contact from './components/Contact';
import Visual from './components/Visual';
import Footer from './components/Landing/Footer';
import LittleLemon from './components/ProjectsinDepth/LittleLemon';

function App() {

  return (
    <div className="App">
       <Header/>
      <Routes>
        <Route path="/" element={<Work/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Visual" element={<Visual/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/LittleLemon" element={<LittleLemon/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
