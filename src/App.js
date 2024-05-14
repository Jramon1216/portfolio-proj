import {Routes, Route, Navigate} from 'react-router-dom';
import './App.module.scss';
import { Nav, Projects, Contact, Home } from './views'


function App() {
  return (
    <>
      <Nav/>
          <Routes>
            <Route exact path="/portfolio-proj" element={<Navigate to="/portfolio-proj/home"/>} />
            <Route path="/portfolio-proj/home" element={<Home/>} />
            <Route path="/portfolio-proj/projects" element={<Projects/>} />
            <Route path="/portfolio-proj/contact" element={<Contact/>} />
          </Routes>
    </>
  );
}

export default App;
