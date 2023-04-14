import { RootState } from "store";

export const equitiesSelector = (state: RootState) =>
  state.equitiesReducer.equities;
export const currentEquitiesSelector = (state: RootState) =>
  state.equitiesReducer.currentEquities;
export const isLoadingSelector = (state: RootState) =>
  state.equitiesReducer.isLoading;
export const errorSelector = (state: RootState) => state.equitiesReducer.error;
export const currentPageSelector = (state: RootState) =>
  state.equitiesReducer.currentPage;
export const fromSelector = (state: RootState) => state.equitiesReducer.from;
export const toSelector = (state: RootState) => state.equitiesReducer.to;
