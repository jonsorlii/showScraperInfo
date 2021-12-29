import React from 'react';
import EditTicker from './components/pages/EditTicker.js'
import Home from './components/pages/Home.js'
import Ticker from './components/pages/Ticker.js'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/> 
        <Route path = "/Ticker" element = {<Ticker />}/> 
        <Route path = "/EditTicker" element = {<EditTicker />}/> 
      </Routes> 
    </Router>
  );
}
export default App;