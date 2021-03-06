import React from 'react'  
import bgImg from '../../../assets/home/layer2.jpg'
import leftSponer from '../../../assets/home/Group23.png'
import person from '../../../assets/home/person.png'
import logoEng from '../../../assets/home/logoeng.png'
import Chevroletlogo from '../../../assets/sponsers/Chevroletlogo.png'
import Googlecolor from '../../../assets/sponsers/Googlecolor.png'
import nike from '../../../assets/sponsers/nike.png'
import Oakleylogo from '../../../assets/sponsers/Oakleylogo.png'
import name from '../../../assets/home/name.PNG'
import Redbulllogo from '../../../assets/sponsers/Redbulllogo.png'
import Richardmille from '../../../assets/sponsers/Richardmille.png'
import { FaFacebookF ,FaTwitter, FaInstagram,FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './index.css'

const Banner = () => {
  return (
    <div className={'banner-container'}>
      <img src={bgImg} className={'banner-bg'} />
      <div className={'banner-content-container'}>
        <img className={'name-img'} src={name} />
        {/* <p className={'banner-title'}>Mutaz Barshim</p> */}
        <div className={'banner-img-container'}>
          <img className={'left-img'} src={leftSponer} />
          <img className={'center-person-img'} src={person} />
          <img className={'right-img'} src={logoEng} />
        </div>
        <div className='menu-container'> 
          <div className='menu-link-container'>
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
          <div className='menu-btn-container '>
            <div className='menu-icon-btn'>
                <FaFacebookF className={'menu-icon'} />
            </div>
            <div className='menu-icon-btn'>
                <FaTwitter className={'menu-icon'} />
            </div>
            <div className='menu-icon-btn'>
                <FaInstagram className={'menu-icon'} />
            </div>
            <div className='menu-icon-btn'>
                <FaYoutube className={'menu-icon'} />
            </div>
          </div>
        </div>
        <div className='banner-sponser-container row'>
          <div className='sponser-box chevrolet  col-md-2 col-sm-12'>
            <img src={Chevroletlogo} />
          </div>
          <div className='sponser-box nike  col-md-2 col-sm-12'>
            <img src={nike} /> 
          </div>
          <div className='sponser-box red-bull col-md-2 col-sm-12'>
            <img src={Redbulllogo} />
          </div>
          <div className='sponser-box richard-mille col-md-2 col-sm-12'>
            <img src={Richardmille} />
          </div>
          <div className='sponser-box google-cloud col-md-2 col-sm-12'>
            <img src={Googlecolor} />
          </div>
          <div className='sponser-box oakley col-md-2 col-sm-12'>
            <img src={Oakleylogo} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Banner
