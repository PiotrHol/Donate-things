import { getFirestore, getDocs, collection } from "firebase/firestore";

const initialState = {
    pagination: {
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
        itemsPerPage: 3
    }
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

  dispatch({
    type: "pagination/fetch",
    payload: {
      fundations,
      organizations,
      collections,
    },
  });
};

const paginateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "pagination/fetch":
      return {
        ...state,
        pagination: {
            ...state.pagination,
            fundations: payload.fundations,
            organizations: payload.organizations,
            collections: payload.collections,
            currentList: payload.fundations,
            currentDescription: state.pagination.descriptions.fundations
        }
      };
    case "pagination/setCurrentPage":
        return {
            ...state,
            pagination: {
                ...state.pagination,
                currentPage: payload
            }
        }
    case "pagination/setListAsOrg":
        return {
            ...state,
            pagination: {
                ...state.pagination,
                currentList: state.pagination.organizations,
                currentDescription: state.pagination.descriptions.organizations,
                currentNavElement: "organizations"
            }
        }
    case "pagination/setListAsFun":
        return {
            ...state,
            pagination: {
                ...state.pagination,
                currentList: state.pagination.fundations,
                currentDescription: state.pagination.descriptions.fundations,
                currentNavElement: "fundations"
            }
        }
    case "pagination/setListAsColl":
        return {
            ...state,
            pagination: {
                ...state.pagination,
                currentList: state.pagination.collections,
                currentDescription: state.pagination.descriptions.collections,
                currentNavElement: "collections"
            }
        }
    default:
      return state;
  }
};

export { paginateReducer, fetchData };
