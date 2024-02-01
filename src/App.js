import {Routes, Route, Router} from 'react-router-dom';
import './App.css';
import { Nav, About, Skills, Contact } from './views'


function App() {
  return (
    <>
      <Nav/>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
    </>
  );
}

export default App;
