import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { ButtonPrimary } from '../../atoms/Button/style'

export const MobileHeader = styled(motion.header)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    padding: 24px 0 24px;
    width: 100%;
  `}
`

export const HeaderSpacing = styled.div`
  height: 100px;
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
    justify-content: center;
    width: 100%;
    padding-top: 24px;
    margin-top: auto;
    border-top: 1px outset ${theme.colors.darkShades.d_70};

    ${ButtonPrimary} {
      // Breakpoint Desktops 1200px
      ${breakpoint(theme.breakpoints.xl)} {
        font-size: ${theme.fontSize.xxs};
      }
    }
  `}
`
