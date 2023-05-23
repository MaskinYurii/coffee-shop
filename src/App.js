import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import OurCoffee from "./pages/OurCoffee/OurCoffee";
import ForPleasure from "./pages/ForPleasure/ForPleasure";
import React from "react";

function App() {
  return (
    <>
        <Navbar position='absolute' theme='white'/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='OurCoffee' element={<OurCoffee/>}/>
            <Route path='ForPleasure' element={<ForPleasure/>}/>
        </Routes>
    </>
  );
}

export default App;
