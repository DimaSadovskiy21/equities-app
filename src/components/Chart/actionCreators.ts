import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { iexAPI } from 'api';
import { IEquities } from 'components';
import { IFetchError } from 'types';


export const getChart = createAsyncThunk<IEquities[], string, { rejectValue: IFetchError }>(
  'equities/getEquities',
  async (symbols, { rejectWithValue }) => {
    try {
      const res = await iexAPI.getChart(symbols);
    
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