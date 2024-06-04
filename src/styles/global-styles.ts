import { createGlobalStyle, css } from 'styled-components'

import lexendFont from '../assets/fonts/Lexend-VariableFont_wght.ttf'
import abstract_svg from '../assets/images/abstract_design_1.svg'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: lexend;
    src: url(${lexendFont})
  }

  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      color: ${theme.colors.absoluteColors.white};
      font-size: ${theme.fontSize.S};
      font-family: lexend, sans-serif;
      list-style: none;
    }

    body {
      background-color: ${theme.colors.darkShades.d_10};
      background-image: url(${abstract_svg});
      background-repeat: no-repeat;
      background-position: 0 -70px;
      background-size: 800px 700px;
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
      width: 100%;
      margin: 0 auto;
    }
  `}
`

export default GlobalStyles
