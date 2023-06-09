import styled from "styled-components";

import { Button } from "components";

export const EquitiesWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "30px",
});

export const EquitiesBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "80vh",
  gap: "20px",
  padding: "30px",
  borderRadius: "30px",
  backgroundColor: "var(--dark-grey)",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset",
  color: "var(--white)",
});

export const ItemsList = styled("div")({
  display: "flex",
  flexDirection: "column",
  width:'300px',
  gap: "5px",
  padding: "1px 10px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  "::-webkit-scrollbar": {
    width: "2px",
    height: "100%",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--white)",
    borderRadius: "8px",
  },
});

export const ArrowStyled = styled(Button)({
  padding: "10px",
  fontSize: "52px",
  color: "var(--white)",
});
