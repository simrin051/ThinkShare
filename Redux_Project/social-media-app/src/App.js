import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './features/Home/Home';
import { Profile } from './features/Profile/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
