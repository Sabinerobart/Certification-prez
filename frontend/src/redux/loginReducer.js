import { GET_USER } from "./actions";

const loginReducer = (state = "", action) => {
  switch (action.type) {
    case GET_USER:
      return { state: action.user };
    default:
      return state;
  }
};

export default loginReducer;
