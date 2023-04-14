import { RootState } from "store";

export const equitieSelector = (state: RootState) => state.chartReducer.equitie;
export const isLoadingSelector = (state: RootState) =>
  state.chartReducer.isLoading;
export const errorSelector = (state: RootState) => state.chartReducer.error;
