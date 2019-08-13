import React from "react";
import { connect } from "react-redux";
import "./style/Button.scss";

const Button = ({ user }) => {
  const profile = user && user.user;
  return (
    <button
      className={
        user ? (profile.is_admin ? "slide-form-btn" : "hide-btn") : "hide-btn"
      }
      type="submit"
      // disabled={!this.validateForm()}
    >
      Send
    </button>
  );
};

const mapStateToProps = state => {
  return {
    user: state.loginReducer.state
  };
};

const ButtonContainer = connect(mapStateToProps)(Button);

export default ButtonContainer;
