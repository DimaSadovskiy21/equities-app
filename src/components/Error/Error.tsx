import { FC } from "react";

import {
  ErrorStyled,
  ErrorDescription,
  ErrorVector,
  ErrorTitle,
  ErrorServerVector,
} from "./styles";

import { IErrorType } from "./types";

export const Error: FC<IErrorType> = ({ err }) => {
  return (
    <ErrorStyled>
      {err ? <ErrorVector /> : <ErrorServerVector />}
      <ErrorTitle>Error!</ErrorTitle>
      <ErrorDescription>{err ? err : "Work on the server or there is no data!"}</ErrorDescription>
    </ErrorStyled>
  );
};
