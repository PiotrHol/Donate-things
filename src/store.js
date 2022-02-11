import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { paginateReducer } from "./reducers/paginateSlice";
import { authReducer } from "./reducers/authSlice";
import { formReducer } from "./reducers/formSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    pagination: paginateReducer,
    form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;