import { actionsType } from "../actions/authActions";

const initialState = {
  id: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsType.setUser:
      return {
        ...state,
        id: payload,
      };
    case actionsType.outUser:
      return {
        ...state,
        id: null,
      };
    default:
      return state;
  }
};
