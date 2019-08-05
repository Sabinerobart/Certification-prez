import React, { Component } from "react";
import "../style/IntroConcl.scss";
import { Col, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { backend } from "../conf";
import { connect } from "react-redux";

class IntroConcl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Insert title here",
      description: "",
      bullet_point_one: "1st bullet point",
      bullet_point_two: "2nd bullet point",
      bullet_point_three: "3rd bullet point",
      bullet_point_four: "",
      img: "",
      page_title: "",
      logo: "",
      loading: true
    };
  }

  componentDidMount() {
    const category = this.props.match.params.contentCategory;
    axios.get(`${backend}/contenu/${category}`).then(({ data }) => {
      this.setState({
        title: data.title,
        description: data.description,
        bullet_point_one: data.bullet_point_one,
        bullet_point_two: data.bullet_point_two,
        bullet_point_three: data.bullet_point_three,
        bullet_point_four: data.bullet_point_four,
        img: data.img,
        page_title: data.page_title,
        logo: data.logo,
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
    const category = this.props.match.params.contentCategory;
    axios
      .put(`${backend}/contenu/${category}`, {
        title: this.state.title,
        description: this.state.description,
        bullet_point_one: this.state.bullet_point_one,
        bullet_point_two: this.state.bullet_point_two,
        bullet_point_three: this.state.bullet_point_three,
        bullet_point_four: this.state.bullet_point_four,
        page_title: this.state.page_title
      })
      .catch(err => {
        console.log(`Nope! ${err}`);
      });
  }

  render() {
    const user = this.props.user;
    const profile = user && user.user;
    let disabled = true;
    return (
      <Form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
        className="d-flex intro-concl_page p-0 m-0"
      >
        <Col md="6" className="intro-concl_title">
          <Input
            type="textarea"
            name="title"
            id="title"
            value={this.state.title}
            onChange={e => {
              this.handleChange(e);
            }}
            className="intro-title"
            disabled={user ? (profile.is_admin ? "" : disabled) : disabled}
          />
        </Col>
        <Col md="6" className="intro-concl_description center bg-dark px-5" />
        <FormGroup>
          <p
            style={{
              fontFamily: "RalewayBold",
              textTransform: "uppercase",
              fontSize: "2rem",
              textAlign: "center",
              padding: "3vh",
              background: "#f5f5f5"
            }}
          >
            {this.state.page_title}
          </p>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={this.state.description}
            onChange={e => {
              this.handleChange(e);
            }}
            disabled={user ? (profile.is_admin ? "" : disabled) : disabled}
          />
        </FormGroup>
        <button
          className={
            user
              ? profile.is_admin
                ? "slide-form-btn"
                : "hide-btn"
              : "hide-btn"
          }
          type="submit"
          // disabled={!this.validateForm()}
        >
          Send
        </button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const IntroConclContainer = connect(mapStateToProps)(IntroConcl);

export default IntroConclContainer;
