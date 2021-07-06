import React, { Component } from 'react'
import './index.css'

class contact extends Component{
    render(){ 
        return(
            <div className="contact-container">
                <div className="intro">
                    <h1>Connect</h1>
                    <p>WITH THE MUTAZ TEAM</p>
                </div>

                <div className="social-connect"> 
                    <div class="icon">
                        <a href="https://www.facebook.com" target="_blank">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.twitter.com" target="_blank">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.instagram.com/?hl=en" target="_blank">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.youtube.com/" target="_blank">
                            <i class="fa fa-youtube-play"></i>
                        </a>
                    </div>
                </div>

                <div className="contacts">
                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div className="text">
                            <p>+974 6696 7125</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-globe"></i>
                        </div>
                        <div className="text">
                            <p>www.Mutazbarshim.Net</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">
                            <i class="fa fa-envelope-o"></i>
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

