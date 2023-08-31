import React from 'react'
import "../../../Style/scss/Pages/Video.scss"
import { FaPlay } from "react-icons/fa";
const Video = () => {
  return (
    <div className='video_section'>
        <aside>
        <p>WHAT OUR LASTEST VIDEO</p>
        <h1>Let’s Take a Small Tour <br />
             From Our Campus</h1>
             <button>Registration</button>
        </aside>
        <aside>
            <div className="play_pause">
               <span><FaPlay/></span> 
            </div>
        </aside>

    </div>
  )
}

export default Video