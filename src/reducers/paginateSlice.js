import { getFirestore, getDocs, collection } from "firebase/firestore";
import { actionsType, getData } from "../actions/paginateActions";

const initialState = {
  fundations: [],
  organizations: [],
  collections: [],
  descriptions: {
    fundations:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    organizations:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    collections:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  currentList: null,
  currentNavElement: "fundations",
  currentDescription: null,
  currentPage: 1,
  itemsPerPage: 3,
};

const fetchData = async (dispatch) => {
  const dataBase = getFirestore();

  const fundationsFromBase = await getDocs(collection(dataBase, "fundations"));
  const fundations = [];
  fundationsFromBase.forEach((fundation) =>
    fundations.push({
      id: fundation.id,
      ...fundation.data(),
    })
  );

  const organizationsFromBase = await getDocs(
    collection(dataBase, "organizations")
  );
  const organizations = [];
  organizationsFromBase.forEach((organization) =>
    organizations.push({
      id: organization.id,
      ...organization.data(),
    })
  );

  const collectionsFromBase = await getDocs(
    collection(dataBase, "collections")
  );
  const collections = [];
  collectionsFromBase.forEach((collection) =>
    collections.push({
      id: collection.id,
      ...collection.data(),
    })
  );

  dispatch(
    getData({
      fundations,
      organizations,
      collections,
    })
  );
};

const paginateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsType.getPaginateData:
      return {
        ...state,
        fundations: payload.fundations,
        organizations: payload.organizations,
        collections: payload.collections,
        currentList: payload.fundations,
        currentDescription: state.descriptions.fundations,
      };
    case actionsType.setPaginatePage:
      return {
        ...state,
        currentPage: payload,
      };
    case actionsType.setOrgList:
      return {
        ...state,
        currentList: state.organizations,
        currentDescription: state.descriptions.organizations,
        currentNavElement: "organizations",
        currentPage: 1,
      };
    case actionsType.setFundList:
      return {
        ...state,
        currentList: state.fundations,
        currentDescription: state.descriptions.fundations,
        currentNavElement: "fundations",
        currentPage: 1,
      };
    case actionsType.setCollList:
      return {
        ...state,
        currentList: state.collections,
        currentDescription: state.descriptions.collections,
        currentNavElement: "collections",
        currentPage: 1,
      };
    default:
      return state;
  }
};

export { paginateReducer, fetchData };
