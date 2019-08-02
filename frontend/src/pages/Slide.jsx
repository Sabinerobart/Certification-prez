import React, { Component } from "react";
import axios from "axios";
import "../style/Slide.scss";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { backend } from "../conf.js";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Insert title here",
      description: "",
      bullet_point_one: "1st bullet point",
      bullet_point_two: "2nd bullet point",
      bullet_point_three: "2rd bullet point",
      bullet_point_four: null
    };
  }

  componentDidMount() {
    const category = this.props.match.params.id;
    axios.get(`${backend}${category}`).then(({ data }) => {
      this.setState({
        title: data.title,
        description: data.description,
        bullet_point_one: data.bullet_point_one,
        bullet_point_two: data.bullet_point_two,
        bullet_point_three: data.bullet_point_three,
        bullet_point_four: data.bullet_point_four
      });
    });
  }

  // componentDidUpdate() {
  //   voir push history /{:id}, peut etre history.push jsais pas
  // }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const category = this.props.match.params.id;
    axios
      .put(`${backend}${category}`, {
        title: this.state.title,
        description: this.state.description,
        bullet_point_one: this.state.bullet_point_one,
        bullet_point_two: this.state.bullet_point_two,
        bullet_point_three: this.state.bullet_point_three,
        bullet_point_four: this.state.bullet_point_four
      })
      .catch(err => {
        console.log(`Nope! ${err}`);
      });
  }

  // validateForm(){

  // }

  render() {
    return (
      <div className="slide-page center">
        <Form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          className="d-flex flex-column"
          style={{ width: "50vw" }}
        >
          <FormGroup>
            <Input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="bullet_point_one"
              id="bullet_point_one"
              value={this.state.bullet_point_one}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="bullet_point_two"
              id="bullet_point_two"
              value={this.state.bullet_point_two}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="bullet_point_three"
              id="bullet_point_three"
              value={this.state.bullet_point_three}
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </FormGroup>
          {this.state.bullet_point_four !== null ? (
            <FormGroup>
              <Input
                type="text"
                name="bullet_point_four"
                id="bullet_point_four"
                value={this.state.bullet_point_four}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </FormGroup>
          ) : null}
          <Button
            style={{ border: "1px solid black" }}
            className="myButton"
            block
            // disabled={e => !this.validateForm(e)}
            type="submit"
            tabIndex="4"
          >
            Valider
          </Button>
        </Form>
      </div>
    );
  }
}
