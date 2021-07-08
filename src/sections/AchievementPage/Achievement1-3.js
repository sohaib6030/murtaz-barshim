import {Component} from 'react'
import './index.css'

class Achievement13 extends Component{
    render(){
        return(
            <div className="achievement1-3-container">
                <div className="achievement1-3-container-text"> 
                    <div className="achievement1-3-container-header">
                        <h1>At Least <span>3cm</span> to go</h1>
                    </div>
                    <div className="achievement1-3-container-content">
                        <div className="item">
                            <p>2.45m   |    Javier Sotomayor    |   World record 1993</p>
                            <p>2.43m   |      Mutaz Barshim       |   Diamond league 2014</p>
                            <p>2.38m   |      Mutaz Barshim       |   World championship moscow 2013</p>
                            <p>2.37m   |      Mutaz Barshim       |   World championship Doha 2019</p>
                            <p>2.35m   |      Mutaz Barshim       |   World championship London 2017</p>
                            <p>2.29m   |      Mutaz Barshim       |   Olympic games  2012</p>
                        </div>
                        {/*<div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>*/}
                    </div>
                    <a href="/Stories1" className="btn">see stories</a>
                </div>

                
            </div>
        )
    }
}

export default Achievement13;