import styled from "styled-components";

export const Loader = styled('div')({
  position: 'relative',
  backgroundColor: 'var(--pink)',
  height: '150px',
  width: '150px',
  borderRadius: '50%',
  background: 'conic-gradient(var(--background), var(--pink))',
  animation: 'rotate 1s linear infinite',
  margin: '0 auto',
  ':before, :after': {
    content: "''",
    position: 'absolute',
    borderRadius: '50%',
  },
  ':before': {
    width: '120px',
    height: '120px',
    top: '15px',
    left: '15px',
    backgroundColor: 'var(--background)',
  },
  ':after': {
    height: '15px',
    width: '15px',
    backgroundColor: 'var(--pink)',
    top: 0,
    left: '68px',
  },
  '@keyframes rotate': {
    from: {
      transform: 'rotate(0)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
});