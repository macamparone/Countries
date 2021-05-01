import React, { Fragment } from "react";
import Activities from "../src/components/Activities";
import NavBar from "../src/components/NavBar";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CardDetail from "./components/CardDetail";
import LoadActivity from "./Pages/LoadActivity"
import ActivityDetail from "./components/ActivityDetail";
import SearchBar from "./components/SearchBar";
import SearchActivity from "./components/SearchActivity";
import CreateActivity from "./components/CreateActivity";

function App() {
  return (
    <>
      <Router>
        <Switch>


          <Route exact path="/">
          <Fragment>
            <Landing />
          </Fragment>
          </Route>


          <Route exact path="/Home">
            <NavBar />
            <Home />
          </Route>


          <Route path="/About">
            <NavBar />
            <About />
          </Route>


          {/* <Route path="/Contact">
            <NavBar />
            <Contact />
          </Route> */}



          <Route
            exact
            path="/CardDetail/:id"
            render={(match) => (
              <React.Fragment>
                <NavBar></NavBar>
                <CardDetail match={match}></CardDetail>
              </React.Fragment>
            )}
          ></Route>

<Route
            exact
            path="/ActivityDetail/:id"
            render={(match) => (
              <React.Fragment>
                <NavBar></NavBar>
                <ActivityDetail match={match}></ActivityDetail>
              </React.Fragment>
            )}
          ></Route>


         <Route path="/LoadActivity" >
         <NavBar />
         <LoadActivity />
         </Route>

         <Route exact path="/Activities">
            <NavBar />
            <Activities />
          </Route>
         
        </Switch>
      </Router>
    </>
  );
}
// tomo
export default App;
