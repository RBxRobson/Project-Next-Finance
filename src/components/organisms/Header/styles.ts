import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { ButtonPrimary } from '../../atoms/Button/style'

export const Header = styled(motion.header)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0 24px;
    position: sticky;
    top: 0;
    z-index: 1;
    margin-bottom: 50px;
    backdrop-filter: blur(1px);
  `}
`

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const FloatingHeader = styled(motion.header)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.darkShades.d_11};
    border: 1px solid ${theme.colors.darkShades.d_15};
    border-radius: 100px;
    padding: 20px 34px;

    &.container {
      margin: 50px auto 150px;
    }
  `}
`

export const AccessButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${ButtonPrimary} {
      background-color: transparent;
      color: ${theme.colors.greenShades.g_65};

      // Breakpoint Desktops 1200px
      ${breakpoint(theme.breakpoints.xl)} {
        font-size: ${theme.fontSize.xxs};
      }
    }

    .register-btn {
      padding: 0;
      /* color: ${theme.colors.absoluteColors.white}; */
    }
  `}
`
