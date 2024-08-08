import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const TextArticle = styled.div`
  ${({ theme }) => css`
    padding-left: 40px;
    border-left: 1px solid ${theme.colors.greenShades.g_60};

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      padding-left: 20px;
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      border: none;
      border-top: 1px solid ${theme.colors.greenShades.g_60};
      margin-top: -2px;
      padding-top: 30px;
      z-index: 2;
    }

    h3 {
      font-size: ${theme.fontSize.lgmd};
      font-weight: ${theme.fontWeight.medium};
      margin-bottom: 10px;

      // Breakpoint Mobile 578px
      ${breakpoint(theme.breakpoints.sm)} {
        font-size: ${theme.fontSize.lg};
      }
    }
  `}
`

export const ArticleContainer = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
    }

    &.grid-reverse {
      grid-template-columns: 60% 40%;
      margin-top: -50px;

      ${TextArticle} {
        border: none;
        border-right: 1px solid ${theme.colors.greenShades.g_60};
        padding-left: 0;
        padding-right: 40px;

        // Breakpoint Desktop 1200px
        ${breakpoint(theme.breakpoints.xl)} {
          padding-right: 20px;
        }

        // Breakpoint Tablet 992px
        ${breakpoint(theme.breakpoints.lg)} {
          border: none;
          border-top: 1px solid ${theme.colors.greenShades.g_60};
          padding-right: 0;
        }
      }

      // Breakpoint Desktop 1200px
      ${breakpoint(theme.breakpoints.xl)} {
        margin-top: -10px;
      }

      // Breakpoint Tablet 992px
      ${breakpoint(theme.breakpoints.lg)} {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 50px;
      }
    }
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 60px;
    padding-bottom: 0;
    border-radius: 50px 50px 20px 20px;
    background-color: ${theme.colors.darkShades.d_11};
    border: 1px solid ${theme.colors.darkShades.d_15};
    z-index: 1;
    overflow-y: hidden;

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      border-radius: 10px 10px 20px 20px;
    }

    // Breakpoint Tablet 992px
    ${breakpoint(theme.breakpoints.lg)} {
      border-radius: 50px 50px 0 0;
      padding: 20px;
      padding-bottom: 0;
    }
  `}
`

export const BackgroundBanner = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const BannerImg = styled.img`
  width: 100%;
  margin-bottom: -6px;
  border-radius: 50px 50px 0 0;
`
