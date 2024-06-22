import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const WhyChooseArticle = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    padding-top: 80px;

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0px;

      &.column-reverse {
        flex-direction: column-reverse;
      }
    }
  `}
`

export const Cards = styled.ul`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 50px;
    background-color: ${theme.colors.darkShades.d_11};
    border-radius: 20px;

    & > img {
      position: absolute;
      z-index: 1;

      &.position_left {
        left: 0;
        top: 0;
      }

      &.position_right {
        right: 0;
        top: 0;
      }
    }

    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      grid-template-columns: 1fr;
    }
  `}
`

export const Card = styled.li`
  ${({ theme }) => css`
    z-index: 1;
    max-width: 314px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: ${theme.colors.darkShades.d_10};
    border-radius: 16px;

    img {
      width: 78px;
      height: 78px;
      margin-bottom: 24px;
    }

    p {
      text-align: center;
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.regular};
    }

    // Breakpoint Desktop 1200px
    ${breakpoint(theme.breakpoints.xl)} {
      max-width: 100%;
    }
  `}
`

export const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    h4 {
      font-size: ${theme.fontSize.lg};
      margin-bottom: 14px;
    }
  `}
`

export const StaticsWrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    padding: 62px 0;

    span {
      font-size: ${theme.fontSize.xxl};
      color: ${theme.colors.greenShades.g_60};
    }
    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      display: flex;
      flex-direction: column;
      span {
        font-size: ${theme.fontSize.lgmd};
      }
    }
  `}
`
