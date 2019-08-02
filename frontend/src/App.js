import React from "react";
import "./style/Menu.scss";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Slide from "./pages/Slide";
import { connect } from "react-redux";

const App = ({ user }) => {
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
};

const mapStateToProps = state => {
  return {
    user: state.loginReducer.isLoggedIn
  };
};

const withConnect = connect(
  mapStateToProps,
  null
)(App);

export default withConnect;
