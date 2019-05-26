import React from "react";
import { Link } from "@reach/router";

const Navigation = () => (
  <header className="App-header">
    <nav>
      <Link to="/">Home</Link> | <Link to="resources">Resources</Link>
    </nav>
  </header>
);

export default Navigation;
