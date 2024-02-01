import {Routes, Route} from 'react-router-dom'
import './App.css';
import {About, Contact, Skills, Nav} from './views';
// import assets here (icons etc) 


export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
    </>
  );
}

