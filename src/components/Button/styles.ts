import styled from "styled-components";

export const ButtonWrapper = styled("button")({
    height: '100%',
    padding: '10px',
    border: 'none',
    background: 'none',
    borderRadius: '50%',
    fontSize: '52px',
    color: 'var(--white)',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: "color 0.3s, transform 0.3s",
    ':hover': {
        color: 'var(--pink)',
        transform: 'scale(1.2)',
    },
    ':disabled': {
        pointerEvents: 'none',
        opacity: '0.3',
    }
});
