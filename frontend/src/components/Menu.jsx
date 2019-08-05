import React from "react";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../style/index.scss";
import { User, LogOut } from "react-feather";
import { connect } from "react-redux";
import { loggedInUserActions } from "../redux/actions";

class Menu extends React.Component {
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

  logOut(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loggedInUserActions({}));
  }

  render() {
    const { user } = this.props;
    const userLink = (
      <Link to="/login">
        <User color="#222" size="30" />
      </Link>
    );

    const guestLink = (
      <LogOut
        color="#222"
        size="30"
        onClick={e => {
          this.logOut(e);
        }}
      />
    );

    return (
      <Navbar light className="p-0">
        <div className="d-flex flex-column center">
          <Link to="/">
            <img src="/img/laptop-blueBG.png" alt="logo" className="logo" />
          </Link>
          {user ? guestLink : userLink}
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
              <Link to="/introduction" onClick={() => this.toggleNavbar()}>
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

            <NavItem className={user && user.is_admin ? null : "hide"}>
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

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;
