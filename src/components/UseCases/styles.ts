import styled, { css } from 'styled-components'

export const UseCaseSection = styled.section`
  ${({ theme }) => css`
    h2 {
      margin-bottom: 14px;

      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.extra_large};
      }
    }
  `}
`

export const UseCaseArticle = styled.article`
  display: flex;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 50px;
`

export const StaticsWrapper = styled.div`
  display: flex;
  gap: 50px;
`
