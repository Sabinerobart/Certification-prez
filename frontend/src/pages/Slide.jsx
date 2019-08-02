import React, { Component } from "react";
import axios from "axios";
import "../style/Slide.scss";
import { Form, FormGroup, Input } from "reactstrap";
import { backend } from "../conf.js";
import { connect } from "react-redux";
import Loader from "../components/Loader";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Insert title here",
      description: "",
      bullet_point_one: "1st bullet point",
      bullet_point_two: "2nd bullet point",
      bullet_point_three: "2rd bullet point",
      bullet_point_four: null,
      img: null,
      loading: true
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
        bullet_point_four: data.bullet_point_four,
        img: data.img,
        loading: false
      });
    });
  }

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
    const { user } = this.props;
    let disabled = true;
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <div className="slide-page center">
          <img
            src={this.state.img}
            alt={`img-${this.props.match.params.id}`}
            className="slide-img"
          />
          <div className="underlay" />
          <Form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
            className="d-flex flex-column"
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
                disabled={user && user.is_admin ? "" : disabled}
              />
            </FormGroup>
            <div className="separation" />
            <FormGroup>
              <Input
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={e => {
                  this.handleChange(e);
                }}
                disabled={user && user.is_admin ? "" : disabled}
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
                disabled={user && user.is_admin ? "" : disabled}
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
                disabled={user && user.is_admin ? "" : disabled}
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
                disabled={user && user.is_admin ? "" : disabled}
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
                  disabled={user && user.is_admin ? "" : disabled}
                />
              </FormGroup>
            ) : null}
            <button
              style={{ border: "1px solid black" }}
              block
              className={user && user.is_admin ? "slide-form-btn" : "hide-btn"}
              type="submit"
              tabIndex="4"
            >
              Send
            </button>
          </Form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const SlideContainer = connect(mapStateToProps)(Slide);

export default SlideContainer;
