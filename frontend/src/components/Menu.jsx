import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
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
            <NavbarBrand>
              <img src="/img/laptop-yellowBG.png" alt="logo" width="40" />
            </NavbarBrand>
          </Link>
          <Link to="/login">
            <User color="#222" />
          </Link>
        </div>
        <button onClick={() => this.toggleNavbar()}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        <div />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar vertical>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
