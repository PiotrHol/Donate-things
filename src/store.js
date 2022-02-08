import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { paginateReducer } from "./reducers/paginateSlice";
import { authReducer } from "./reducers/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    pagination: paginateReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;