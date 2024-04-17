import styled, { css } from 'styled-components'

export const TabSelectorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: fit-content;
    background-color: ${theme.colors.darkShades.d_11};
    border: 1px solid ${theme.colors.darkShades.d_15};
    padding: 14px 16px;
    border-radius: 82px;

    button {
      cursor: pointer;
      padding: 14px 24px;
      border-radius: 140px;
    }
  `}
`
