import {Component} from 'react'
import './index.css' 
import {Link} from 'react-router-dom'

class single1 extends Component{
    render(){
        return(
            <div className="singleStory-container">
                <div className="content-container">
                    <div className="heading">
                        <h1>The day Mutaz Barshim shook off injury and leapt for gold</h1>
                    </div>
                    <div className="content">
                        <div className="item">
                            <h3>The snapshot:</h3>
                            <p>October 2019, Khalifa International Stadium, Doha, Qatar. World high jump champion Mutaz Essa Barshim attempted to 
                                become the first man in history to successfully defend that particular title – and he had to do it in less than 
                                perfect physical condition.</p>
                        </div>
                        <div className="item">
                            <h3>The credentials:</h3>
                            <p>As well as winning the 2017 World Championships in London, with a leap of 2.35m, Barshim is a double Olympic 
                                medalist and came within two centimetres of equalling Javier Sotomayor’s longstanding world record of 2.45m. 
                                Barshim’s career-best leap of 2.43m, achieved in Brussels, Belgium in 2014, is the second-highest of all-time 
                                and the closest anyone has come to breaking Sotomayor’s mark, which was set way back in 1993.</p>
                        </div>
                        <div className="item">
                            <h3>The background:</h3>
                            <p>Almost exactly 12 months before the 2019 World Championships, retaining his 2017 world title appeared highly unlikely at 
                                best after Barshim twisted his ankle in Hungary, leading to what he described as a “nightmare” lay-off.
                                “I think one year ago [before the World Championships] I got off the crutches and I took my first step,” he revealed. 
                                “My injury was very serious, it could have been career-ending. Then you start questioning yourself – it’s normal when you’re 
                                facing a difficult situation.”
                                But Barshim wasn’t going to let this setback stop him from giving it everything he had to land gold in front of his fans.
                                “I felt like, OK it doesn’t matter what happens tonight, if I injure myself, if it’s my last competition, I’m going to push 
                                everything out,” he said.</p>
                        </div>
                    </div>
                </div>
                <div className="images">
                    <div className="cross-btn">
                        <Link to="/Stories1" className="cross">
                            <i class="fa fa-times"></i>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default single1;


