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
          <div className='menu-link-container row'>
              <div className="menu-link-btn col-sm-12">
                <a  className='menu-link' href='#'>Home</a>
              </div>
              <div className="menu-link-btn col-md-12">
                <a  style={{marginLeft:-20}} className='menu-link' href='#'>Career</a>
              </div>
              <div className="menu-link-btn col-md-12">
                <a style={{marginLeft:-25}} className='menu-link' href='#'>Achievments</a>
              </div>
              <div className="menu-link-btn col-md-12">
                <a className='menu-link' href='#'>Sponsors</a>
              </div>
              <div className="menu-link-btn col-md-12">
                <a className='menu-link' href='#'>Partner</a>
              </div>
              <div className="menu-link-btn col-md-12">
                <a className='menu-link' href='#'>Gallery</a>
              </div>
              <div className="menu-link-btn col-md-12">
                <a className='menu-link' href='#'>Connect</a>
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
