import styled from "styled-components";

import {Error} from "assets";

export const ErrorStyled = styled("div")({
  display: "grid",
  gridTemplateAreas: 
    `"i t"
    "i d"`,
  gap: "0 30px",
  color: "var(--white)"
});

export const ErrorVector = styled(Error)({
  gridArea: "i",
});

export const ErrorTitle = styled("h4")({
  gridArea: "t",
  alignSelf: "selfStart",
  fontSize: "52px",
  
});

export const ErrorDescription = styled("p")({
  gridArea: "d",
  alignSelf: "center",
});