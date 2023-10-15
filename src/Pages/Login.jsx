import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/");
  }
  return (
    <div>
      <Header/>
      <div className='login-container'>
      <header className="contact-header">
        <h1 className="contact-title">Login</h1>
    </header>
    <main className="contact-form">
        <form className="contact-form-inner">
            <div className="form-group">
                <label>Email</label>
                <input type="text" id="name" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" id="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="submit-button"
            onClick={clickHandler}
            >Submit</button>
        </form>
    </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Login