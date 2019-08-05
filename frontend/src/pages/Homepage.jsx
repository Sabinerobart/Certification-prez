import React from "react";
import "../style/Homepage.scss";
import { Row } from "reactstrap";
import { connect } from "react-redux";

const Homepage = ({ user }) => {
  const profile = user && user.user;
  return (
    <div className="homepage">
      <Row className="title flex-column">
        <h2>{user ? `${profile.fullName}` : "Sabine Robart"}</h2>
        <div className="separation" />
        <h1>
          Titre professionnel
          <br />
          Développeur Web & Web mobile
        </h1>
        <div className="separation align-self-end" />
        <h4>
          Session {user ? `${profile.month} ${profile.year}` : ` février 2019`}
        </h4>
      </Row>
      <svg width="850" height="400" className="frame">
        <rect width="850" height="350" />
      </svg>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const HomepageContainer = connect(mapStateToProps)(Homepage);

export default HomepageContainer;
