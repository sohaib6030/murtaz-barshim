import React, { Component } from 'react'  
import './index.css'
import img1 from '../../../assets/home/homeAchievement1.png'
import img2 from '../../../assets/home/homeAchievement2.png'
import img3 from '../../../assets/home/homeAchievement3.png'
import img4 from '../../../assets/home/homeAchievement4.png'
import logo from '../../../assets/home/Group24.png'
import Image9 from '../../../assets/home/Image9.png'


export class Achievement1 extends Component {
  render () {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflow:"clip",
          height:'110vh'
        }}
        className='achievment1-container'
      >
        <div className='achievement1-main-container row col-md-8  '>
            <div className="col-md-8">

         
          <div style={{padding:'5%'}}>
            <p className='achievment1-title'>Mutaz</p>
            <p className='achievment1-subtitle'>
              <span>Barshim</span>
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '-50px',
                // marginBottom:'100px'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '30px',
                  border: '1px solid #ccc',
                  backgroundColor: 'white',
                  display: 'flex',
                  marginRight: '15px',
                  justifyContent: 'flex-end',
                  borderRadius: 4,
                 
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '30px',
                    backgroundColor: '#780d2f'
                  }}
                />
              </div>{' '}
              <p className='achievment1-place'>Doha, Qatar</p>{' '}
            </div>

            <div className={'row'} >
              <div className='col-md-3 col-sm-12'>
                <p className='achievement1-num'>29</p>
                <p className='achievement1-unit'>Age</p>
              </div>
              <div className='col-md-3 col-sm-12' style={{marginLeft:'-5%'}}>
                <p className='achievement1-num'>65</p>
                <p className='achievement1-unit'>Weight</p>
              </div>
              <div className='col-md-3 col-sm-12' style={{marginLeft:'-5%'}}>
                <p className='achievement1-num'>189</p>
                <p className='achievement1-unit'>Height</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-3">
              <img src={logo} style={{margin:'50px'}}/>
          </div>
          
{/*          <div className="">
            <div className="achievement1-container row">
              <div className="column">
                <div className="item">
                  <div className="pic">
                    <img src={img1} />
                  </div>
                  <div className="text">
                    <p className="h3" >Gold Medal</p>
                    <p className="p1">Doha World Championship 2019</p>
                  </div>
                </div>
                <div className="item">
                  <div className="pic">
                    <img src={img1} />
                  </div>
                  <div className="text">
                    <p className="h3" >Gold Medal</p>
                    <p className="p1">Doha World Championship 2019</p>
                  </div>
                </div>
              </div>
              <div className="column">
              <div className="item">
                  <div className="pic">
                    <img src={img1} />
                  </div>
                  <div className="text">
                    <p className="h3" >Gold Medal</p>
                    <p className="p1">Doha World Championship 2019</p>
                  </div>
                </div>
                <div className="item">
                <p className="h3" >Gold Medal</p>
                <p className="p1">Doha World Championship 2019</p>
                </div>
              </div>
            </div>
          </div>

*/}


          <div className='achivement1-main-container2 row'>
            <div className='col-md-6 row'>
              <div className='col-md-6 col-sm-12'>
                <img
                  src={img1}
                  style={{
                    width: 150,
                    objectFit: 'contain',
                    height: 75,
                    resizeMode: 'contain'
                  }}
                />
              </div>
              

              <div className='col-md-6 col-sm-12' style={{marginLeft:-18}}>
                <p className="h3" >Gold Medal</p>
                <p className="p1">Doha World Championship 2019</p>
              </div>
            </div>
            {/* 1st Achievemet ends */}
            <div className='col-md-6 row' >
              <div className='col-md-6 col-sm-12'>
                <img
                  src={img3}
                  style={{
                    width: 150,
                    objectFit: 'contain',
                    height: 75,
                    resizeMode: 'contain'
                  }}
                />
              </div>
              <div className='col-md-6 col-sm-12' style={{marginLeft:-30}}>
              <p className="h3" >Silver Medal</p>
                <p className="p1">Rio Olympics 2019</p>
              </div>
            </div>

            {/* 2nd Achievemet ends */}
          
          <div className='row'>
            <div className='col-md-6 row'>
              <div className='col-md-6 col-sm-12'>
                <img
                  src={img2}
                  style={{
                    width: 150,
                    objectFit: 'contain',
                    height: 75,
                    resizeMode: 'contain'
                  }}
                />
              </div>
              <div className='col-md-6 col-sm-12' style={{marginLeft:-18}}>
              <p className="h3" >Gold Medal</p>
                <p className="p1">London World Champoinship 2017</p>
              </div>
            </div>

            {/* 3rd Achievemet ends */}
            <div className='col-md-6 row'>
              <div className='col-md-6 col-sm-12'> 
                <img
                  src={img4}
                  style={{
                    width: 150,
                    objectFit: 'contain',
                    height: 75,
                    resizeMode: 'contain'
                  }}
                />
              </div>
              <div className='col-md-6 col-sm-12' style={{marginLeft:-18}}>
                <p className="h3" >Bronze Medal</p>
                <p className="p1">London Olympics 2012</p>
              </div>
            </div>
            {/* 4th Achievemet ends */}
          </div>
          </div>
        </div>
        <div className='achievement1-side-container col-md-3'>
            <div className="achivement1-box">
                <div className="num-circle">
                    <div className="num2">
                        13
                    </div>
                </div>
                <div className="num-text">
                    Golden Medal
                </div>
            </div> 
            <div className="achivement1-box">
                <div className="num-circle">
                    <div className="num2">
                        3
                    </div>
                </div>
                <div className="num-text">
                    Silver Medal
                </div>
            </div>
            <div className="achivement1-box">
                <div className="num-circle">
                    <div className="num2">
                        3
                    </div>
                </div>
                <div className="num-text">
                    Bronze Medal
                </div>
            </div>
            <img src={Image9} style={{position:"relative",
            // height:'100%',
            right:'43%',
             width:'200%', resizeMode:'contain', bottom:'29%'}}/>
            <div className="white-btn">
              <a className="white-btn2-text" href={"#"}>Discover More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Achievement1
