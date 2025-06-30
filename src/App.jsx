import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Owner from './components/Owner';
import Header from './components/Header';
import Footer from './components/Footer';

import "./App.css";

export default function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Owner" element={<Owner/>} />
      </Routes>

      <Footer/>
    </>
  );
}







