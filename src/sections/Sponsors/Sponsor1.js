import {Component} from 'react'
import './index.css' 
import RichardMille from '../../assets/sponsers/Richardmille.png'
import AspireAcademy from '../../assets/sponsers/Googlecolor.png'
import Nike from '../../assets/sponsers/nike.png'
import RedBull from '../../assets/sponsers/Redbulllogo.png'
import Oakley from '../../assets/sponsers/Oakleylogo.png'
import Chevrolet from '../../assets/sponsers/Chevroletlogo.png'

import {Link} from 'react-router-dom'


class Sponsor1 extends Component{
    render(){
        return(
            <div className="sponsor1-container">
                <div className="sponsor1-container-content">
                        <Link to='/Sponsors2' className="sponsor-item richard-mille">
                    <div >
                            <img src={RichardMille} style={{width:'110%'}} />              
                    </div>
                  </Link>
                    <div className="sponsor-item google-cloud ">
                        <img src={AspireAcademy} />
                    </div>
                    <div className="sponsor-item nike">
                        <img src={Nike} />
                    </div>
                    <div className="sponsor-item red-bull">
                        <img src={RedBull} />
                    </div>
                    <div className="sponsor-item oakley">
                        <img src={Oakley} />
                    </div>
                    <div className="sponsor-item chevrolet">
                        <img src={Chevrolet} />
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default Sponsor1;