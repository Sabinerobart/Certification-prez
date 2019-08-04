import React from "react";
import "../style/Footer.scss";
import { connect } from "react-redux";

const Footer = ({ user }) => {
  const profile = user && user.user;
  return (
    <footer className="d-flex pt-3 px-5 fixed-bottom">
      {user ? `${profile.fullName}` : "Sabine Robart"}
      <div className="line" />
      <em>Titre professionnel Développeur web & web mobile</em>
      <div className="line" />
      {user ? `${profile.month} ${profile.year}` : `février 2019`}
    </footer>
  );
};

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
