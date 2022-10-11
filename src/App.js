import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MarketPlace from './components/MarketPlace';
import Home from './components/Home';

import {  Routes, Route } from "react-router-dom";
import Nftdetails from './components/Nftdetails';



function App() {
  return (
    <>
    <div className="pages">

    <Navbar/> 
    {/* <MarketPlace/> */}
    {/* <Home/> */}
    {/* <Dashboard/> */}
    {/* <Nftdetails/> */}
    </div>  
    </>
  );
}

export default App;
