import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { Section } from '../../templates/SectionContainer/style'

export const CtaContent = styled(Section)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
    border-radius: 20px;
    border: 2px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_11};

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      flex-direction: column;
      padding: 50px;
    }

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      flex-direction: column;
      padding: 20px;
    }

    img {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
    }

    div {
      z-index: 1;
      max-width: 80%;

      // Breakpoint Tablet 992px
      ${breakpoint(theme.breakpoints.lg)} {
        max-width: 100%;
        margin-bottom: 30px;
      }
    }
  `}
`
