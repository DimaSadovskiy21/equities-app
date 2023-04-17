import { FC } from "react";

import { useAppSelector } from "hooks";
import { currentPageSelector } from "store/reducers/equities";

import { IEquitieContainerProps } from "./types";
import Equitie from "./Equitie";

const EquitieContainer: FC<IEquitieContainerProps> = (props) => {
  const currentPage = useAppSelector(currentPageSelector);

  return <Equitie currentPage={currentPage} {...props} />;
};

export default EquitieContainer;
