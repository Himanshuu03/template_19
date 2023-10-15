import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Promotions() {
  return (
    <div>
      <Header/>
      <div>
      <header className="promo-header">
        <h1 className="promo-title">Exclusive Promotion</h1>
        <p className="promo-subtitle">Limited Time Offer</p>
    </header>
    <main className="promo-content">
        <section className="promo-offer">
            <div className="promo-image">
                <img src={require("../images/nature3.jpeg")} alt="Promotion" />
            </div>
            <div className="promo-details">
                <h2 className="promo-offer-title">Get 50% Off</h2>
                <p className="promo-offer-description">Experience the best with our special promotion.</p>
                <p className="promo-offer-price"><span className="original-price">5000</span> 2500</p>
                <p className="promo-offer-button">Book Now</p>
            </div>
        </section>
        <section className="promo-offer">
            <div className="promo-image">
                <img src={require("../images/nature1.jpeg")} alt="Promotion" />
            </div>
            <div className="promo-details">
                <h2 className="promo-offer-title">Get 50% Off</h2>
                <p className="promo-offer-description">Experience the best with our special promotion.</p>
                <p className="promo-offer-price"><span className="original-price">5000</span> 2500</p>
                <p className="promo-offer-button">Book Now</p>
            </div>
        </section>
        <section className="promo-offer">
            <div className="promo-image">
                <img src={require("../images/nature5.jpeg")} alt="Promotion" />
            </div>
            <div className="promo-details">
                <h2 className="promo-offer-title">Get 50% Off</h2>
                <p className="promo-offer-description">Experience the best with our special promotion.</p>
                <p className="promo-offer-price"><span className="original-price">5000</span> 2500</p>
                <p className="promo-offer-button">Book Now</p>
            </div>
        </section>
    </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Promotions