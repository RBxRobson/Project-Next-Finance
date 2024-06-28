import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Nav = styled.nav`
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
      align-items: start;
      padding-top: 40px;
      gap: 16px;

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.sm)} {
        align-items: center;
      }
    }
  `}
`

export const Link = styled(RouterLink)`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: ${theme.fontWeight.regular};
    border-radius: 82px;
    transition: all 300ms;

    &.active {
      background-color: ${theme.colors.darkShades.d_15};
      padding: 12px 24px;
    }

    &.active-secondary {
      transform: scale(1.1);
      padding-left: 8px;
      color: ${theme.colors.greenShades.g_65};
    }

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      font-size: ${theme.fontSize.xxs};
    }
  `}
`
