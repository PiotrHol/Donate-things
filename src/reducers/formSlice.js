import { actionsType } from "../actions/formActions";

const initialState = {
  currentStep: 1,
  things: "",
};

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsType.pageChange:
      return {
        ...state,
        currentStep: payload,
      };
    case actionsType.thingsSet:
      return {
        ...state,
        things: payload,
      };
    default:
      return state;
  }
};

export { formReducer };
