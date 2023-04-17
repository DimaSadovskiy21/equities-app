import styled from "styled-components";

export const CustomButton = styled("button")({
    height: '100%',
    border: 'none',
    background: 'none',
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
