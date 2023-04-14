import styled from "styled-components";

export const EquitieStyled = styled("div")({
  display: "grid",
  gridTemplateAreas: `"n s c"
                        "p p c"`,
  gap: "5px",
  padding: "5px",
  border: "1px solid var(--dark-pink)",
  borderRadius: "10px",
  transition: "all 0.3s",
  ":hover": {
    borderColor: "var(--white)",
  },
});

export const EquitieOrdinalNumber = styled("div")({
  gridArea: "n",
});

export const EquitieSymbol = styled('div')({
  gridArea: "s",
});

export const EquitiePrice = styled("div")({
  gridArea: "p",
  color: "var(--pink)",
});

export const EquitieChart = styled("div")({
  gridArea: "c",
});
