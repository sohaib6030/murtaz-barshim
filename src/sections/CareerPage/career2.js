import React, { Component } from 'react' 
import './index.css'
import career2img from '../../assets/career/careerPage-2.png'

class career2 extends Component{
    render(){
        return( 
            <div className="career-2-container">
                <div className="career-bg">
                </div>
                <div className="career2-1-container">

                    <div className="career2-1-container-image">
                        <img src={career2img} />
                    </div>
                    <div className="career2-1-container-content">
                        <div className="career2-1-content-header">
                            <h1>Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim</h1>
                        </div>
                        <div className="career2-1-content-content">
                            <p>From the moment Barshim’s coach, Stanley Szczyrba, took him under his wing in September 2009 to guide him into the league of world champions, he has devoted his heart, mind, and body to the world of sport. </p>
                            <p>Barshim immediately hit the ground running with an early breakout into international stardom at the young age of 19. He set Qatari records in Gothenburg, Sweden with a 2.25 m. jump in February 2010.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default career2;