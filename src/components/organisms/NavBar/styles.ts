import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { ButtonPrimary } from '../../atoms/Button/style'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 34px;
    border: 1px solid ${theme.colors.darkShades.d_15};
    border-radius: 100px;
    background-color: ${theme.colors.darkShades.d_11};

    &.container {
      margin: 50px auto 150px;
    }

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      ${ButtonPrimary} {
        font-size: ${theme.fontSize.xxs};
      }
    }
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontWeight.medium};
    }

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      h1 {
        font-size: ${theme.fontSize.sm};
      }

      img {
        width: 36px;
        height: 36px;
      }
    }
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 26px;

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      gap: 20px;
    }
  `}
`

export const Link = styled(RouterLink)`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: ${theme.fontWeight.regular};
    border-radius: 82px;
    transition:
      background-color 300ms,
      padding 300ms;

    &.active {
      background-color: ${theme.colors.darkShades.d_15};
      padding: 12px 24px;
    }

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      font-size: ${theme.fontSize.xxs};
    }
  `}
`

export const AccessButtons = styled.div`
  display: flex;
  align-items: center;

  // Necessário para manter alinhamento da navbar
  .pd-lf-0 {
    padding-left: 0;
  }
`
