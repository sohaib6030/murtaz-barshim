
import './App.css';
import HomePage from './sections/homePage';
import GlobalStyle from './globalStyles'
import Career1 from './sections/CareerPage/career1'
import Career2 from './sections/CareerPage/career2'
import Career3 from './sections/CareerPage/career3'
import Contacts from './sections/homePage/contact/contact' 
import CareerAll from './sections/CareerPage/CareerAll'
import Achievement10 from './sections/AchievementPage/Achievement1-0';
import Achievement11 from './sections/AchievementPage/Achievement1-1';
import Achievement12 from './sections/AchievementPage/Achievement1-2';
import Achievement13 from './sections/AchievementPage/Achievement1-3';
import Sponsor1 from './sections/Sponsors/Sponsor1'
import Sponsor2 from './sections/Sponsors/Sponsor2'
import Sponsor3 from './sections/Sponsors/Sponsor3'
import Single1 from './sections/Stories/single1'

import Menu from './sections/Menu/Menu'
import Stories1 from './sections/homePage/stories/index'
import Stories2 from './sections/Stories/single1'
import Connect from './sections/homePage/contact/contact'
import {BrowserRouter, Route} from 'react-router-dom'
import Gallery from './sections/homePage/Gallery/Gallery'

import menuBtn from './components/VerticalCarousel/menuBtn/menuBtn'

import MenuButton from './sections/homePage/MenuButton/MenuButton';


function App() {

  return (
    <BrowserRouter>
      <div className="App">

          {/*<Achievement10 />*/}

          <MenuButton />    
            
          <Route exact path='/' component={HomePage} />

          <Route path='/Career' component={CareerAll} /> 

          <Route path='/Achievement10' component={Achievement10} /> 
          <Route path='/Achievement11' component={Achievement11} /> 
          <Route path='/Achievement12' component={Achievement12} /> 
          <Route path='/Achievement13' component={Achievement13} /> 
          
          <Route path='/Sponsors1' component={Sponsor1} />    
          <Route path='/Sponsors2' component={Sponsor2} />
          <Route path='/Sponsors3' component={Sponsor3} />

          <Route path='/Stories1' component={Stories1} /> 
          <Route path='/Stories2' component={Stories2} /> 

          <Route path='/Gallery' component={Gallery} /> 

          <Route path='/Connect' component={Connect} /> 

          <Route path='/Menu' component={Menu} /> 

          
          {/* <GlobalStyle /> */}
          
          { /*<Career1 /> */}
          { /*<Career2 /> */}
          { /*<Career3 /> */}
          { /*<Contacts /> */}
          { /*<Gallery /> */}
          { /*<CareerAll /> */}
          { /*<Achievement10 />*/ }
          { /*<Achievement11 />*/ }
          { /*<Achievement12 /> */}
          { /*<Achievement13  /> */}

          { /*SPONSOR PAGES*/ }
          { /*<Sponsor1 /> */}
          { /*<Sponsor2 /> */}
          { /*<Sponsor3 /> */}

          { /*STORIES PAGES*/}
          { /*<Single1 />*/}

          {/*MENU PAGE*/}
          { /*<Menu />*/}
         
          
          
      </div>
    </BrowserRouter>
  );
}

export default App;
