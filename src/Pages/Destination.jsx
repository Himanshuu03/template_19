import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Destination() {
  return (
    <div>
      <Header/>
    <header className="header">
        <h1 className="title">Welcome to Your Creative Destination</h1>
    </header>
    <nav className="navigation">
        <ul className="nav-list">
            <li className="nav-item"><a href="#section1">Explore</a></li>
            <li className="nav-item"><a href="#section2">Discover</a></li>
            <li className="nav-item"><a href="#section3">Enjoy</a></li>
        </ul>
    </nav>
    <main className="contentss">
        <section id="section1" className="section">
            <h2 className="section-title">Explore</h2>
            <p className="section-description">Unleash your inner explorer and embark on a journey of a lifetime.</p>
        </section>

        <section id="section2" className="section">
            <h2 className="section-title">Discover</h2>
            <p className="section-description">Discover hidden treasures and new experiences at every turn.</p>
        </section>

        <section id="section3" className="section">
            <h2 className="section-title">Enjoy</h2>
            <p className="section-description">Relax, indulge, and savor the moments in this paradise.</p>
        </section>
    </main>

    <Footer/>

    </div>
  )
}

export default Destination