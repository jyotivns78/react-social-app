import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/' element={ <Register /> } />
      <Route path='/login' element={ <Login /> } />
    </Routes>
   </Router>
  );
}

export default App;
