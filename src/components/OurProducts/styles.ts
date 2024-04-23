import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const SectionContent = styled.section`
  padding: 150px 0;
`

export const HeaderSection = styled.header`
  p {
    max-width: 910px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`

export const ArticleWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Article = styled.article`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 100px;

    img {
      margin: 0 auto;
      width: 78px;
      height: 78px;
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
