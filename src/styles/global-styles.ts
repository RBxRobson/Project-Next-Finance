import { createGlobalStyle, css } from 'styled-components'

import lexendFont from '../assets/fonts/Lexend-VariableFont_wght.ttf'
import abstract_svg from '../assets/images/abstract_design_1.svg'
import { breakpoint } from './themes'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: lexend;
    src: url(${lexendFont});
    font-display: swap;
  }

  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      color: ${theme.colors.absoluteColors.white};
      font-size: ${theme.fontSize.xs};
      font-family: lexend, sans-serif;
      list-style: none;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background-color: ${theme.colors.darkShades.d_10};
      background-image: url(${abstract_svg});
      background-repeat: no-repeat;
      background-size: 35%;
      background-blend-mode: hard-light;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    p {
      color: ${theme.colors.darkShades.d_70};
      font-weight: ${theme.fontWeight.light};
    }

    .container {
      max-width: 1600px;
      width: 90%;
      margin: 0 auto;
    }

    .hidden-overflow {
      overflow: hidden;
    }

    // Estilização do root do swiper
    :root {
      --swiper-theme-color: ${theme.colors.greenShades.g_60};
    }

    // Breakpoint Desktops 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      body {
        background-size: 60%;
      }

      .container {
        width: 95%;
      }
    }

    // Breakpoint Mobile 768px
    ${breakpoint(theme.breakpoints.md)} {
      body {
        background-size: 80%;
      }
    }

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      * {
        font-size: ${theme.fontSize.xxs};
      }
    }
  `}
`

export default GlobalStyles
