import { rootreducer } from "./rootreducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  rootreducer,
  applyMiddleware(logger, thunk)
);

export default store;