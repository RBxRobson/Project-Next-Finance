import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-top: 100px;
`

export const CarouselButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_11};
    padding: 14px;
    border-radius: 100px;

    img {
      width: 34px;
      height: 34px;
    }
  `}
`

export const List = styled(motion.ul)`
  ${({ theme }) => css`
    display: flex;
    margin: 0 auto;
    gap: 80px;
    width: 1400px;
    overflow-x: hidden;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 400px;
      pointer-events: none;
      z-index: 2;
    }

    &::before {
      left: 0;
      box-shadow: inset 250px 0 300px -60px ${theme.colors.darkShades.d_10};
    }

    &::after {
      right: 0;
      box-shadow: inset -250px 0 300px -60px ${theme.colors.darkShades.d_10};
    }
  `}
`

export const Item = styled(motion.li)`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  gap: 50px;
  text-align: center;
  position: relative; /* Necessário para aplicar z-index */
  z-index: 1; /* Garante que o Item esteja abaixo dos pseudo-elementos do List */

  h4 {
    margin-top: auto;
    text-align: center;
  }
`
