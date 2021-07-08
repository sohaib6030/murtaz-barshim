import React, { Component } from 'react'
import './index.css'
import { FaFacebookF ,FaTwitter, FaInstagram,FaYoutube ,FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa'

class contact extends Component{
    render(){ 
        return(
            <div className="contact-container">
                <div className="intro" style={{marginLeft:'-10%'}}>
                    <h1>Connect</h1>
                    <p>WITH THE MUTAZ TEAM</p>
                </div>

                <div className="social-connect"  style={{marginLeft:'12%'}}> 
                    <div class="icon">
                        <a href="https://www.facebook.com" target="_blank">
                           <FaFacebookF  className="connect-social-icon-component"/>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.twitter.com" target="_blank">
                            <FaTwitter  className="connect-social-icon-component"/>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.instagram.com/?hl=en" target="_blank">
                           <FaInstagram  className="connect-social-icon-component"/>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.youtube.com/" target="_blank">
                            <FaYoutube  className="connect-social-icon-component"/>
                        </a>
                    </div>
                </div>

                <div className="contacts"  style={{marginLeft:'15%'}}>
                    <div className="item">
                        <div className="icon">
                           <FaPhone/>
                        </div>
                        <div className="text">
                            <p>+974 6696 7125</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">
                          <FaGlobe/>
                        </div>
                        <div className="text">
                            <p>www.Mutazbarshim.Net</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">
                           <FaEnvelope/>
                        </div>
                        <div className="text">
                            <p>contact@mutazbarshim.net</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default contact;

