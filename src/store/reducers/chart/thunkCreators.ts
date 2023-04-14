import { createAsyncThunk } from "@reduxjs/toolkit";

import { iexAPI } from "api";
import { IEquitie } from "types";

import { IFetchError } from "../types";
import { handleResponseError } from "../utils";

export const getChart = createAsyncThunk<
  IEquitie[],
  string,
  { rejectValue: IFetchError }
>("equities/getEquities", async (symbols, { rejectWithValue }) => {
  try {
    const response = await iexAPI.getChart(symbols);

    return response.data;
  } catch (error) {
    return handleResponseError(rejectWithValue, error);
  }
});
