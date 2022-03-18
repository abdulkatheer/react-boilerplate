import React from "react";
import pciDssLogo from "static/pci-dss-compliant-logo-vector.svg";
import Nav from "./nav";

const App = () => (
  <div>
    <Nav />
    <h1 className="wow">Hello</h1>
    <img src={pciDssLogo} />
  </div>
);

export default App;
