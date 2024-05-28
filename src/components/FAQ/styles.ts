import styled, { css } from 'styled-components'

export const HeaderFAQ = styled.header`
  a {
    text-decoration: underline;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 80px 0 60px;
  box-shadow: inset 0px -200px 100px -60px rgba(25, 25, 25, 1);
  position: relative;
`

export const CardFAQ = styled.div`
  ${({ theme }) => css`
    border-radius: 14px;
    border: 1px solid ${theme.colors.darkShades.d_15};
    padding: 50px;
    z-index: -1;

    h4 {
      border-bottom: 1px solid ${theme.colors.darkShades.d_15};
      padding-bottom: 30px;
      margin-bottom: 30px;
    }
  `}
`

export const ButtonFAQ = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    border: 1px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_11};
    padding: 18px;
    border-radius: 100px;
  `}
`
