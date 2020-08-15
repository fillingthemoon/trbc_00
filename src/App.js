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
          <Route path="/trbc_00/" exact component={Home} />
          <Route path="/trbc_00/aboutus" exact component={AboutUs} />
          <Route path="/trbc_00/joinus" exact component={JoinUs} />
          <Route path="/trbc_00/imnew" exact component={ImNew} />
          <Route path="/trbc_00/outreach" exact component={Outreach} />
          <Route path="/trbc_00/missions" exact component={Missions} />
          <Route path="/trbc_00/discipleship" exact component={Discipleship} />
          <Route path="/trbc_00/facilitybookings" exact component={FacilityBookings} />
          <Route path="/trbc_00/resources" exact component={Resources} />
        </Switch>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
