const GET_USER = "GET_USER";

const loggedInUserActions = user => ({
  type: GET_USER,
  user
});

module.exports = {
  loggedInUserActions,
  GET_USER
};
