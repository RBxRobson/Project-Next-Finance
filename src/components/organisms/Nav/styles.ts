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
      padding-top: 20px;
      border-top: 1px outset ${theme.colors.darkShades.d_70};
    }
  `}
`

export const Link = styled(motion(RouterLink))`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: ${theme.fontWeight.regular};
    border-radius: 82px;

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
