import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Hero = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 50px;
    background-color: ${theme.colors.darkShades.d_11};
    border-radius: 20px;
    z-index: 1;

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      padding: 60px;
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      padding: 40px;
    }

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      padding: 10px;
    }
  `}
`

export const RadialDesign = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 500px;
    top: 0;
    right: 0;
    z-index: -1;

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      width: 380px;
    }
  `}
`

export const Banner = styled.img`
  ${({ theme }) => css`
    margin-left: calc(100% - 60%);
    width: calc(100% - 4px);
    max-width: 60%;
    border-radius: 20px;
    z-index: 1;

    // Breakpoint Desktop 1400px
    ${breakpoint(theme.breakpoints.xxl)} {
      margin-left: calc(100% - 715px);
      max-width: 715px;
    }

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      max-width: 100%;
      margin-left: 2px;
    }
  `}
`

export const HeroText = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    gap: 23px;
    width: 100%;
    max-width: 800px;
    padding: 80px;
    border-radius: 20px 0 80px 20px;
    background-color: ${theme.colors.darkShades.d_10};

    // Breakpoint Desktop 1400px
    ${breakpoint(theme.breakpoints.xxl)} {
      max-width: 600px;
      padding: 40px;
      text-align: center;
    }

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      position: relative;
      top: auto;
      max-width: 100%;
      border-radius: 40px;
      margin-top: -200px;
    }

    // Breakpoint Tablet 768px
    ${breakpoint(theme.breakpoints.md)} {
      padding: 20px;
      margin-top: -100px;
      border-radius: 40px 40px 18px 18px;
    }

    h2 {
      font-size: ${theme.fontSize.xxl};
      font-weight: ${theme.fontWeight.medium};

      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.xxl};
        white-space: nowrap;
      }

      // Breakpoint Desktop 1200px
      ${breakpoint(theme.breakpoints.xl)} {
        font-size: ${theme.fontSize.xl};

        span {
          font-size: ${theme.fontSize.xl};
        }
      }

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.sm)} {
        font-size: ${theme.fontSize.lgmd};

        span {
          font-size: ${theme.fontSize.lgmd};
        }
      }
    }
  `}
`
