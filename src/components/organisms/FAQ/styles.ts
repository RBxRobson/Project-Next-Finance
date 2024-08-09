import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const HeaderFAQ = styled.header`
  a {
    text-decoration: underline;
  }
`

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CardFAQ = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 14px;
    padding: 30px;
    text-align: start;

    p {
      overflow-y: hidden;
      max-width: 1100px;
    }

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      padding: 20px;
    }
  `}
`

export const CardHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    h4 {
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontWeight.regular};
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      gap: 100px;
      text-align: start;

      h4 {
        font-size: ${theme.fontSize.sm};
      }
    }

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      gap: 8px;

      h4 {
        font-size: ${theme.fontSize.xs};
      }
    }
  `}
`

export const IconX = styled(motion.svg)`
  display: block;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  fill: none;
  stroke: ${({ theme }) => theme.colors.darkShades.d_70};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`
