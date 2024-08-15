import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'
import { Card as CardBenefits } from '../OurBenefits/styles'

export const CardsList = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 90px;
    padding-bottom: 0;

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      padding: 40px;
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      grid-template-columns: 1fr;
      padding: 0;
    }
  `}
`

export const Card = styled(CardBenefits)`
  ${({ theme }) => css`
    border-radius: 20px;

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      max-width: 700px;
      margin: 0 auto;
    }

    &::after {
      border-radius: 20px;
    }
  `}
`

export const BackgroundBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    border-radius: 50px 50px 20px 20px;
    background-color: ${theme.colors.darkShades.d_11};
    z-index: -1;

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px 50px 20px 20px;
      background: linear-gradient(
        320deg,
        rgba(0, 0, 0, 0) 70%,
        ${theme.colors.greenShades.g_60} 100%
      );
      opacity: 0.035;
    }
  `}
`
