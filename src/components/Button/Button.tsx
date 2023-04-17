import { FC } from "react";

import { CustomButton } from "./styles";
import { IButton } from "./types";

const Button: FC<IButton> = ({ children, ...restProps }) => (
  <CustomButton {...restProps}>
    {children}
  </CustomButton>
);

export default Button;
