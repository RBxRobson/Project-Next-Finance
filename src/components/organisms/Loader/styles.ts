import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const LoaderWrapper = styled(motion.div)`
  ${({ theme }) => css`
    min-width: 100dvw;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      gap: 12px;
    }
  `}
`

export const TitleLoader = styled(motion.h1)`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl};
    font-weight: ${theme.fontWeight.semi_bold};

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      font-size: ${theme.fontSize.xl};
      font-weight: ${theme.fontWeight.semi_bold};
    }
  `}
`

export const Logo = styled(motion.img)`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      width: 50px;
      height: 50px;
    }
  `}
`
