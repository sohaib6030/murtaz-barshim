import {Component} from 'react'
import './index.css'
import RedBull from '../../assets/sponsers/Redbulllogo.png'

class Sponsor3 extends Component{
    render(){
        return(
            <div className="sponsor3-container">
                <div className="logo">
                    <img src={RedBull} />

                </div>
            </div>
        )
    }
}

export default Sponsor3;