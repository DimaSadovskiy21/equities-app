import styled from "styled-components";

import { IChartStyled } from "./types";

export const ChartsStyled = styled("div")<IChartStyled>(({ size }) => ({
  width: size === "small" ? "150px" : "60vw",
}));
