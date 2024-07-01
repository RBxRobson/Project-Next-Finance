import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { ButtonPrimary } from '../../atoms/Button/style'

export const MobileHeader = styled(motion.header)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0 24px;
    position: sticky;
    top: 0;
    z-index: 11;
    margin-bottom: 50px;
    backdrop-filter: blur(1px);
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const AccessButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${ButtonPrimary} {
      padding: 8px;
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
