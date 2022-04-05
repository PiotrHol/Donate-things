import { actionsType } from "../actions/formActions";

const initialState = {
  currentStep: 1,
  things: "",
  bags: 0,
  location: "0",
  whoIsAssistance: [],
  organization: "",
  pickUpAddress: {
    street: "",
    city: "",
    postCode: "",
    phone: "",
  },
  pickUpDate: {
    date: "",
    time: "",
    note: "",
  },
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
    case actionsType.pickUpAddressSet:
      return {
        ...state,
        pickUpAddress: {
          street: payload.street,
          city: payload.city,
          postCode: payload.postCode,
          phone: payload.phone,
        },
      };
    case actionsType.pickUpDateSet:
      return {
        ...state,
        pickUpDate: {
          date: payload.date,
          time: payload.time,
          note: payload.note,
        },
      };
    case actionsType.formClear:
      return {
        ...state,
        currentStep: 1,
        things: "",
        bags: 0,
        location: "0",
        whoIsAssistance: [],
        organization: "",
        pickUpAddress: {
          street: "",
          city: "",
          postCode: "",
          phone: "",
        },
        pickUpDate: {
          date: "",
          time: "",
          note: "",
        },
      };
    default:
      return state;
  }
};

export { formReducer };
