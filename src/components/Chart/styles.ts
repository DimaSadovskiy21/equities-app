import styled from "styled-components";

import { IChartStyled } from './types';

export const ChartsStyled = styled("div")<IChartStyled>(({size}) => ({
    width: size === 'small' ? '150px' : '800px',
    backgroundColor: size === 'large' ? 'var(--white)' : '',
    padding: size === 'large' ? '30px' : '',
    borderRadius: '10px',
    '@media (max-width: 1000px)': {
        width: size === 'small' ? '150px' : '70vw',
      },
      '@media (max-width: 820px)': {
        width: size === 'small' ? '150px' : '80vw',
      },
}));

export const  GoBackButton = styled("button")({
  border: 'none',
  background: 'none',
  fontSize: '36px',
  cursor: 'pointer',
  paddingRight: '20px',
  transform: 'translate(0, -50%)',
  transition: 'all 0.3s',
  ':hover': {
    transform: 'translate(-10px, -50%)',
  }
})