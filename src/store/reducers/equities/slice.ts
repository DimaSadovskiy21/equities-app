import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEquitie } from "types";
import { getCorrectIndex } from "utils";

import { getEquities } from "./thunkCreators";

import { ICurrentPage, IEquitiesState, IFetchError } from "../types";
import { setError, setIsLoading } from "../utils";

const initialState: IEquitiesState = {
  equities: [],
  currentEquities: [],
  isLoading: true,
  error: "",
  currentPage: 1,
  from: 1,
  to: 10,
};

export const equitiesSlice = createSlice({
  name: "equities",
  initialState,
  reducers: {
    setCurrentEquities(state, action: PayloadAction<ICurrentPage>) {
      state.currentEquities = state.equities.filter((e, i) => {
        const correctIndex = getCorrectIndex(i);

        return (
          correctIndex >= action.payload.from &&
          correctIndex <= action.payload.to
        );
      });
    },
    setPrevPage(state, action: PayloadAction<{ from: number; to: number }>) {
      state.currentEquities = state.equities.filter(
        (_e, i) => i >= action.payload.from && i <= action.payload.to
      );
      state.from = action.payload.from - 10;
      state.to = action.payload.to - 10;
      state.currentPage -= 1;
    },
    setNextPage(state, action: PayloadAction<{ from: number; to: number }>) {
      state.currentEquities = state.equities.filter(
        (_e, i) => i >= action.payload.from && i <= action.payload.to
      );
      state.from = action.payload.from + 10;
      state.to = action.payload.to + 10;
      state.currentPage += 1;
    },
    setDraggingEquities(state, action: PayloadAction<IEquitie[]>) {
      state.currentEquities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getEquities.fulfilled.type,
      (state, action: PayloadAction<IEquitie[]>) => {
        state.isLoading = false;
        state.error = "";
        state.equities = action.payload;
      }
    );
    builder.addCase(getEquities.pending.type, (state) => {
      setIsLoading(state);
    });
    builder.addCase(
      getEquities.rejected.type,
      (state, action: PayloadAction<IFetchError>) => {
        setError(state, action);
      }
    );
  },
});

export const {
  setCurrentEquities,
  setPrevPage,
  setNextPage,
  setDraggingEquities,
} = equitiesSlice.actions;

export default equitiesSlice.reducer;
