import {Component} from 'react'
import React from 'react'
import './index.css'
import img from '../../assets/achievments/home-brief.jpg'


const Achievement10 = (props) => {
    setTimeout(() => {
        props.history.push('/Achievement11')
    }, 5000)

   
        return(
            <>
            <img src={img} style={{ resizeMode:'cover' ,width:'100%', height:'100vh'}}/>
            <div className="achievement1-0-container" style={{backgroundColor:'rgba(120, 13, 47,0.9)'}}>
                <div className="achievement1-0-container-header">
                    <h2>achievements</h2>
                    <h4>career</h4>
                </div>
                <div className="achievement1-0-container-content-row">
                    {/*----- COLUMN-1 -----*/}
                    <div className="Achieve-column">
                        <div className="item">
                            <h3>olympic games</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p><span className="badge">S</span> 2016 - Silver</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2012 - Bronze</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>asian games</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p><span className="badge">G</span>2014-Gold</p>
                                </div>
                                <div className="content-item">
                                    <p><span className="badge">G</span>2014-Gold</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*----- COLUMN-2 -----*/}
                    <div className="Achieve-column">
                        <div className="item">
                            <h3>asian championship</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p><span className="badge">B</span> 2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p><span className="badge">S</span>2015 - Branze</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>asian championship</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>asian championship</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*----- COLUMN-3 -----*/}
                    <div className="Achieve-column">
                        <div className="item">
                            <h3>asian championship</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>asian championship</h3>
                            <div className="content">
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                                <div className="content-item">
                                    <p> <span className="badge">B</span>2015 - Branze</p>
                                </div>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>
            </>
        )
    
}

export default Achievement10;