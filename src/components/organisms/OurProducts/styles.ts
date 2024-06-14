import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const List = styled(motion.ul)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    & > :first-child {
      padding-right: 50px;
    }

    & > :last-child {
      padding-left: 50px;
    }

    & > :nth-child(2) {
      border: 2px solid ${theme.colors.darkShades.d_15};
      padding: 0 50px;
      border-top: none;
      border-bottom: none;
    }

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      grid-template-columns: 1fr;
      max-width: 800px;
      margin: 0 auto;

      & > :first-child {
        padding: 0;
        padding: 50px 0;
      }

      & > :last-child {
        padding: 0;
        padding-top: 50px;
      }

      & > :nth-child(2) {
        padding: 50px 0;
        border: 2px solid ${theme.colors.darkShades.d_15};
        border-left: none;
        border-right: none;
      }
    }
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 100px;

    img {
      margin: 0 auto;
      width: 78px;
      height: 78px;
    }

    h4 {
      font-size: ${theme.fontSize.lg};
      margin: 30px 0 20px;
      font-weight: ${theme.fontWeight.regular};
    }

    p {
      font-weight: ${theme.fontWeight.light};
      color: ${theme.colors.darkShades.d_70};
    }

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      margin: 0;
    }
  `}
`
