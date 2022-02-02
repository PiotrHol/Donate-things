import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { paginateReducer } from "./reducers/paginateSlice";

const store = createStore(paginateReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;