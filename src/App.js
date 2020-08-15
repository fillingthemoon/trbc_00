import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import './style.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import JoinUs from './components/JoinUs';
import ImNew from './components/ImNew';
import Outreach from './components/Outreach';
import Missions from './components/Missions';
import Discipleship from './components/Discipleship';
import FacilityBookings from './components/FacilityBookings';
import Resources from './components/Resources';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/joinus" exact component={JoinUs} />
          <Route path="/imnew" exact component={ImNew} />
          <Route path="/outreach" exact component={Outreach} />
          <Route path="/missions" exact component={Missions} />
          <Route path="/discipleship" exact component={Discipleship} />
          <Route path="/facilitybookings" exact component={FacilityBookings} />
          <Route path="/resources" exact component={Resources} />
        </Switch>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
