import React, { Component } from 'react'
import './index.css'
import career3img from '../../assets/career/careerPage-3.png'

class career3 extends Component{
    render(){
        return(
            <div className="career3-container">
                <div className="career3-container-content">
                    <p>‘The Qatari Falcon’ is a nickname well-suited to high jumper Mutaz Barshim. The current world champion registered the second highest jump in history when he rose to 2m 43cm in 2014. Put simply, the man can fly.</p>
                    <p>Barshim’s accomplishments have quickly made him a poster boy of track and field, not just in his home country of Qatar, but across the whole athletic world. A Junior world champion in his teenage years, the Barshim has certainly lived up to his huge potential.</p>
                    <p>Barshim is making history with one soaring jump after another and clearly a lot has gone on behind the scenes to get this hugely talented athlete where he is today. That’s what we wanted to know more about so we asked him to take the Red Bull Wingfinder test.</p>
                    <p>The results revealed the four strongest personality traits that make up the Asian record holder. Here we ask him how those strengths created the athlete we see today.</p>
                    <a href="#" className="btn">See Achievements</a>
                </div>
                
                <div className="career3-container-image">
                    <img src={career3img} />
                </div>
            </div>
        )
    }
}

export default career3;