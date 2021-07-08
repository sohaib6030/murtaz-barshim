import React, { Component } from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class MenuButton extends Component{
    render(){ 
        return(
            <div className="menu-btn-container">
                <div className="menu-btn" >
                    <a href="/Menu" className="menu">
                        <span></span>
                    </a>
                </div>
            </div>

        )
    }
}

export default MenuButton;