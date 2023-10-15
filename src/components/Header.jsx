import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { NavLink, useNavigate } from 'react-router-dom';
function Header() {
    const [state,setState] = useState(false);
    const navigate = useNavigate();
    function getStarted(){
        navigate("login");
    }
  return (
    <div className='main-header'>
        <div>
            <img src={require('../images/1.11.png')} alt='ph'/>
        </div>
        <div className='navbar'>
            <h1>
                <NavLink to="/">
                Wedding
                </NavLink>
                </h1>
            <div className='navbar-icons' onClick={()=>{
                setState(!state);
            }}>
                {
                     state ?(
                        <RxCross2/>
                    ):(
                        <FaBars/>
                    )
                }
            </div>
            <ul className={
                "navbar-ul "+ (state ? "active":"")
            }>
                <li className='header-list'>
                    <NavLink to="/destination">
                       destination
                    </NavLink>  
                    </li>
                <li className='header-list'>
                <NavLink to="/packages">
                    packages
                    </NavLink>
                    </li>
                <li className='header-list'>
                <NavLink to="/tours">
                    tours
                    </NavLink>
                </li>
                <li className='header-list'>
                <NavLink to="/promotions">
                    promotions
                    </NavLink>
                    </li>
                <li className='header-list'>
                <NavLink to="/gallery">
                    gallery
                    </NavLink>
                    </li>
                <li className='header-list'>
                <NavLink to="/contact">
                    contact
                    </NavLink>
                    </li>

                <div className='nav-create-account'>
                <p>create new account</p>
                <button
                onClick={()=>{
                    getStarted();
                }}
                >enter</button>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Header