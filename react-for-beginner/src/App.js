import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Movie from './components/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
