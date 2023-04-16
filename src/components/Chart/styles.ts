import styled from "styled-components";

import { IChartStyled } from "./types";

export const ChartWrapper = styled("div")<IChartStyled>(({ size }) => ({
  width: size === "small" ? "150px" : "60vw",
}));
