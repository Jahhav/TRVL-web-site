import React, { useState } from 'react'
import '../hero-section.css'

export default function VideoPlay() {

    const videos = ['videos/video-1.mp4', 'videos/video-2.mp4', 'videos/video-3.mp4', 'videos/video-4.mp4', 'videos/video-5.mp4']
    const [video, setVideo] = useState(videos[0])

    const handleClickRight = () => {
        const currentIndex = videos.indexOf(video)
        if (currentIndex < 4) {
            setVideo(videos[currentIndex + 1])
        }
    }

    const handleClickLeft = () => {
        const currentIndex = videos.indexOf(video)
        if (currentIndex > 0) {
            setVideo(videos[currentIndex - 1])
        }
    }


    return (
        <div className='video-container'>
            <video src={video} autoPlay loop muted />
            <div className='arrow-box'>
                <i class="fa-solid fa-angle-left" onClick={handleClickLeft}></i>
                <i class="fa-solid fa-angle-right" onClick={handleClickRight}></i>
            </div>
        </div>
    )
}
