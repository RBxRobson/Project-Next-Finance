import styled, { css } from 'styled-components'

export const CtaContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
    border-radius: 20px;
    border: 2px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_11};

    img {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
    }

    div {
      z-index: 1;
      max-width: 80%;
    }

    h3 {
      margin-bottom: 14px;
      font-weight: 400;
      font-size: ${theme.fontSize.XL};

      span {
        font-size: ${theme.fontSize.XL};
      }
    }

    button {
      padding: 18px 30px;
    }
  `}
`
