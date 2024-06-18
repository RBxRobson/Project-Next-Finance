import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-top: 100px;
`

export const CarouselButton = styled(motion.button)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_11};
    padding: 14px;
    border-radius: 100px;
    transition: opacity ease 300ms;

    img {
      width: 34px;
      height: 34px;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `}
`

export const CarouselWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow-x: hidden;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
      pointer-events: none;
      z-index: 2;
    }

    &::before {
      left: 0;
      box-shadow: inset 50px 0 100px -30px ${theme.colors.darkShades.d_10};
    }

    &::after {
      right: 0;
      box-shadow: inset -50px 0 100px -30px ${theme.colors.darkShades.d_10};
    }
  `}
`

export const List = styled(motion.ul)`
  display: flex;
  margin: 0 auto;
  gap: 80px;
`

export const ListItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  gap: 50px;
  text-align: center;
  position: relative;
  z-index: 1;

  h4 {
    margin-top: auto;
    text-align: center;
  }
`
