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
const AppRoutes = () => (
  <Routes>
  
    <Route path="/cube" element={<Cube />} />
    <Route path="/sphere" element={<Sphere />} />
    <Route path="/pyramid" element={<Pyramid />} />
    <Route path="/pentagon" element={<Pentagon />} />
    <Route path="/bounce" element={<Bounce />} />
    <Route path="/spin" element={<Spin />} />
    <Route path="/fade" element={<Fade/>} />

  </Routes>
);

export default AppRoutes;
