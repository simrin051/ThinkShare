import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './features/Home/Home';
import { Profile } from './features/Profile/Profile';
import './App.css';
import { Landing } from './features/Landing/Landing';
import { BookMarks } from './features/BookMarks/BookMarks';
import { EditPostModal } from './features/PostFeed/EditPostModal';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<BookMarks />} />

      </Routes>
    </div>
  );
}

export default App;
