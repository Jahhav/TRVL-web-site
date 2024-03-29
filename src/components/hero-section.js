import React from 'react'
import { Button } from './Button';

import './hero-section.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button pathLink="/sign-up" className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button pathLink="/video-play" className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>WATCH TRAILER
                    <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection;