import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.less";
import NavBarAntd from "./components/NavBarAntd";
// import NavBar from "./components/NavBar";
import Vision from "./pages/Vision";
import OurHistory from "./pages/OurHistory";
import ImNew from "./pages/ImNew";
import Outreach from "./pages/Outreach";
import Missions from "./pages/Missions";
import Discipleship from "./pages/Discipleship";
import FacilityBookings from "./pages/FacilityBookings";
import OurTeam from "./pages/OurTeam";
import Statement from "./pages/Statement";
import Resources from "./pages/Resources";
import ContactFooter from "./components/ContactFooter";
import ChurchWide from "./pages/ChurchWide";
import Event from "./pages/Event"
import Services from "./pages/Services"

function App() {
  return (
    <Router>
      <div>
        {/* <NavBar/> */}
        <NavBarAntd />

        <Switch>
          <Route path="/" exact component={Vision} />
          <Route path="/trbc_00/ourhistory" exact component={OurHistory} />
          <Route path="/trbc_00/vision" exact component={Vision} />
          <Route path="/trbc_00/imnew" exact component={ImNew} />
          <Route path="/trbc_00/outreach" exact component={Outreach} />
          <Route path="/trbc_00/missions" exact component={Missions} />
          <Route path="/trbc_00/discipleship" exact component={Discipleship} />
          <Route path="/trbc_00/ourteam" exact component={OurTeam} />
          <Route path="/trbc_00/statement" exact component={Statement} />
          <Route path="/trbc_00/church-wide" exact component={ChurchWide} />
          <Route path="/trbc_00/services" exact component={Services} />
          <Route exact path="/trbc_00/church-wide/:id" component={Event} />
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
