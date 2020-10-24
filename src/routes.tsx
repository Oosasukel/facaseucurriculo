import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}

export default Routes;
