import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEquitie } from "types";

import { getChart } from "./thunkCreators";

import { IChartState, IFetchError } from "../types";
import { setError, setIsLoading } from "../utils";

const initialState: IChartState = {
  equitie: {} as IEquitie,
  isLoading: true,
  error: "",
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getChart.fulfilled.type,
      (state, action: PayloadAction<IEquitie[]>) => {
        state.isLoading = false;
        state.error = "";
        state.equitie = action.payload[0];
      }
    );
    builder.addCase(getChart.pending.type, (state) => {
      setIsLoading(state);
    });
    builder.addCase(
      getChart.rejected.type,
      (state, action: PayloadAction<IFetchError>) => {
        setError(state, action);
      }
    );
  },
});

export default chartSlice.reducer;
