import { getFirestore, getDocs, collection } from "firebase/firestore";

const initialState = {
    fundations: [],
    organizations: [],
    collections: []
};

const fetchData = async (dispatch) => {
    const dataBase = getFirestore();
    
    const fundationsFromBase = await getDocs(collection(dataBase, "fundations"));
    const fundations = [];
    fundationsFromBase.forEach(fundation => fundations.push({
        id: fundation.id,
        ...fundation.data()
    }));

    const organizationsFromBase = await getDocs(collection(dataBase, "organizations"));
    const organizations = [];
    organizationsFromBase.forEach(organization => organizations.push({
        id: organization.id,
        ...organization.data()
    }));

    const collectionsFromBase = await getDocs(collection(dataBase, "collections"));
    const collections = [];
    collectionsFromBase.forEach(collection => collections.push({
        id: collection.id,
        ...collection.data()
    }));

    dispatch({type: "fundations/fetch", payload: {
        fundations,
        organizations,
        collections
    }});
}

const paginateReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "fundations/fetch":
            return {
                ...state,
                fundations: payload.fundations,
                organizations: payload.organizations,
                collections: payload.collections
            };
        default:
            return state;
    }
}

export {
    paginateReducer,
    fetchData
}