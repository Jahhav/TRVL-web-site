import React from 'react';
import NavigationBar from './components/navigation-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/sign-up';
import DeepForest from './components/pages/deep-forest';
import Islands from './components/pages/islands';
import MysteryCruise from './components/pages/mystery-cruise';
import Football from './components/pages/football';
import DesertTour from './components/pages/desert-tour';
import VideoPlay from './components/pages/video-play';

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
          <Route path='/deep-forest' Component={DeepForest} />
          <Route path='/islands' Component={Islands} />
          <Route path='/mystery-cruise' Component={MysteryCruise} />
          <Route path='/football' Component={Football} />
          <Route path='/desert-tour' Component={DesertTour} />
          <Route path='/video-play' Component={VideoPlay} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
