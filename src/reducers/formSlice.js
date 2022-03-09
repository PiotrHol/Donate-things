import { actionsType } from "../actions/formActions";

const initialState = {
  currentStep: 1,
  things: "",
  bags: 0,
  location: "0",
  whoIsAssistance: [],
  organization: "",
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
    case actionsType.bagsSet:
      return {
        ...state,
        bags: payload,
      };
    case actionsType.locationSet:
      return {
        ...state,
        location: payload,
      };
    case actionsType.whoIsAssistanceSet:
      return {
        ...state,
        whoIsAssistance: payload,
      };
    case actionsType.organizationSet:
      return {
        ...state,
        organization: payload,
      };
    default:
      return state;
  }
};

export { formReducer };
