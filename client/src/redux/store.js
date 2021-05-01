import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import globalReducer from "./reducers";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  globalReducer,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;
