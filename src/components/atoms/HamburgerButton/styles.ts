import { motion } from 'framer-motion'
import styled from 'styled-components'
import { css } from 'styled-components'

export const Svg = styled(motion.svg)`
  ${({ theme }) => css`
    overflow: hidden;
    outline: none;
    width: 28px;
    height: 28px;

    line {
      stroke: ${theme.colors.greenShades.g_60};
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `}
`

export const BtnHamburger = styled(motion.button)`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  border-radius: 82px;
  background-color: transparent;
`
