import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const BenefitsCards = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 80px;
    gap: 1px;
    background-color: ${theme.colors.darkShades.d_15};

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      grid-template-columns: 1fr;
      gap: 0;
    }
  `}
`

export const CardContainer = styled.li`
  ${({ theme }) => css`
    padding: 50px;
    background-color: ${theme.colors.darkShades.d_10};

    &:nth-child(odd) {
      padding-left: 0;
    }

    &:nth-child(even) {
      padding-right: 0;
    }

    &:nth-child(1),
    &:nth-child(2) {
      padding-top: 0;
    }

    &:nth-last-child(1),
    &:nth-last-child(2) {
      padding-bottom: 0;
    }

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      text-align: start;
      padding: 0;
      padding-bottom: 30px;

      &:nth-last-child(2) {
        padding-bottom: 30px;
      }
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    padding: 50px;
    background-color: ${theme.colors.darkShades.d_11};
    border: 1px solid ${theme.colors.darkShades.d_15};
    border-radius: 50px 20px;

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      padding: 40px;
    }

    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      padding: 24px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px 20px;
      background: linear-gradient(
        320deg,
        rgba(0, 0, 0, 0) 70%,
        ${theme.colors.greenShades.g_60} 100%
      );
      opacity: 0.035;
    }
  `}
`

export const CardTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    img {
      width: 80px;
      height: 80px;

      // Breakpoint Desktop 576px
      ${breakpoint(theme.breakpoints.sm)} {
        width: 70px;
        height: 70px;
      }
    }

    h3 {
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontWeight.regular};

      // Breakpoint Desktop 576px
      ${breakpoint(theme.breakpoints.sm)} {
        font-size: ${theme.fontSize.xs};
      }
    }
  `}
`
