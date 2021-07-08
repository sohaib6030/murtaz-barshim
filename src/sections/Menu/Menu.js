import {Component} from 'react'
import './index.css'

import RichardMille from '../../assets/sponsers/Richardmille.png'
import AspireAcademy from '../../assets/sponsers/Googlecolor.png'
import Nike from '../../assets/sponsers/nike.png'
import RedBull from '../../assets/sponsers/Redbulllogo.png'
import Oakley from '../../assets/sponsers/Oakleylogo.png'
import Chevrolet from '../../assets/sponsers/Chevroletlogo.png'
import { FaFacebookF ,FaTwitter, FaInstagram,FaYoutube,FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'


class Menu extends Component{


    render(){

        return(
            <div className="menu-main-container">
                <div className="media-connect-container">
                    <div className="menu-media-connect">
                        <div className="icon">
                            <a href="https://www.facebook.com" target="_blank">
                                <FaFacebookF className="icon-component"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.twitter.com" target="_blank">
                                <FaTwitter className="icon-component"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/?hl=en" target="_blank">
                                <FaInstagram className="icon-component"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.youtube.com/" target="_blank">
                              <FaYoutube className="icon-component"/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="menu-sponsors-logo">
                <div className="sponsor-item chevrolet">
                        <img src={Chevrolet}></img>
                    </div>
                    <div className="sponsor-item nike">
                        <img src={Nike}></img>
                    </div>
                    <div className="sponsor-item red-bull">
                        <img src={RedBull}></img>
                    </div>
                    <div className="sponsor-item richard-mille">
                        <img src={RichardMille}></img>
                    </div>
                    
                    <div className="sponsor-item google-cloud ">
                        <img src={AspireAcademy}></img>
                    </div>
                    <div className="sponsor-item oakley">
                        <img src={Oakley}></img>
                    </div>

                </div>
                <div className="menu-link-btns">
                    <div className="top">
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/'>Home</Link>
                        </div>
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/Career'>Career</Link>
                        </div>
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/Achievement10'>Achievments</Link>
                        </div>
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/Sponsors1'>Sponsors</Link>
                        </div>
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/Stories1'>Stories</Link>
                        </div>
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/Gallery'>Gallery</Link>
                        </div>
                        <div className="menu-link-btn">
                            <Link className='menu-link' to='/Connect'>Connect</Link>
                        </div>
                    </div>
                    <div class="bottom">
                        <div className="bottom-cross-btn">
                            <Link to="/" className="bottom-cross">
                                <FaTimes  className="icon-component"/>
                            </Link>
                        </div>

                    </div>
                
                </div>
            </div>
        )
    }
}

export default Menu;