import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header/>
      <div className='contact-us-container'>
    <header className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
    </header>
    <main className="contact-form">
        <form className="contact-form-inner">
            <div className="form-group">
                <label>Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
                <label >Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
                <label >Message</label>
                <textarea id="message" className="form-control" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact