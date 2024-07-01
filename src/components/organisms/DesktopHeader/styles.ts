import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { ButtonPrimary } from '../../atoms/Button/style'

export const DesktopHeader = styled(motion.header)`
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
      // Breakpoint Desktops 1200px
      ${breakpoint(theme.breakpoints.xl)} {
        font-size: ${theme.fontSize.xxs};
      }
    }

    .register-btn {
      padding-left: 0;
    }
  `}
`
