import React, { Component } from 'react' 
import './index.css'
import career11img from '../../../assets/Gallery/1-1.png'
import career12img from '../../../assets/Gallery/1-2.png'
import career13img from '../../../assets/Gallery/1-3.png'
import career14img from '../../../assets/Gallery/1-4.png'
import career15img from '../../../assets/Gallery/1-5.png'
import career16img from '../../../assets/Gallery/1-6.png'
import career17img from '../../../assets/Gallery/1-7.png'
import career18img from '../../../assets/Gallery/1-8.png'
import career19img from '../../../assets/Gallery/1-9.png'
import career110img from '../../../assets/Gallery/1-10.png'
import career111img from '../../../assets/Gallery/1-11.png'
import career112img from '../../../assets/Gallery/1-12.png'

import career21img from '../../../assets/Gallery/2-1.png'
import career22img from '../../../assets/Gallery/2-2.png'
import career23img from '../../../assets/Gallery/2-3.png'
import career24img from '../../../assets/Gallery/2-4.png'
import career25img from '../../../assets/Gallery/2-5.png'
import career26img from '../../../assets/Gallery/2-6.png'
import career27img from '../../../assets/Gallery/2-7.png'
import career28img from '../../../assets/Gallery/2-8.png'
import career29img from '../../../assets/Gallery/2-9.png'
import career210img from '../../../assets/Gallery/2-10.png'
import career211img from '../../../assets/Gallery/2-11.png'
import career212img from '../../../assets/Gallery/2-12.png'
import career213img from '../../../assets/Gallery/2-13.png'
import career214img from '../../../assets/Gallery/2-14.png'

import career31img from '../../../assets/Gallery/3-1.png'
import career32img from '../../../assets/Gallery/3-2.png'
import career33img from '../../../assets/Gallery/3-3.png'
import career34img from '../../../assets/Gallery/3-4.png'
import career35img from '../../../assets/Gallery/3-5.png'
import career36img from '../../../assets/Gallery/3-6.png'
import career37img from '../../../assets/Gallery/3-7.png'
import career38img from '../../../assets/Gallery/3-8.png'
import career39img from '../../../assets/Gallery/3-9.png'
import career310img from '../../../assets/Gallery/3-10.png'
import career311img from '../../../assets/Gallery/3-11.png'
import career312img from '../../../assets/Gallery/3-12.png'
import career313img from '../../../assets/Gallery/3-13.png'


class Gallery extends Component{
    render(){
        return(
            <div className="gallery-container">
                <div class="row1">
                    <div className="double-img-horizontal">
                        <img src={career11img} className="square"/>
                        <img src={career12img} className="square"/>
                    </div>
                    <img src={career13img} className="horizontal"/>
                    <img src={career14img} className="vertical"/>
                    <div className="double-img-horizontal">
                        <img src={career15img} className="square"/>
                        <img src={career16img} className="square"/>
                    </div>
                    <img src={career17img} className="horizontal"/>
                    <img src={career18img} className="vertical"/>
                    <div className="double-img-horizontal">
                        <img src={career19img} className="square"/>
                        <img src={career110img} className="square"/>
                    </div>
                    <img src={career111img} className="horizontal"/>
                    <img src={career112img} className="vertical"/>
                    {/*
                    <div class="column">
                        <div className="double-img horizontal">
                            <img src={career11img} className="square"/>
                            <img src={career12img} className="square"/>
                            <img src={career13img} className="horizontal"/>
                        </div>
                        <img src={career14img} className="vertical"/>
                    </div>
                    
                    <div class="column">
                        <div className="double-img horizontal">
                            <img src={career15img} className="square"/>
                            <img src={career16img} className="square"/>
                            <img src={career17img} className="horizontal"/>
                        </div>
                        <img src={career18img} className="vertical"/>
                    </div>
                    <div class="column">
                        <div className="double-img horizontal">
                            <img src={career19img} className="square"/>
                            <img src={career110img} className="square"/>
                            <img src={career111img} className="horizontal"/>
                        </div>
                        <img src={career112img} className="vertical"/>
                    </div>

                    */}
                </div>
                <div class="row2"> 
                    <div className="double-img-vertical">
                        <img src={career21img} className="square"/>
                        <img src={career22img} className="square"/>
                    </div>
                    <img src={career23img} className="vertical"/>
                    <img src={career24img} className="horizontal"/>
                    <div className="double-img-horizontal">
                        <img src={career25img} className="square"/>
                        <img src={career26img} className="square"/>
                    </div>
                    <div className="double-img-horizontal">
                        <img src={career27img} className="square"/>
                        <img src={career28img} className="square"/>
                    </div>
                    <img src={career29img} className="horizontal"/>
                    <div className="double-img-vertical">
                        <img src={career210img} className="square"/>
                        <img src={career211img} className="square"/>
                    </div>
                    <div className="double-img-horizontal">
                        <img src={career212img} className="square"/>
                        <img src={career213img} className="square"/>
                    </div>
                    <img src={career214img} className="horizontal"/>
                    
                </div>

                <div class="row3"> 
                    <img src={career31img} className="vertical"/>
                    <img src={career32img} className="horizontal"/>
                    <div className="double-img-horizontal">
                        <img src={career33img} className="square"/>
                        <img src={career34img} className="square"/>
                    </div>
                    <div className="double-img-horizontal">
                        <img src={career35img} className="square"/>
                        <img src={career36img} className="square"/>
                    </div>
                    <img src={career37img} className="horizontal"/>
                    <img src={career38img} className="vertical"/>

                    <div className="double-img-vertical">
                        <img src={career39img} className="square"/>
                        <img src={career310img} className="square"/>
                    </div>
                    <div className="double-img-horizontal">
                        <img src={career311img} className="square"/>
                        <img src={career312img} className="square"/>
                    </div>
                    <img src={career313img} className="horizontal"/>  
                    
                </div>


                
            </div>
        )
    }
}

export default Gallery;