import { FC } from "react";

import { ButtonWrapper } from "./styles";
import { IButton } from "./types";

export const Button: FC<IButton> = ({ type, handler, isDisabled }) => (
  <ButtonWrapper disabled={isDisabled} onClick={handler}>
    {type}
  </ButtonWrapper>
);
