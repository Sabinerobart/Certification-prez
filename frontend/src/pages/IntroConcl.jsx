import React, { Component } from "react";
import "../style/IntroConcl.scss";
import { Row, Col, Input } from "reactstrap";
import axios from "axios";
import { backend } from "../conf";

export default class IntroConcl extends Component {
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
    return (
      <Row className="intro-concl_page center">
        <Col md="6" className="intro-concl_title">
          <Input
            type="textarea"
            name="page_title"
            id="page_title"
            value={this.state.title}
            // onChange={e => {
            //   this.handleChange(e);
            // }}
            // disabled={user ? (profile.is_admin ? "" : disabled) : disabled}
          />
        </Col>
        <Col md="6" className="intro-concl_title">
          <Input
            type="textarea"
            name="page_title"
            id="page_title"
            value={this.state.page_title}
            // onChange={e => {
            //   this.handleChange(e);
            // }}
            // disabled={user ? (profile.is_admin ? "" : disabled) : disabled}
          />
        </Col>
      </Row>
    );
  }
}
