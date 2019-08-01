import React, { Component } from "react";
import axios from "axios";
import "../style/Slide.scss";
import { Form, FormGroup, Input } from "reactstrap";

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
    axios.get(`http://localhost:5050/${category}`).then(({ data }) => {
      this.setState({
        title: data.title,
        description: data.description,
        bullet_point_one: data.bp_one,
        bullet_point_two: data.bp_two,
        bullet_point_three: data.bp_three,
        bullet_point_four: data.bp_four
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

  // handleSubmit(event) {
  //   const currentUser = this.state.id;
  //   event.preventDefault();
  //   axios
  //     .put(`${backend}/modification/${currentUser}`, {
  //       nickname: this.state.nickname,
  //       location: this.state.location,
  //       description: this.state.description
  //     })
  //     .then(() => {
  //       this.props.history.push(`/profil/${currentUser}`);
  //     })
  //     .catch(err => {
  //       console.log(`Nope! ${err}`);
  //     });
  // }

  // validateFor(){

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
        </Form>
      </div>
    );
  }
}
