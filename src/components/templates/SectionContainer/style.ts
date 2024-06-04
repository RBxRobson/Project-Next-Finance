import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    padding-bottom: 150px;

    h2 {
      margin-bottom: 14px;
      font-size: ${theme.fontSize.XXL};
      font-weight: ${theme.fontWeight.medium};

      span {
        color: ${theme.colors.greenShades.g_60};
        font-size: ${theme.fontSize.XXL};
      }
    }
  `}
`

export const WrapperTabSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    max-width: 910px;
  }
`
