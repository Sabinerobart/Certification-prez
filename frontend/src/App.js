import React from "react";
import "./style/Menu.scss";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Slide from "./pages/Slide";
import Signup from "./components/Signup";
import { connect } from "react-redux";
import IntroConcl from "./pages/IntroConcl";

const App = ({ user }) => {
  return (
    <React.Fragment>
      <div className="app-border" />
      <Menu />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/inscription" component={Signup} />
        <Route exact path="/:category" component={Slide} />
        <Route path="/contenu/:contentCategory" component={IntroConcl} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user
  };
};

const withConnect = connect(
  mapStateToProps,
  null
)(App);

export default withConnect;
