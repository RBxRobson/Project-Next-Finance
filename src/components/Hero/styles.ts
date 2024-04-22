import styled, { css, keyframes } from 'styled-components'

export const HeroContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    margin-top: 54px;
    padding-top: 100px;

    h2 {
      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.extra_large};
      }
    }
  `}
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

    h2 {
      padding: 24px 0 14px;
    }

    p {
      font-weight: ${theme.fontWeight.light};
      line-height: 150%;
      padding-bottom: 50px;
    }
  `}
`

export const BtnOpenAccount = styled.button`
  padding: 18px 30px;
`

export const AbstractDesign = styled.img`
  @keyframes slide {
    50% {
      transform: scale(0.95) translateX(-4px) translateY(4px);
    }

    100% {
      transform: scale(1.05) translateX(4px) translateY(-4px);
      filter: contrast(3);
    }
  }

  position: absolute;
  right: 0;
  top: 100px;
  animation: slide 4s ease-out infinite alternate;
`
