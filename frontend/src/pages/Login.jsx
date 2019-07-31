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
  Label,
  Input,
  Button
} from "reactstrap";

export default class Login extends Component {
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
                  // value={this.state.nickname}
                  // onChange={e => {
                  //   this.handleChange(e);
                  // }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password"
                  // value={this.state.password}
                  // onChange={e => {
                  //   this.handleChange(e);
                  // }}
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
