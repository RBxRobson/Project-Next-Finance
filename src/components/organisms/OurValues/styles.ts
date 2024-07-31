import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const ValuesList = styled.ul`
  ${({ theme }) => css`
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  `}
`

export const Cards = styled.li`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.greenShades.g_60};
    padding-left: 24px;

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      width: 100%;
      max-width: 660px;
      margin: 0 auto;
      text-align: start;
    }

    h3 {
      font-size: ${theme.fontSize.lgmd};
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.colors.darkShades.d_30};
      margin-bottom: 24px;
    }
  `}
`
