import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const ButtonPrimary = styled(motion.button)`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    border-radius: 82px;
    padding: 14px 30px;
    font-weight: ${theme.fontWeight.regular};
    background-color: ${theme.colors.greenShades.g_60};
    color: ${theme.colors.darkShades.d_11};

    &.is--deactivated {
      background-color: transparent;
      color: ${theme.colors.absoluteColors.white};
    }
  `}
`

export const ButtonSecondary = styled(ButtonPrimary)`
  ${({ theme }) => css`
    border-radius: 140px;
    padding: 14px 24px;
  `}
`
