import { FC } from "react";

import {
  ErrorWrapper,
  ErrorDescription,
  ErrorVector,
  ErrorTitle,
} from "./styles";
import { IErrorType } from "./types";

const Error: FC<IErrorType> = ({ error }) => (
    <ErrorWrapper>
      <ErrorVector />
      <ErrorTitle>Error!</ErrorTitle>
      <ErrorDescription>{error}</ErrorDescription>
    </ErrorWrapper>
  );

  export default Error;