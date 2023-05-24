import React from "react";
import {Route, Routes} from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import OurCoffee from "./pages/OurCoffee/OurCoffee";
import ForPleasure from "./pages/ForPleasure/ForPleasure";
import CoffeePage from "./pages/CoffeePage/CoffeePage";
import './App.scss';


function App() {


  return (
    <>
        <Navbar position='absolute' theme='white'/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='OurCoffee' element={<OurCoffee/>}/>
            <Route path='ForPleasure' element={<ForPleasure/>}/>
            <Route path='/good/:id' element={<CoffeePage/>}/>
        </Routes>

    </>
  );
}

export default App;
