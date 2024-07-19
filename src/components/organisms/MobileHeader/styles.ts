import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const MobileHeader = styled(motion.header)`
  display: flex;
  margin-bottom: 24px;
`

export const HeaderContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

export const NavWrapper = styled(motion.div)`
  ${({ theme }) => css`
    z-index: 1;
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
