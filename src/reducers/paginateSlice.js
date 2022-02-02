import { getFirestore, getDocs, collection } from "firebase/firestore";

const initialState = {
    fundations: [],
    organizations: [],
    collections: []
};

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
    paginateReducer
}