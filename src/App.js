import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Nav, About, Skills, Contact, Home } from './views'


function App() {
  return (
    <>
      <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
    </>
  );
}

export default App;
