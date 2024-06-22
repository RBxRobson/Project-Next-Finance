import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { iconLeft, iconRight } from '../../../assets/images'

export const Carousel = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    padding: 50px 80px;

    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      padding: 150px 0;
    }

    // Estilos do swiper
    .swiper {
      position: static;
      //Sombreamento interno
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100px;
        pointer-events: none;
        z-index: 2;

        ${breakpoint(theme.breakpoints.md)} {
          width: 50px;
        }
      }

      &::before {
        left: 80px;
        box-shadow: inset 50px 0 100px -30px ${theme.colors.darkShades.d_10};

        ${breakpoint(theme.breakpoints.md)} {
          box-shadow: inset 20px 0 50px -15px ${theme.colors.darkShades.d_10};
        }
        ${breakpoint(theme.breakpoints.sm)} {
          left: 0;
        }
      }

      &::after {
        right: 80px;
        box-shadow: inset -50px 0 100px -30px ${theme.colors.darkShades.d_10};

        ${breakpoint(theme.breakpoints.md)} {
          box-shadow: inset -20px 0 50px -15px ${theme.colors.darkShades.d_10};
        }
        ${breakpoint(theme.breakpoints.sm)} {
          right: 0;
        }
      }

      .swiper-slide {
        height: auto;
      }

      //Botões Swiper
      .swiper-button-prev,
      .swiper-button-next {
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${theme.colors.darkShades.d_15};
        background-color: ${theme.colors.darkShades.d_11};
        padding: 28px;
        margin: 0;
        border-radius: 100px;
        transition: ease-out 300ms;

        &:hover {
          filter: brightness(1.2);
        }

        &:active {
          scale: 0.8;
        }

        &::after {
          content: '';
          position: absolute;
          width: 34px;
          height: 34px;
        }
      }
      //Icone botão voltar
      .swiper-button-next::after {
        background-image: url(${iconRight});
      }
      //Icone botão próximo
      .swiper-button-prev::after {
        background-image: url(${iconLeft});
      }

      // Breakpoint Desktop 576px
      ${breakpoint(theme.breakpoints.sm)} {
        //Icone botão voltar
        .swiper-button-next {
          top: auto;
          bottom: 25px;
          right: calc(50% - 80px);
        }
        //Icone botão próximo
        .swiper-button-prev {
          top: auto;
          bottom: 25px;
          left: calc(50% - 80px);
        }
      }
    }
  `}
`

export const Testimony = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    gap: 50px;

    h4 {
      margin-top: auto;
    }
  `}
`
