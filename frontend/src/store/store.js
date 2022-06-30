import { combineReducers,configureStore,legacy_createStore  } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({
  reducer: reducer,
});

// const store = legacy_createStore(rootReducer);

export default store;
