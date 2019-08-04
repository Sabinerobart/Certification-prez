import React, { Component } from "react";
import axios from "axios";
import "../style/Slide.scss";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";
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
      bullet_point_four: "",
      img: "",
      page_title: "",
      logo: "",
      loading: true
    };
  }

  componentDidMount() {
    const category = this.props.match.params.id;
    axios.get(`${backend}/${category}`).then(({ data }) => {
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
    const category = this.props.match.params.id;
    axios
      .put(`${backend}/${category}`, {
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

  // validateForm() {
  //   return this.state.title.length > 0;
  // }

  render() {
    const { user } = this.props;
    const profile = user && user.user;
    let disabled = true;
    const img = this.state.img;
    const logo = this.state.logo;
    const slideTitleClassName = logo
      ? "slide-title justify-content-between align-items-center"
      : "slide-title justify-content-end align-items-center";
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <div className="slide-page center">
          {img ? (
            <img
              src={img}
              alt={`img-${this.props.match.params.id}`}
              className="slide-img"
            />
          ) : null}
          <div className="underlay" />
          <Form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
            className="d-flex flex-column"
          >
            <Row className={slideTitleClassName}>
              {logo ? (
                <img src={logo} alt={this.state.page_title + "-logo"} />
              ) : null}
              <FormGroup>
                <Input
                  type="text"
                  name="page_title"
                  id="page_title"
                  value={this.state.page_title}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  disabled={
                    user ? (profile.is_admin ? "" : disabled) : disabled
                  }
                  className="page_title"
                />
              </FormGroup>
            </Row>
            <Col xs="10" className="offset-1">
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  disabled={
                    user ? (profile.is_admin ? "" : disabled) : disabled
                  }
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
                  disabled={
                    user ? (profile.is_admin ? "" : disabled) : disabled
                  }
                />
              </FormGroup>
              <Row>
                <Col md="6" xl="3" className="bullet-point">
                  <FormGroup className="bg-light">
                    <Input
                      type="textarea"
                      name="bullet_point_one"
                      id="bullet_point_one"
                      value={this.state.bullet_point_one}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                      disabled={
                        user ? (profile.is_admin ? "" : disabled) : disabled
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md="6" xl="3" className="bullet-point">
                  <FormGroup className="bg-light">
                    <Input
                      type="textarea"
                      name="bullet_point_two"
                      id="bullet_point_two"
                      value={this.state.bullet_point_two}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                      disabled={
                        user ? (profile.is_admin ? "" : disabled) : disabled
                      }
                    />
                  </FormGroup>
                </Col>
                {this.state.bullet_point_three ? (
                  <Col md="6" xl="3" className="bullet-point">
                    <FormGroup className="bg-light">
                      <Input
                        type="textarea"
                        name="bullet_point_three"
                        id="bullet_point_three"
                        value={this.state.bullet_point_three}
                        onChange={e => {
                          this.handleChange(e);
                        }}
                        disabled={
                          user ? (profile.is_admin ? "" : disabled) : disabled
                        }
                      />
                    </FormGroup>
                  </Col>
                ) : null}
                {this.state.bullet_point_four ? (
                  <Col md="6" xl="3" className="bullet-point">
                    <FormGroup className="bg-light">
                      <Input
                        type="textarea"
                        name="bullet_point_four"
                        id="bullet_point_four"
                        value={this.state.bullet_point_four}
                        onChange={e => {
                          this.handleChange(e);
                        }}
                        disabled={
                          user ? (profile.is_admin ? "" : disabled) : disabled
                        }
                      />
                    </FormGroup>
                  </Col>
                ) : null}
              </Row>
            </Col>
            <button
              style={{ border: "1px solid black" }}
              block
              className={user && user.is_admin ? "slide-form-btn" : "hide-btn"}
              type="submit"
              tabIndex="4"
              // disabled={!this.validateForm()}
            >
              Send
            </button>
          </Form>
          <div className="across" />
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
