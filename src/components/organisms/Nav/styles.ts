import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Nav = styled(motion.nav)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 26px;

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      gap: 20px;
    }

    &.nav-mobile {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      padding-top: 20px;
      gap: 20px;
      width: 100%;
      border-top: 1px outset ${theme.colors.darkShades.d_70};

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.md)} {
        align-items: center;
      }
    }
  `}
`

export const Link = styled(motion(RouterLink))`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: ${theme.fontWeight.regular};
    border-radius: 82px;
    transition: all 300ms;

    &.link-mobile {
      width: 100%;
      text-align: center;
      border-radius: 0;
    }

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      font-size: ${theme.fontSize.xxs};
    }
  `}
`
