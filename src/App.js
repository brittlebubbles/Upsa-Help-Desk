import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForumDetails from "./components/ForumDetails";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
// import NavBar from "./components/NavBar";
import Forum from "./pages/Forum";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} />

          <Route path="/forum/:id" component={ForumDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
