import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const MobileHeader = styled(motion.header)`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: 50px;

    // Breakpoint Desktop 768px
    ${breakpoint(theme.breakpoints.md)} {
      margin-bottom: 36px;
    }

    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      margin-bottom: 24px;
    }
  `}
`

export const HeaderContainer = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

export const NavWrapper = styled(motion.div)`
  ${({ theme }) => css`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 420px;
    height: 100%;
    width: 100%;
    padding-top: 84px;
    background-color: ${theme.colors.darkShades.d_10};
  `}
`
