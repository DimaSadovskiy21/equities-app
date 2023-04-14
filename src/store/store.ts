import { combineReducers, configureStore } from "@reduxjs/toolkit";

import equitiesReducer from "./reducers/equities";
import chartReducer from "./reducers/chart";

const rootReducer = combineReducers({
  equitiesReducer,
  chartReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
