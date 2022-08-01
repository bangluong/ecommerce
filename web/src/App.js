import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Components/Customer/Login";
import './Styles/Customer/Login.scss';
import { Routes, Route } from 'react-router-dom';
import Register from "./Components/Customer/Register";
import Dashboard from "./Components/Admin/Dashboard"

function App() {
  return (
      <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>
  );
}

export default App;
