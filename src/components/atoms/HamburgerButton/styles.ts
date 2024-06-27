import { motion } from 'framer-motion'
import styled from 'styled-components'
import { css } from 'styled-components'

export const Svg = styled(motion.svg)`
  ${({ theme }) => css`
    cursor: pointer;
    overflow: hidden;
    outline: none;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${theme.colors.greenShades.g_60};

    line {
      stroke: ${theme.colors.darkShades.d_10};
      stroke-width: 1.5px;
    }
  `}
`
