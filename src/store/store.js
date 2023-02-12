import { combineReducers, createStore, applyMiddleware } from "redux";

import productReducer from "./reducer/productReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
