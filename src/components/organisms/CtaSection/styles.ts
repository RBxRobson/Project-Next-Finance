import styled, { css } from 'styled-components'

import { Section } from '../../templates/SectionContainer/style'

export const CtaContent = styled(Section)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
    border-radius: 20px;
    border: 2px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_11};

    img {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
    }

    div {
      z-index: 1;
      max-width: 80%;
    }

    h2 {
      font-weight: 400;
      font-size: ${theme.fontSize.xl};

      span {
        font-size: ${theme.fontSize.xl};
      }
    }
  `}
`
