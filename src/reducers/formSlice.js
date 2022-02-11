import { actionsType } from "../actions/formActions";

const initialState = {
  currentStep: 1,
};

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsType.pageChange:
      return {
        ...state,
        currentStep: payload,
      };
    default:
      return state;
  }
};

export { formReducer };
