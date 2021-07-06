import React, { Component } from 'react'
import './index.css'
import career1img from '../../assets/career/1.png'
import career2img from '../../assets/career/2.png'
import career3img from '../../assets/career/3.png'
import career4img from '../../assets/career/4.png'
import career5img from '../../assets/career/5.png'
import career6img from '../../assets/career/6.png'
import career7img from '../../assets/career/7.png'
import career8img from '../../assets/career/8.png'
import career9img from '../../assets/career/9.png'
import career10img from '../../assets/career/10.png'

class career1 extends Component{
    render(){
        return(
            <div className="career1-container">
                <div className="career1-image-container">
                    <div class="row">
                        <div class="column">
                            <img src={career1img} className="career1"/>
                            <img src={career2img} className="career2"/>
                            <img src={career3img} className="career3"/>
                        </div>
                        <div class="column">
                            <img src={career4img} className="career4"/>
                            <img src={career5img} className="career5"/>
                            <img src={career6img} className="career6"/>
                            <img src={career7img} className="career7"/>
                        </div>
                        <div class="column">
                            <img src={career8img} className="career8" />
                            <img src={career9img} className="career9"/>
                            <img src={career10img} className="career10"/>
                        </div>
                    </div>
                </div>
                <div className="career1-content-container">
                    <div className="career1-content-header">
                    <h1>Mutaz Barshim is a Qatari high jumping world champion, 
                        holder of the Asian record and, at 2.43m, has registered the 
                        second highest jump in history.</h1>
                    </div>
                    <div className="career1-content-body">
                        <p>Mutaz Barshim has always been into sports. He grew up in an extremely active family:
                            his father was an athlete and all his brothers practised sports regularly. 
                            As a child, his father used to take him to the local athletics club and he loved it. 
                            At around 11 years old, Mutaz started going to training by himself. 
                            Focusing on the high jump, Mutaz soon started to reach heights he never before thought possible… 
                            both figuratively and literally!</p>

                        <p>By the time he was 19, he had racked up a host of Junior Level titles, including four gold medals – 
                            one of which was at the World Championships – and earning the title of the 10th best Junior high jumper 
                            in history!</p>

                        <p>But it’s been in his adult career that Mutaz has really flourished. 
                            He’s the national record and Asian record holder with a best mark of 2.43m 
                            (the second-highest in history), he won bronze at the London 2012 Olympic Games, 
                            and went one better at the Rio Olympics to take silver. He also brought home the 
                            gold after an imperious display at the 2017 World Championships in London, and again in Doha in 2019, 
                            when he became the first man to successfully defend the world high jump title.</p>

                        <p>He’s also had plenty of success in the IAAF Diamond League, with some of his most memorable wins 
                            coming in Shanghai and in front of his home fans in Doha. “Sport is everything for me,” says Mutaz. 
                            “It’s my lifestyle, my job, my fun and my health. When I jump, I feel amazing, like I’m flying!” 
                            Mutaz is proud to say that he’s doing what he loves the most, the best way he can and in the future
                             he wishes to be a world record holder.</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default career1