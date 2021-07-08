import React, { Component } from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class menuBtn extends Component{
    render(){ 
        return(

            <div className="menu-btn" >
                <Link to="/Menu" className="menu">
                    <span></span>
                </Link>
            </div>
        )
    }
}

export default menuBtn;