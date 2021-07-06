import React, { Component } from 'react'
import './index.css'

class menuBtn extends Component{
    render(){ 
        return(
            <div className="menu-btn">
                <button type="button" class="nav-toggler">
                    <span></span>
                </button>
            </div>
        )
    }
}

export default menuBtn;