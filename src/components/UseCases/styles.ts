import styled, { css } from 'styled-components'

export const UseCaseSection = styled.section`
  h2 {
    padding-bottom: 14px;
  }
`

export const UseCaseArticle = styled.article`
  display: flex;
  gap: 100px;
  padding-top: 80px;
`

export const CardsWrapper = styled.div`
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
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    width: 314px;
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
      font-size: ${theme.fontSize.S};
      font-weight: ${theme.fontWeight.regular};
    }
  `}
`

export const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    h4 {
      font-size: ${theme.fontSize.L};
      margin-bottom: 14px;
    }
  `}
`

export const StaticsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 50px;
    padding: 62px 0;

    span {
      font-size: ${theme.fontSize.XXL};
      color: ${theme.colors.greenShades.g_60};
    }
  `}
`
