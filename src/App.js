import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.less";
import NavBarAntd from "./components/NavBarAntd";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import ImNew from "./pages/ImNew";
import Outreach from "./pages/Outreach";
import Missions from "./pages/Missions";
import Discipleship from "./pages/Discipleship";
import FacilityBookings from "./pages/FacilityBookings";
import Resources from "./pages/Resources";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <Router>
      <div>
        {/* <NavBar/> */}
        <NavBarAntd />

        <Switch>
          <Route path="/trbc_00/" exact component={Home} />
          <Route path="/trbc_00/aboutus" exact component={AboutUs} />
          <Route path="/trbc_00/joinus" exact component={JoinUs} />
          <Route path="/trbc_00/imnew" exact component={ImNew} />
          <Route path="/trbc_00/outreach" exact component={Outreach} />
          <Route path="/trbc_00/missions" exact component={Missions} />
          <Route path="/trbc_00/discipleship" exact component={Discipleship} />
          <Route
            path="/trbc_00/facilitybookings"
            exact
            component={FacilityBookings}
          />
          <Route path="/trbc_00/resources" exact component={Resources} />
        </Switch>

        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
