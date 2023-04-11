import styled from "styled-components";

export const InfoStyled = styled("div")({
  width: "100%",
});

export const InfoTitle = styled("h4")({
  textAlign: "center",
});

export const InfoItems = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gap: "10px",
  marginTop: "10px",
  "@media (max-width: 820px)": {
    gridTemplateColumns: "auto auto",
  },
  "@media (max-width: 550px)": {
    gridTemplateColumns: "auto",
  },
});

export const InfoItem = styled("div")({
  display: 'flex',
  gap: '5px',
  padding: "5px",
  border: "2px solid var(--pink)",
  borderRadius: "4px",
});
