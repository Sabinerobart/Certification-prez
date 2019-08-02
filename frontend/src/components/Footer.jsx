import React from "react";
import "../style/Footer.scss";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    const { user } = this.props;
    const profile = user && user.state;
    return (
      <div className="footer d-flex pt-3 px-5">
        {user ? `${profile.fullName}` : "Sabine Robart"}
        <div className="line" />
        Titre professionnel Développeur web & web mobile
        <div className="line" />
        {user ? `${profile.month} ${profile.year}` : `février 2019`}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer
  };
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
