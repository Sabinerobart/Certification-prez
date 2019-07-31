import React, { Component } from "react";
import "../style/Login.scss";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1>You're admin ?</h1>
            </CardTitle>
            <CardSubtitle>
              <h2>Please, sign in</h2>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}
