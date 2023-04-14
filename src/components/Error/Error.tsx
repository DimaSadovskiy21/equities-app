import { FC } from "react";

import {
  ErrorStyled,
  ErrorDescription,
  ErrorVector,
  ErrorTitle,
} from "./styles";

import { IErrorType } from "./types";

export const Error: FC<IErrorType> = ({ error }) => (
    <ErrorStyled>
      <ErrorVector />
      <ErrorTitle>Error!</ErrorTitle>
      <ErrorDescription>{error}</ErrorDescription>
    </ErrorStyled>
  );
