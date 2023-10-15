import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <div>
      <Header/>
      <div className='gallery-cotainer'>

    <header className="gallery-header">
        <h1 className="gallery-title">Capture the Moments of Love</h1>
    </header>
    <main className="gallery-container">
        <div className="gallery-item">
            <img src={require("../images/image_12.png")} alt="Wedding" className="gallery-image" />
            <div className="gallery-caption">
                <h2 className="caption-title">Beautiful Couple</h2>
                <p className="caption-description">A snapshot of their special day.</p>
            </div>
        </div>
        <div className="gallery-item">
        <img src={require("../images/image_2.png")} alt="Wedding" className="gallery-image" />
            <div className="gallery-caption">
                <h2 className="caption-title">Romantic Moments</h2>
                <p className="caption-description">Love and happiness in every frame.</p>
            </div>
        </div>
        <div className="gallery-item">
        <img src={require("../images/nature2.jpeg")} alt="Wedding" className="gallery-image" />
            <div className="gallery-caption">
                <h2 className="caption-title">Memories Forever</h2>
                <p className="caption-description">The start of a beautiful journey.</p>
            </div>
        </div>
    </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery