import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IFetchError, TActions } from "./types";

export const handleResponseError = (rejectWithValue: any, error: unknown) => {
  if (error instanceof AxiosError) {
    return rejectWithValue({ message: error.message });
  } else {
    throw rejectWithValue({ message: "Something wrong." });
  }
};

export const setError = (
  state: TActions,
  action: PayloadAction<IFetchError>
) => {
  state.isLoading = false;
  state.error = action.payload.message;
};

export const setIsLoading = (state: TActions) => {
  state.isLoading = true;
};
