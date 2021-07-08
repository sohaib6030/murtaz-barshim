import React, { Component } from 'react'
import './index.css'
import Career1 from '../CareerPage/career1'
import Career2 from '../CareerPage/career2'
import Career3 from '../CareerPage/career3'

class CareerAll extends Component{
    render(){
        return(
            <div>
                {<Career1 />}
                {<Career2 />}
                {<Career3 />}
            </div>
        )
    }
}

export default CareerAll