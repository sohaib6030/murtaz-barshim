import {Component} from 'react'
import './index.css'
import img from '../../assets/home/Image9.png'
const Achievement11 = (props) => {
    setTimeout(() => {
        props.history.push('/Achievement12')
    }, 5000)
        return(
            <div className="achievement1-1-container" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', height:'100vh', zIndex:10, backgroundColor:'white', overflow:'hidden'}}>
                <div className="achievement1-1-main-container">
                    <div className="achievement1-1-container-header">
                        <h1>Mutaz Barshim</h1>
                        <h5>A Top 10 World Athlete</h5>
                    </div>
                    <div className="achievement1-1-container-content">
                        <ol>
                            <li>Cristiano Ronaldo (Portugal)</li>
                            <li>Caeleb Dressel (United States)</li>
                            <li>Roger Federer (Switzerland)</li>
                            <li>Sun Yang (China)</li>
                            <li>Lewis Hamilton (Britain)</li>
                            <li>Kevin Durant (United States)</li>
                            <li style={{fontWeight:'bold'}}>Mutaz Essa Barshim (Qatar)</li>
                            <li>Serena Williams (United States)</li>
                            <li>Sarah Sjöström (Sweden)</li>
                            <li>Marcel Hirscher (Austria)</li>
                        </ol>
                    </div>
                </div>
                <div className="achievement1-1-side-container">
                  <img src={img} style={{position:'absolute', width:'60%', bottom:'0', right:'0'}}/>
                </div>

            </div>
        )
    
}

export default Achievement11;