import { FC } from "react";

import { ButtonStyled } from "./styles";
import { IButton } from "./types";

export const Button: FC<IButton> = ({ type, handler, isDisabled }) => (
  <ButtonStyled disabled={isDisabled} onClick={handler}>
    {type}
  </ButtonStyled>
);
