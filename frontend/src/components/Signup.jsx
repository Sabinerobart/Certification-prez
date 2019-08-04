import React, { Component } from "react";
import "../style/Login.scss";
import axios from "axios";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Heart } from "react-feather";
import { Row, Col } from "reactstrap";
import { backend } from "../conf";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
      fullName: ""
    };
  }

  validateForm() {
    return (
      this.state.nickname.length > 0 &&
      this.state.email.length > 0 &&
      this.state.fullName.length > 0 &&
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { nickname, email, password, confirmPassword, fullName } = this.state;
    const { history } = this.props;
    if (password === confirmPassword) {
      axios
        .post(`${backend}/auth/users`, {
          nickname,
          email,
          password,
          fullName
        })
        .then(({ data }) => {
          this.setState({
            nickname: data.nickname,
            email: data.email,
            password: data.password,
            fullName: data.fullName
          });
          history.push("/accueil");
        });
    }
  };
  render() {
    return (
      <Container
        className="Registration center"
        style={{ height: "100vh", width: "50vw" }}
      >
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs="6">
              <FormGroup>
                <label htmlFor="nickname">Pseudo</label>
                <Input
                  autoFocus
                  type="text"
                  id="nickname"
                  value={this.state.nickname}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <label htmlFor="fullName">Full Name</label>
                <Input
                  autoFocus
                  type="text"
                  id="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <label htmlFor="email">E-mail</label>
                <Input
                  autoFocus
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <label htmlFor="password">Mot de passe</label>
                <Input
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <label htmlFor="confirmPassword">
                  Confirme ton mot de passe
                </label>
                <Input
                  id="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            className="myButton"
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Rejoins-nous !
          </Button>
          <div className="registration-link">
            <Link to="/">
              Déjà inscrite ? Connecte-toi !
              <Heart width="12" className="mx-1" />
            </Link>
          </div>
        </Form>
      </Container>
    );
  }
}
export default Registration;
