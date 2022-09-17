import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './features/Home/Home';
import { Profile } from './features/Profile/Profile';
import './App.css';
import { Landing } from './features/Landing/Landing';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomTheme } from './utils/custom-theme';

function App() {
   //const theme = createTheme(CustomTheme);
  return (
    <ThemeProvider>
    <div className="App">
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
