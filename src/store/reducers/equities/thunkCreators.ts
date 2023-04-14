import { createAsyncThunk } from "@reduxjs/toolkit";

import { iexAPI } from "api";
import { IEquitie } from "types";

import { IFetchError } from "../types";
import { handleResponseError } from "../utils";

export const getEquities = createAsyncThunk<
  IEquitie[],
  undefined,
  { rejectValue: IFetchError }
>("equities/getEquities", async (_, { rejectWithValue }) => {
  try {
    const response = await iexAPI.getEquities();

    return response.data;
  } catch (error) {
    return handleResponseError(rejectWithValue, error);
  }
});
