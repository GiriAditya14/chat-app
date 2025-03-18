import React from 'react';
import './App.css';
import Home from './Components/Home';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/dashboard' element={ <Dashboard/> }/>
      </Routes>
    </div>
  );
}

export default App