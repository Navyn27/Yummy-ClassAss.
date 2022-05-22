
import './App.css';
import './components/style.css'
import Form from './components/form';
import React from 'react';
import Form2 from './components/form2';
import Form3 from './components/form3';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    
  return (
    <BrowserRouter>
    <div>
      <Routes >
        
      {/* <Switch> */}
      <Route path="/register" element={<Form />}/>
      <Route path="/register2" element={<Form2 />}/>
      <Route path="/register3" element={<Form3/>}/>
      </Routes>
      {/* </Switch> */}
    </div>
    </BrowserRouter>

  );
}

export default App;
 