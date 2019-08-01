import React from "react";
import "../style/Homepage.scss";
import { Row } from "reactstrap";

const Homepage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="homepage">
      <Row className="title shadow-sm flex-column">
        <h2>{"user" in localStorage ? `${user.fullName}` : "Prénom Nom"}</h2>
        <div className="separation" />
        <h1>
          Titre professionnel
          <br />
          Développeur Web & Web mobile
        </h1>
        <div className="separation align-self-end" />
        <h4>
          Session{" "}
          {"user" in localStorage
            ? `${user.month} ${user.year}`
            : ` _________ ____`}
        </h4>
      </Row>
      <svg width="850" height="400" className="frame">
        <rect width="850" height="350" />
      </svg>
    </div>
  );
};

export default Homepage;
