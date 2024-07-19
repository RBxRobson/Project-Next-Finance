import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { BtnGreen } from '../../atoms/Button/style'
import { Section } from '../../templates/SectionContainer/style'

export const HeroContent = styled(Section)`
  position: relative;
`

export const Tag = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    padding: 10px 20px 10px 12px;
    border-radius: 60px;
    font-weight: ${theme.fontWeight.light};
    background-color: ${theme.colors.darkShades.d_15};
  `}
`

export const HeroTitleWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 826px;
    z-index: 1;

    h2 {
      padding: 24px 0 14px;
    }

    p {
      font-weight: ${theme.fontWeight.light};
      line-height: 150%;
      padding-bottom: 50px;
    }

    // Breakpoint Tablet
    ${breakpoint(theme.breakpoints.lg)} {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 100%;

      ${BtnGreen} {
        width: 100%;
        max-width: 460px;
      }
    }

    ${breakpoint(theme.breakpoints.sm)} {
      ${BtnGreen} {
        width: 80%;
      }
    }
  `}
`

export const AbstractDesign = styled.img`
  ${({ theme }) => css`
    @keyframes slide {
      50% {
        transform: scale(0.95) translateX(-4px) translateY(4px);
      }

      100% {
        transform: scale(1.05) translateX(4px) translateY(-4px);
        filter: contrast(1.5);
      }
    }

    position: absolute;
    right: 0;
    top: 100px;
    animation: slide 4s ease-out infinite alternate;
    z-index: -1;

    // Breakpoint Desktops
    ${breakpoint(theme.breakpoints.xl)} {
      width: 300px;
      top: 20px;
    }

    // Breakpoint Tablets
    ${breakpoint(theme.breakpoints.lg)} {
      display: none;
    }
  `}
`
