import React, { useState } from 'react'
// import '../hero-section.css'
import './video-play.css'

export default function VideoPlay() {

    const videos = ['videos/video-1.mp4', 'videos/video-2.mp4', 'videos/video-3.mp4', 'videos/video-4.mp4', 'videos/video-5.mp4']
    const [video, setVideo] = useState(videos[0]);

    const navigateVideo = (direction) => {
        const currentIndex = videos.indexOf(video)
        const nextIndex = (currentIndex + direction + videos.length) % videos.length;
        setVideo(videos[nextIndex]);
    }


    return (
        <div className='video-body'>
            <div className='video-container'>
                <video src={video} autoPlay loop muted />
                <div className='arrow-box'>
                    <i class="fa-solid fa-angle-left arrow-icon" onClick={() => navigateVideo(-1)}></i>
                    <i class="fa-solid fa-angle-right arrow-icon" onClick={() => navigateVideo(1)}></i>
                </div>
            </div>
        </div>
    )
}
