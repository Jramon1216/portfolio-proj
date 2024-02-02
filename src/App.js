import {Routes, Route} from 'react-router-dom';
import './App.module.scss';
import { Nav, About, Projects, Contact, Home } from './views'


function App() {
  return (
    <>
      <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
    </>
  );
}

export default App;
