import {Component} from 'react'
import './index.css'
import SponsorImg1 from '../../assets/sponser2/1.png'
import SponsorImg2 from '../../assets/sponser2/2.png'
import SponsorImg3 from '../../assets/sponser2/3.png'

import {Link} from 'react-router-dom'

class Sponsor2 extends Component{
    render(){
        return(
            <div className="sponsor1-container">
                <div className="back-button">
                    <Link to='/Sponsors1'>BA</Link>
                </div>
                <div className="content">
                    <div className="heading">
                        <h1>Chevrolet Sponsorship with Mutaz Barshim</h1>
                    </div>
                    <div className="image">
                        <img src={SponsorImg1} />
                    </div>
                    <div className="text">
                        <p>Red Bull Athlete, Qatari High Jumper Mutaz Barshim returned to Doha earlier this month
                             following the continuous successes throughout the Summer.</p>
                        <p>Welcoming and honoring the World Champion, Red Bull gathered esteemed members of the Qatari press at a 
                            dinner held at Burj Al Hamam Restaurant at The Pearl, Doha, in the presence of His Excellency the Austrian 
                            Ambassador to Qatar Willy Kempell, and members of the Red Bull team.</p>
                        <p>Red Bull Athlete, Qatari High Jumper Mutaz Barshim returned to Doha earlier this month following the 
                            continuous successes throughout the Summer.</p>
                    </div>
                    <div className="double-image">
                        <div className="image1">
                            <img src={SponsorImg2} />
                        </div>
                        <div className="image2">
                            <img src={SponsorImg3} />
                        </div>
                        
                        
                    </div>
                    <div className="text">
                        <p>Red Bull Athlete, Qatari High Jumper Mutaz Barshim returned to Doha earlier this month
                             following the continuous successes throughout the Summer.</p>
                        <p>Welcoming and honoring the World Champion, Red Bull gathered esteemed members of the Qatari press at a 
                            dinner held at Burj Al Hamam Restaurant at The Pearl, Doha, in the presence of His Excellency the Austrian 
                            Ambassador to Qatar Willy Kempell, and members of the Red Bull team.</p>
                        <p>Red Bull Athlete, Qatari High Jumper Mutaz Barshim returned to Doha earlier this month following the 
                            continuous successes throughout the Summer.</p>
                    </div>

                </div>
                <div class="next-video-button">
                    <Link to='/Sponsors3'>NEXT</Link>
                </div>
            </div>
        )
    }
}

export default Sponsor2;