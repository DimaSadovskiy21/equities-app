export interface IEquities {
  symbol: string;
  sector: string;
  securityType: string;
  bidPrice: number;
  bidSize: number;
  askPrice: number;
  askSize: number;
  lastUpdated: number;
  lastSalePrice: number;
  lastSaleSize: number;
  lastSaleTime: number;
  volume: number;
}

export interface ICurrentPage {
  from: number;
  to: number;
}

export interface IEquitiesState extends ICurrentPage {
  equities: IEquities[];
  currentEquities: IEquities[];
  loading: boolean;
  error: string;
  currentPage: number;
}

