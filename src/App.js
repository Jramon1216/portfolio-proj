import {Routes, Route} from 'react-router-dom';
import './App.module.scss';
import { Nav, Projects, Contact, Home } from './views'


function App() {
  return (
    <>
      <Nav/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
    </>
  );
}

export default App;
