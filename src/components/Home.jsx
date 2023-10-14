import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <div className='landing-page'>
            <Header/>
            <div className='landing-page-content'>
             <p className='l-p-c-1'>your wedding on the best<br/>beaches in the world</p>
             <button className='l-p-c-2'>quote your event</button>
             <p className='l-p-c-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum velit quos magnam similique ut blanditiis! Delectus laudantium voluptates excepturi 
             </p>
            </div>
            <div className='l-p-c-4'>
                <img src={require('../images/shape_4.png')} alt='ph'/>
            </div>
        </div>
        <div className='places'>
            <div >
                <img src={require("../images/image_11.png")} alt='ph' className='places-img'/>
            </div>
            <div>
            <h1>Wedding</h1>
            <p className='place-wed-1'>
            amazing places<br/> to celebrate your<br/> wedding
            </p>
             <p className='place-wed-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum velit quos magnam similique ut blanditiis! Delectus laudantium voluptates excepturi dsvsdv 
             </p>
             <button>
                Search
             </button>
             <p className='place-wed-3'>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum velit quos magnam similique
             </p>
            </div>
        </div>

        <div className='last'>
            <div className='l-1'>
                <img src={require("../images/image_10.png")} alt='ph'/>
            </div>
            <div className='l-2'>
            <img src={require('../images/1.11.png')} alt='ph'/>
            <p>
             quote your honeymoon<br/>airplane and stay for guests<br/>package for bride and groom
            </p>
            </div>
            <div className='l-3'>
                <p className='l-3-1'>travel on your wedding</p>
                <div className='l-3-1-input'>
                <input placeholder='destination'/>
                </div>
                <div className='l-3-1-input'>
                <input placeholder='travel on your wedding'/>
                </div>
                <div className='l-3-1-input'>
                <input placeholder='nummber of guests'/>
                </div>
                <div className='l-3-1-input'>
                <input placeholder='days of stay'/>
                </div>
                <button>
                    find the best options
                </button>
                <p className='l-3-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ex voluptatem aperiam numquam cum nisi et asperiores repudiandae velit dolor nostrum corporis dignissimos eaque, quae ipsam itaque laborum sint vel.
                </p>
            </div>
        </div>

        <div className='best-beaches'>
        <div className='f-c-p-best'>
                Contact an advisor
            </div>
            <div className='b-b-text'>
                <h1>your wedding</h1>
                <p>on the best beaches</p>
                <img src={require("../images/heart_2.png")} alt='ph'/>
            </div>
        </div>

        <div className='photo-4'>
            <div className='ph-container'>
            <div className='ph-c-1'>
                <div className='ph-1'>
                    <img src={require("../images/image_5.png")} alt="ph" className='ph-img'/>
                </div>
                <div className='ph-1'>
                    <img src={require("../images/image_8.png")} alt="ph" className='ph-img'/>
                </div>
            </div>
            <div className='ph-c-2'>
                <div className='ph-1'>
                    <img src={require("../images/image_6.png")} alt="ph" className='ph-img'/>
                </div>
                <div className='ph-1'>
                    <img src={require("../images/image_7.png")} alt="ph" className='ph-img'/>
                </div>
            </div>
            </div>
            <div className='ph-container-2'>
                <p className='ph-c-2-1'>enjoy the <br/> best places to travel</p>
                <p className='ph-c-2-2'>get to seasonal offers and promotions</p>
                <button>
                    search here
                </button>
            </div>
        </div>



        <div className='center-photo'>
            <div className='c-p-1'>
                <p>
                airfare and accommodation <br/> packages for your guests
                </p>
            </div>
            <div className='c-p-2'>
                <img src={require("../images/image_3.png")} alt='ph'/>
            </div>
            <div className='c-p-3'>
            <img src={require("../images/heart_2.png")} alt='ph'/>
            <p className='c-p-3-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, perferendis est perspiciatis tempora quasi sequi animi saepe itaque nulla aspernatur officiis reiciendis quibusdam quidem
            </p>
            <button>
                Search
             </button>
             <p className='c-p-3-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos consequatur est, esse, recusandae explicabo praesentium obcaecati voluptas quaerat porro sit ipsa provident
             </p>
            </div>
            <div className='c-p-4'>
                <img src={require('../images/image_4.png')} alt='ph'/>
            </div>
            <div className='c-p-1-h'>
                <p>
                airfare and accommodation <br/> packages for your guests
                </p>
            </div>
        </div>
        <div className='center-heart'>
            <div className='sprinkler'>
                <img src={require("../images/texture_4.png")} alt='ph'/>
            </div>
            <div className='c-h-heart-2'>
                <img src={require("../images/heart.png")} alt='ph'/>
            </div>
        </div>
        <div className='signup-wedding'>
            <div className='s-w-1'>
                <p className='s-w-1-1'>sign up for our wedding newsletter and learn about the best destinations to celebrate your wedding</p>
                <input type='text' placeholder='name'/>
                <br/>
                <input type='email' placeholder='email'/>
                <br/>
                <button className='s-w-1-2'>sign up</button>
                <p className='s-w-1-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, cum suscipit? Atque, minima! Ullam sapiente voluptatum consequatur in id recusandae quia debitis, unde exercitationem laudantium eos perspiciatis sed labore aspernatur
                </p>
            </div>
            <div className='s-1-w-1'>
                <img src={require("../images/image.png")} alt='ph'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home