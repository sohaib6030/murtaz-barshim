import React, { Component } from 'react'
import './index.css'
import career1img from '../../../assets/Gallery/career1~-img.png'
import career2img from '../../../assets/career/career2-img.png'
import career3img from '../../../assets/career/career3-img.png'


class Gallery extends Component{
    render(){
        return(
            <div className="gallery-container">
                <div class="row">
                    <div class="column">
                        <img src={career1img} />
                        <img src={career2img}/>
                        <img src={career3img} />
                    </div>
                    <div class="column">
                        <img src={career1img} />
                        <img src={career2img}/>
                        <img src={career3img} />
                    </div>
                    <div class="column">
                        <img src={career1img} />
                        <img src={career2img}/>
                        <img src={career3img} />
                    </div>
                    <div class="column">
                        <img src={career1img} />
                        <img src={career2img}/>
                        <img src={career3img} />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Gallery;