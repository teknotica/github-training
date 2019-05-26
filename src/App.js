import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/home";
import Resources from "./pages/resources";
import Navigation from "./components/navigation";

const AppWrapper = props => (
  <div className="app-root">
    <Navigation />
    {props.children}
  </div>
);

const App = () => (
  <Router>
    <AppWrapper path="/">
      <Home path="/" />
      <Resources path="resources" />
    </AppWrapper>
  </Router>
);

export default App;
