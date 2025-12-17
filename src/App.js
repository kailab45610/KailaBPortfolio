import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Landing/Header';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Visual from './pages/Visual';
import Footer from './components/Landing/Footer';
import LittleLemon from './components/projects/LLemon/LittleLemon';
import HairDay from './components/projects/HairDay/HairDay';

function App() {

  return (
    <main className="App">
       <Header/>
      <Routes>
        <Route path="/" element={<Work/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Visual" element={<Visual/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/LittleLemon" element={<LittleLemon/>}/>
        <Route path ="/hairday" element={<HairDay/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
