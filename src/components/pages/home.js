import React from 'react';
import '../../App.css'
import HeroSection from '../hero-section'
import Cards from '../cards';
import Footer from '../footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;