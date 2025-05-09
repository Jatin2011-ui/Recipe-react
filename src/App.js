import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Food from './Component/Food'; // Ensure folder name matches
import Recipe from './Component/Recipe'; // Ensure folder name matches

function App() {
  return (
    <Routes>
      <Route path='/' element={<Food />} />
      <Route path='/:mealid' element={<Recipe />} />
    </Routes>
  );
}

export default App;
