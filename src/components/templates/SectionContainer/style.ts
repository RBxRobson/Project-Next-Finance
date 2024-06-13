import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Section = styled.section`
  ${({ theme }) => css`
    padding-bottom: 150px;

    h2 {
      margin-bottom: 14px;
      font-size: ${theme.fontSize.xxl};
      font-weight: ${theme.fontWeight.medium};

      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.xxl};
      }
    }

    ${breakpoint(theme.breakpoints.xl)} {
      h2 {
        font-size: ${theme.fontSize.xl};

        span {
          font-size: ${theme.fontSize.xl};
        }
      }
    }

    // Breakpoint Mobile
    ${breakpoint(theme.breakpoints.sm)} {
      h2 {
        font-size: ${theme.fontSize.lgmd};

        span {
          font-size: ${theme.fontSize.lgmd};
        }
      }
    }
  `}
`

export const WrapperTabSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    max-width: 910px;
  }
`
