import styled, { css } from 'styled-components'

export const SectionContent = styled.section`
  padding: 150px 0;
`

export const HeaderSection = styled.header`
  ${({ theme }) => css`
    h2 {
      margin-bottom: 14px;

      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.extra_large};
      }
    }

    p {
      max-width: 910px;
      color: ${theme.colors.darkShades.d_70};
      font-weight: ${theme.fontWeight.light};
    }

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  `}
`

export const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Article = styled.article`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 100px;

    img {
      margin: 0 auto;
    }

    h4 {
      font-size: font-weight: ${theme.fontSize.large};
      margin: 30px 0 20px;
      font-weight: regular;
    }

    p {
      font-weight: ${theme.fontWeight.light};
      color: ${theme.colors.darkShades.d_70};
    }

    &.border {
      border: 2px solid ${theme.colors.darkShades.d_15};
      padding: 0 50px;
      border-top: none;
      border-bottom: none;
    }

    &.padding-left {
      padding-left: 50px;
    }

    &.padding-right {
      padding-right: 50px;
    }
  `}
`
