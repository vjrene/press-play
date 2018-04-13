import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import DiscoverMore from './Components/Pages/DiscoverMore';
import GoodVibes from './Components/Pages/GoodVibes';
import ThisIs from './Components/Pages/ThisIs';
import UltimateApp from './Components/Pages/UltimateApplicant';
import TopHits from './Components/Pages/TopHits';

import Erongo from './Components/Pages/Projects/Erongo';
import Vanessography from './Components/Pages/Projects/Vanessography';
import Idday from './Components/Pages/Projects/Idday';

import SideNav from './Components/Partials/SideNav';
import BottomNav from './Components/Partials/BottomNav';
import TopNav from './Components/Partials/TopNav';

class App extends Component {
  render() {
    return (
      <div className="App">

        <TopNav />

        <div className="app-container">

        <SideNav />
          <div className="app-content">

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/this-is' component={ThisIs} />
            <Route path='/top-hits' component={TopHits} />
            <Route path='/discover-more' component={DiscoverMore} />
            <Route path='/ultimate-applicant' component={UltimateApp} />
            <Route path='/good-vibes' component={GoodVibes} />

            {/* projects */}
            <Route path='/projects/erongo' component={Erongo} />
            <Route path='/projects/idday' component={Idday} />
            <Route path='/projects/vanessography' component={Vanessography} />
          </Switch>
          
          </div>
        
        </div>

        <BottomNav />
        
        </div>
    );
  }
}

export default App;
