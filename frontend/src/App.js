import React from "react";
import "./style/Menu.scss";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Slide from "./pages/Slide";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/:id" component={Slide} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
