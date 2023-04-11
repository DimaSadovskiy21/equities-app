import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { iexAPI } from 'api';
import { IFetchError } from 'types';

import { IEquities,  } from './types';


export const getEquities = createAsyncThunk<IEquities[], undefined, { rejectValue: IFetchError }>(
  'equities/getEquities',
  async (_, { rejectWithValue }) => {
    try {
      const res = await iexAPI.getEquities();

      return res.data;
    } catch (e) {
      if (e instanceof AxiosError && e.response?.data) {
        return rejectWithValue({ message: e.response.data });
      } else {
        throw e;
      }
    }
  },
);
