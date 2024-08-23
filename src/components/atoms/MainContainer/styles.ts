import { motion } from 'framer-motion'
import styled from 'styled-components'
import { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Main = styled(motion.main)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 150px;

    // Breakpoint Mobile 992px
    ${breakpoint(theme.breakpoints.lg)} {
      gap: 80px;
    }
  `}
`
