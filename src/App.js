import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path="/" component={Landing} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
