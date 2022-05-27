<<<<<<< HEAD

import './App.css';
import './components/style.css'
import Form from './components/form';
import React from 'react';
import Form2 from './components/form2';
import Form3 from './components/form3';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
=======
import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Main from "./components/AboutUs";
import Main2 from "./components/Main2";
import ClientsOverview from "./components/ClientsOverview";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
>>>>>>> 10943101ccc7fff946e552374c876bcc9928aa41

function App() {
    
  return (
<<<<<<< HEAD
    <BrowserRouter>
    <div>
      <Routes >
        
      <Route path="/register" element={<Form />}/>
      <Route path="/register2" element={<Form2 />}/>
      <Route path="/register3" element={<Form3/>}/>
=======
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/user" element={<Dashboard />}>
          <Route path="dashboard" element={<Main />} />
          <Route path="orders" element={<Main2 />} />
          <Route path="overview" element={<ClientsOverview />} />
          <Route path="menu" element={<Menu />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
>>>>>>> 10943101ccc7fff946e552374c876bcc9928aa41
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
