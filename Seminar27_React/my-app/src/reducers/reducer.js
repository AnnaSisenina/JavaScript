import { TOGGLE_THEME } from "../actions/actionTypes";
const initialState = {
  theme: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};
export default reducer;
