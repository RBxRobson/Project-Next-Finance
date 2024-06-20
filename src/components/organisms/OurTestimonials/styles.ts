import styled, { css } from 'styled-components'
import { Swiper } from 'swiper'

import { breakpoint } from '../../../styles/themes'

import { iconLeft, iconRight } from '../../../assets/images'

export const Carousel = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 50px 80px;

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
      }

      &::before {
        left: 80px;
        box-shadow: inset 50px 0 100px -30px ${theme.colors.darkShades.d_10};
      }

      &::after {
        right: 80px;
        box-shadow: inset -50px 0 100px -30px ${theme.colors.darkShades.d_10};
      }

      .swiper-wrapper {
        // Swiper Cards
        .swiper-slide {
          display: flex;
          flex-direction: column;
          text-align: center;
          height: auto;
          gap: 50px;

          h4 {
            margin-top: auto;

            ${breakpoint(theme.breakpoints.md)} {
              margin-top: 0;
            }
          }
        }
      }

      //Botões Swiper
      .swiper-button-prev,
      .swiper-button-next {
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
    }
  `}
`
