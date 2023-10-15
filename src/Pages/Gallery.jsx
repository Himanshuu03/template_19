import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <div>
      <Header/>
      <div class='gallery-cotainer'>

    <header class="gallery-header">
        <h1 class="gallery-title">Capture the Moments of Love</h1>
    </header>
    <main class="gallery-container">
        <div class="gallery-item">
            <img src={require("../images/image_12.png")} alt="Wedding" class="gallery-image" />
            <div class="gallery-caption">
                <h2 class="caption-title">Beautiful Couple</h2>
                <p class="caption-description">A snapshot of their special day.</p>
            </div>
        </div>
        <div class="gallery-item">
        <img src={require("../images/image_2.png")} alt="Wedding" class="gallery-image" />
            <div class="gallery-caption">
                <h2 class="caption-title">Romantic Moments</h2>
                <p class="caption-description">Love and happiness in every frame.</p>
            </div>
        </div>
        <div class="gallery-item">
        <img src={require("../images/nature2.jpeg")} alt="Wedding" class="gallery-image" />
            <div class="gallery-caption">
                <h2 class="caption-title">Memories Forever</h2>
                <p class="caption-description">The start of a beautiful journey.</p>
            </div>
        </div>
    </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery