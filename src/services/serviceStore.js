import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import {
  reducerLoading,
  initialState as stateLoading
} from "../modules/loading/moduleLoadingReducers";

const reducers = combineReducers({
  reducerLoading,
  //
});

const globalStore = {
  reducerLoading: stateLoading,
  // 
};

const serviceStore = createStore(
  reducers,
  globalStore,
  applyMiddleware(thunk, logger)
);

export default serviceStore;
