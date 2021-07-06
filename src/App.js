import logo from './logo.svg';
import './App.css';
import HomePage from './sections/homePage';
import GlobalStyle from './globalStyles'
import Career1 from './sections/CareerPage/career1'
import Career2 from './sections/CareerPage/career2'
import Career3 from './sections/CareerPage/career3'
import Contacts from './sections/homePage/contact/contact' 
import CareerAll from './sections/CareerPage/CareerAll'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact path='/' component={HomePage} />
          <Route path='/Career' component={CareerAll} />
          {/* <GlobalStyle /> */}
          
          { /*<Career1 /> */}
          { /*<Career2 /> */}
          { /*<Career3 /> */}
          { /*<Contacts /> */}
          { /*<Gallery /> */}
          { /*<CareerAll /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
