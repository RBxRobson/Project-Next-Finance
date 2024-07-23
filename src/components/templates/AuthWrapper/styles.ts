import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { background } from '../../../assets/images'

export const Background = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${theme.colors.darkShades.d_15};
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 100px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${background});
      background-position: start;
      opacity: 1;
      filter: brightness(0.12);
      z-index: 1;
    }

    /* Estilo para o conteúdo para que ele fique acima da imagem de fundo */
    & > * {
      z-index: 2;
    }

    & > img {
      position: absolute;
      top: 0;
      right: 0;
      width: 250px;

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.sm)} {
        width: 180px;
      }
    }
  `}
`

export const Wrapper = styled.div`
  text-align: center;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.greenShades.g_60};
    font-size: ${theme.fontSize.xl};
    font-weight: ${theme.fontWeight.medium};
    margin-bottom: 20px;

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      font-size: ${theme.fontSize.lgmd};
    }
  `}
`

export const Description = styled.p`
  margin-bottom: 50px;
`

export const BackBtn = styled(motion(RouterLink))`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${theme.colors.greenShades.g_60};

    img {
      width: 30px;
      height: auto;
    }
  `}
`
