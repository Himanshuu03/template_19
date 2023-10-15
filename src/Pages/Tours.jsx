import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Tours() {
  return (
    <div>
      <Header/>
      <div className='tours-container'>
    <header className="header">
        <h1 className="title">Discover Our Amazing Tours</h1>
    </header>
    <main className="content">
        <section className="tour-card">
            <div className="tour-image">
                <img src={require("../images/nature5.jpeg")}  alt="Tour"/>
            </div>
            <div className="tour-details">
                <h2 className="tour-title">Jungle Adventure</h2>
                <p className="tour-description">Explore the heart of the jungle with our guided tours.</p>
                <p className="tour-price">2490</p>
                <p className="tour-button">Book Now</p>
            </div>
        </section>

        <section className="tour-card">
            <div className="tour-image">
            <img src={require("../images/nature1.jpeg")}  alt="Tour"/>
            </div>
            <div className="tour-details">
                <h2 className="tour-title">Mountain Excursion</h2>
                <p className="tour-description">Conquer the highest peaks and embrace the breathtaking views.</p>
                <p className="tour-price">3000</p>
                <p className="tour-button">Book Now</p>
            </div>
        </section>

        <section className="tour-card">
            <div className="tour-image">
            <img src={require("../images/nature3.jpeg")}  alt="Tour"/>
            </div>
            <div className="tour-details">
                <h2 className="tour-title">Mountain Excursion</h2>
                <p className="tour-description">Conquer the highest peaks and embrace the breathtaking views.</p>
                <p className="tour-price">3000</p>
                <p className="tour-button">Book Now</p>
            </div>
        </section>


        <section className="tour-card">
            <div className="tour-image">
            <img src={require("../images/nature4.jpeg")}  alt="Tour"/>
            </div>
            <div className="tour-details">
                <h2 className="tour-title">Mountain Excursion</h2>
                <p className="tour-description">Conquer the highest peaks and embrace the breathtaking views.</p>
                <p className="tour-price">3000</p>
                <p className="tour-button">Book Now</p>
            </div>
        </section>
    </main>
    </div>
    <Footer/>
    </div>
  )
}

export default Tours