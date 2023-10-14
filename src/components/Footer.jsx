import React, { useState } from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import {RxCross2} from 'react-icons/rx'
import { NavLink } from 'react-router-dom';


function Footer() {
    const [state,setState] = useState(false);
  return (
    <div>
        <div className='footer-container'>
            <div className='f-c-p'>
                Contact an advisor
            </div>
                <div className='f-c-h-1'
                onClick={()=>setState(!state)}
                >
                    {
                        state ?(
                            <RxCross2/>
                        ):(
                            <IoMdArrowDropdown/>
                        )

                    }
                </div>
            <div className="f-c-1">
                <ul className={
                    "f-c-1-list " +(
                        state ?"active":""
                    )
                }>
                    <li>
                    <NavLink to="destination">
                       destination
                    </NavLink>  
                    </li>
                <li>
                <NavLink to="packages">
                    packages
                    </NavLink>
                    </li>
                <li>
                <NavLink to="tours">
                    tours
                    </NavLink>
                </li>
                <li>
                <NavLink to="promotions">
                    promotions
                    </NavLink>
                    </li>
                <li>
                <NavLink to="gallery">
                    gallery
                    </NavLink>
                    </li>
                <li>
                <NavLink to="contact">
                    contact
                    </NavLink>
                    </li>
                </ul>
            </div>


            <div className='f-c-2'>
            <img src={require('../images/1.11.png')} alt='ph'/>
              <div>
              <button>
                enter
              </button>
              <p>create new account</p>
              </div>
              <p className='f-c-2-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ut soluta maxime rerum autem itaque earum quibusdam saepe aperiam, neque nam, iusto odit culpa dolore
                </p>
            </div>


            <div className='f-c-3'>
                <p className='f-c-3-1'>
                    subscribe to<br/>our newsletter
                </p>
                <input type='email' placeholder='email'/>
                <div>
                <button>
                    sign up
                </button>
                </div>
                <p className='f-c-3-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ut soluta maxime rerum autem itaque earum quibusdam saepe aperiam, neque nam, iusto odit culpa dolore
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer