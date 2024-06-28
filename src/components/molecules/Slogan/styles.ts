import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Slogan = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: ${theme.fontSize.md};
      font-weight: ${theme.fontWeight.medium};
    }

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      h1 {
        font-size: ${theme.fontSize.sm};
      }

      img {
        width: 36px;
        height: 36px;
      }
    }
  `}
`
