import {Component} from 'react'
import './index.css'
import Image9 from '../../assets/home/Image9.png'

const Achievement12 = (props) => {
    
    setTimeout(() => {
        props.history.push('/Achievement13')
    }, 5000)

        return(
            <div className="achievement1-2-container">
                <div className="achievement1-2-main-container">
                    <div className="achievement1-2-container-header">
                        <h1>The Golden Leap</h1>
                        <h5>To win another world Champion</h5>
                    </div>
                    <div className="achievement1-2-container-content">
                        
                        <p>Not only was Barshim lacking in competitive action coming into the championships, 
                            due to the injury and subsequent recovery, but he was also facing pressure from 
                            the expectant home crowd.</p>

                        <p>The championships had been criticised for a lack of crowds, but when Barshim showed up 
                            there was barely a spare seat in the house and the atmosphere ramped up significantly.</p>

                        <p>Somehow, Barshim was able to find his best form at just the right time, sailing over his opening 
                            four heights first time to put him in the lead with a season’s best 2.30m. Then, a clearance of 2.37m 
                            was enough to take the gold medal, ahead of Mikhail Akimenko and Ilya Ivanyuk, both of Russia. </p>

                        <p>“I wasn’t 100 percent ready, but with all these people cheering for me like this, I just forgot everything,
                            ” a delighted Barshim admitted after landing back-to-back World Championship golds.</p>
                    </div>
                </div>

            </div>
        )
    
}

export default Achievement12;