// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cube from '../components/Figures/Cube/Cube';
import Sphere from '../components/Figures/sphere/sphere';
import Pyramid from '../components/Figures/pyramid/pyramid';
import Pentagon from '../components/Figures/Pentagon/Pentagon';
import Bounce from '../components/animations/Bounce/Bounce';
import Spin from '../components/animations/Spin/Spin';
import Fade from '../components/animations/Fade/Fade';
import Slide from '../components/animations/Slide/Slide';
import AnimeGirl from '../components/characters/anime_girls/anime_girl';
import Taila from '../components/characters/Taila/Taila';
import Telimia from '../components/characters/Telimia/Telimia';

const AppRoutes = ({ isRotating }) => (
  <Routes>
  
    <Route path="/cube" element={<Cube />} />
    <Route path="/sphere" element={<Sphere />} />
    <Route path="/pyramid" element={<Pyramid />} />
    <Route path="/pentagon" element={<Pentagon />} />
    <Route path="/bounce" element={<Bounce />} />
    <Route path="/spin" element={<Spin />} />
    <Route path="/fade" element={<Fade/>} />
    <Route path="/slide" element={<Slide/>} />
    <Route path='/anime_girl' element={<AnimeGirl/>} />
    <Route path='/Taila' element={<Taila isRotating={isRotating} />} />  
    <Route path='/Telimia' element={<Telimia/>} />
    
  </Routes>
);

export default AppRoutes;
