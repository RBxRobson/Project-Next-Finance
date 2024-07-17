import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const AccessButtons = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      justify-content: center;
      padding: 24px 0;
      border-top: 1px outset ${theme.colors.darkShades.d_70};
    }
  `}
`
