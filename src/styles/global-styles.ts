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
      padding: 0;
      margin: 0;
      color: ${theme.colors.absoluteColors.white};
      font-family: lexend, sans-serif;
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

    * {
      box-sizing: border-box;
    }

    .container {
      width: 1600px;
      margin: 50px auto 0;
    }
  `}
`

export default GlobalStyles
