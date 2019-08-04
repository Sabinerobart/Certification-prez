import React, { Component } from "react";
import "../style/Login.scss";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import axios from "axios";
import { loggedInUserActions } from "../redux/actions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    const { history } = this.props;
    axios
      .post(`http://localhost:5050/login`, {
        email,
        password
      })
      .then(({ data }) => {
        const { dispatch } = this.props;
        dispatch(loggedInUserActions(data));
        history.push("/");
      });
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="login-page">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>You're admin ?</h2>
            </CardTitle>
            <CardSubtitle>
              <h4>Please, sign in</h4>
            </CardSubtitle>
            <img src="/img/arrow-down.png" alt="arrow down" />
          </CardHeader>
          <CardBody className="mt-4 p-0">
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
              className="d-flex flex-column mt-4"
            >
              <FormGroup className="hvr-underline-from-center">
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
              <FormGroup className="hvr-underline-from-center">
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
              <Button
                type="submit"
                className="col-9 offset-3 p-3"
                disabled={!this.validateForm()}
              >
                Send
              </Button>
            </Form>
          </CardBody>
        </Card>
        <div className="colored" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer
  };
};

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;
