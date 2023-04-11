import { IEquities } from "components";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IChartState } from "./types";
import { getChart } from "./actionCreators";
import { IFetchError } from "types";

const initialState: IChartState = {
  equitie: {} as IEquities,
  loading: true,
  error: "",
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(
          getChart.fulfilled.type,
          (state, action: PayloadAction<IEquities[]>) => {
            state.loading = false;
            state.error = "";
            state.equitie = action.payload[0];
          }
        );
        builder.addCase(getChart.pending.type, (state) => {
          state.loading = true;
        });
        builder.addCase(
          getChart.rejected.type,
          (state, action: PayloadAction<IFetchError>) => {
            state.loading = false;
            state.error = action.payload.message;
          }
        );
  },
});

export default chartSlice.reducer;
