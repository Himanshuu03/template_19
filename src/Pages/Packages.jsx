import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Packages() {
  return (
    <div>
      <Header/>
      <header className="header">
        <h1 className="title">Packages</h1>
     </header>
      <div className='package-container'>
      <div className="card">
      <img src={require("../images/nature1.jpeg")} alt="Avatar"/>
        <div className="container">
          <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature2.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature3.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature4.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature5.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>


     <div className="card">
      <img src={require("../images/nature1.jpeg")} alt="Avatar"/>
        <div className="container">
          <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature2.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature3.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature4.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>

     <div className="card">
      <img src={require("../images/nature5.jpeg")} alt="Avatar"/>
        <div className="container">
        <h4><b>Package</b></h4> 
          <p>Rs.5000</p> 
        </div>
     </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Packages