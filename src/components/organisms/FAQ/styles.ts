import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const HeaderFAQ = styled.header`
  a {
    text-decoration: underline;
  }
`

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 60px;
`

export const CardFAQ = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 14px;
    border: 1px solid ${theme.colors.darkShades.d_15};
    padding: 30px;

    p {
      overflow-y: hidden;
    }
  `}
`

export const CardHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    h4 {
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontWeight.regular};
    }
  `}
`

export const IconX = styled(motion.svg)`
  display: block;
  width: 24px;
  height: 24px;
  fill: none;
  stroke: ${({ theme }) => theme.colors.darkShades.d_70};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`
