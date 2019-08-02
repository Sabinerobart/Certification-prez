import React from "react";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../style/index.scss";
import { User } from "react-feather";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar light className="p-0">
        <div className="d-flex flex-column justify-content-center">
          <Link to="/">
            <img src="/img/laptop-blueBG.png" alt="logo" className="logo" />
          </Link>
          <Link to="/login">
            <User color="#222" size="30" />
          </Link>
        </div>
        <button onClick={() => this.toggleNavbar()} className="burger-btn">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar vertical>
            <NavItem>
              <Link to="/formation" onClick={() => this.toggleNavbar()}>
                1 | Training
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/stage" onClick={() => this.toggleNavbar()}>
                2 | Internship
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/intro" onClick={() => this.toggleNavbar()}>
                3 | Introduction
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contenu" onClick={() => this.toggleNavbar()}>
                4 | Content
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/conclusion" onClick={() => this.toggleNavbar()}>
                5 | Conclusion
              </Link>
            </NavItem>
            <NavItem
            // className={is_admin ? "display_none" : null}
            >
              <Link to="/admin" onClick={() => this.toggleNavbar()}>
                Admin
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
