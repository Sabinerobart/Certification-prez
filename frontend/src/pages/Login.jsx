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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      password: "",
      profile: "",
      title: "",
      content: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { nickname, password } = this.state;
    const { history } = this.props;
    axios
      .post(`http://localhost:5050/login`, {
        nickname,
        password
      })
      .then(({ data }) => {
        this.setState({
          nickname: data.nickname,
          password: data.password
        });
        localStorage.setItem("user", JSON.stringify(data));
        history.push("/");
      });
  }

  componentDidMount() {
    if ("user" in localStorage) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.setState({ profile: user });
    }
  }

  render() {
    const user = this.state.profile;
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
          <CardBody className="mt-5">
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
              className="d-flex flex-column"
            >
              <FormGroup>
                <Input
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder="Pseudo"
                  value={this.state.nickname}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
              <FormGroup>
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
              <Button type="submit" className="col-4 mx-auto">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
