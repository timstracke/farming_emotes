import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Streamers from './components/Streamers';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/streamers' element={<Streamers />} />

    </Routes>
    <GlobalStyle />
  </Router>
  
);

export default App;