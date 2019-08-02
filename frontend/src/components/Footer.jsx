import React from "react";
import "../style/Footer.scss";
import { connect } from "react-redux";

const Footer = user => {
  const profile = user.user;
  return (
    <div className="footer d-flex pt-3 px-5">
      {user ? `${profile && profile.fullName}` : "Sabine Robart"}
      <div className="line" />
      <em>Titre professionnel Développeur web & web mobile</em>
      <div className="line" />
      {user
        ? `${profile && profile.month} ${profile && profile.year}`
        : `février 2019`}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
