import React from 'react'
import "../../Style/scss/Home/Features.css"
const Features = () => {
  return (
    <div className='features'>
      <div className="findYourCourse">
        <header>
          Find Your Course. Apply Hurry Up
        </header>
        <main>
          <input type="text" className='form-control' placeholder='Enter Keyword'/>
          <button className='btn'>Search Course</button>
        </main>
      </div>

      <div className="offer">
        <header className=' col-11 col-sm-10 col-md-9 col-lg-7 m-auto'>
          <h1>What We Offer For Growth Your Study</h1>
          <p> Ullamcorper morbi tincidunt ornare massa eget egestas purus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Nisl nisi scelerisque eu ultrices. Sed augue lacus viverra vitae congue eu. Vehicula ipsum a arcu cursus vitae congue. Ut morbi tincidunt augue interdum velit euismod in. Ultricies mi quis hendrerit dolor</p>
        </header>
      </div>
    </div>
  )
}

export default Features