import React from 'react'
import './index.css'
import img from '../../../assets/home/weightLifting.PNG'
const Stories = () => {
    const data=[
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
        {
           img:img,
            title:'Get you someone who elevates you like Stanislaw Szczyrba does Mutaz Barshim',
            description:'Working relationships don’t get much more intense than between athlete and coach. High jumper Mutaz …'
        },
    ]
    const card = (item, index)=>{
        return(
            <div className="story-card" key={index} style={{borderRadius:20}}>
                <img className="story-card-img" src={item.img}/>
                <div className="story-card-content">
                    <p className="card-title">{item.title}</p>
                    <p className="card-description">{item.description}</p>
                    <div className="story-card-btn">
                        <p className="story-card-btn-text">Read More</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="stories-container">
        <div className="black-bg">
        <h2 className="stories-heading">Discover <span>Stories</span> </h2>
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            overflowX:'scroll',

        }}>
            {data.map((item,index)=> card(item,index))}
        </div>
        </div>
        </div>
    )
}

export default Stories
