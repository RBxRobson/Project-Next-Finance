import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Section = styled.section`
  ${({ theme }) => css`
    &.container {
      margin-bottom: 150px;
    }

    h2 {
      margin-bottom: 14px;
      font-size: ${theme.fontSize.xxl};
      font-weight: ${theme.fontWeight.medium};

      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.xxl};
      }
    }

    & > p {
      margin-bottom: 80px;
    }

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      h2 {
        font-size: ${theme.fontSize.xl};

        span {
          font-size: ${theme.fontSize.xl};
        }
      }
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      text-align: center;

      &.container {
        margin-bottom: 80px;
      }

      & > p {
        margin-bottom: 40px;
      }
    }

    // Breakpoint Mobile 576px
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
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    p {
      max-width: 910px;
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      flex-direction: column;
      gap: 20px;
    }
  `}
`
