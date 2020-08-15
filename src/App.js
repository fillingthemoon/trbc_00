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
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/joinus" exact component={AboutUs} />
          <Route path="/imnew" exact component={AboutUs} />
          <Route path="/outreach" exact component={AboutUs} />
          <Route path="/missions" exact component={AboutUs} />
          <Route path="/discipleship" exact component={AboutUs} />
          <Route path="/facilitybookings" exact component={AboutUs} />
          <Route path="/resources" exact component={AboutUs} />
        </Switch>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
