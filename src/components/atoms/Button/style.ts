import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    white-space: nowrap;
    font-weight: ${theme.fontWeight.regular};

    &.btn--disabled,
    &.btn__register {
      background-color: transparent;
      color: ${theme.colors.absoluteColors.white};
    }

    &.btn__register {
      padding-left: 0;
    }

    // Breakpoint Desktops 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      font-size: ${theme.fontSize.xxs};
    }
  `}
`

export const BtnGreen = styled(Button)`
  ${({ theme }) => css`
    border-radius: 82px;
    padding: 14px 30px;
    background-color: ${theme.colors.greenShades.g_60};
    color: ${theme.colors.darkShades.d_11};
  `}
`

export const BtnGreenLarge = styled(BtnGreen)`
  border-radius: 140px;
  padding: 14px 24px;
`
