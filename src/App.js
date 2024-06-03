import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/pages/home/homePage.js';
import VideoPage from './Components/pages/videos/videosPage.js';
import GamesPage from './Components/pages/games/gamesPage.js';
import ArtsPage from './Components/pages/arts/artsPage.js';
import MusicPage from './Components/pages/musics/musicsPage.js';
import OpenedPage from './Components/pages/openedPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className='mainContent'>
          <Routes>
            <Route path='/' element={<HomePage searchTerm={searchTerm} />} />    
            <Route path='/videos' element={<VideoPage searchTerm={searchTerm} />} />
            <Route path='/games' element={<GamesPage searchTerm={searchTerm} />} />
            <Route path='/arts' element={<ArtsPage searchTerm={searchTerm} />} />
            <Route path='/musics' element={<MusicPage searchTerm={searchTerm}/>} />
            <Route path='/item/:type/:id' element={<OpenedPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
