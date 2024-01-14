import React from 'react';
import NavigationBar from './components/navigation-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/sign-up';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
