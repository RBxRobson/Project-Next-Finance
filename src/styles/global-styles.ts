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
      font-size: ${theme.fontSize.normal};
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

    h2 {
      font-size: ${theme.fontSize.extra_large};
      font-weight: ${theme.fontWeight.medium};
    }

    .container {
      width: 1600px;
      margin: 50px auto 0;
    }

    .green-button {
      cursor: pointer;
      border: none;
      border-radius: 82px;
      padding: 14px 30px;
      background-color: ${theme.colors.greenShades.g_60};
      color: ${theme.colors.darkShades.d_11};
    }
  `}
`

export default GlobalStyles
