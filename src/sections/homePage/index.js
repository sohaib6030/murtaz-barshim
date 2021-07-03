import React from 'react'
import Achievement1 from './achievements/achievement1'
import Banner from './banner'
import Brief from './brief'
import Stories from './stories'

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <div style={{marginTop:'20vh'}}></div>
            <Brief/>
            <Achievement1/>
            <div style={{zIndex:300}}>
                <Stories/>

            </div>
        </div>

    )
}

export default HomePage
