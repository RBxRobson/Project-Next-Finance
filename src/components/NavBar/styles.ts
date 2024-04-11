import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 50px;
    padding: 20px 34px;

    border: 1px solid ${theme.colors.darkShades.d_15};
    border-radius: 100px;
    background-color: ${theme.colors.darkShades.d_11};

    font-size: 18px;
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: 22px;
      font-weight: ${theme.fontWeight.medium};
    }
  `}
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 26px;
`

export const Links = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: ${theme.fontWeight.regular};

    &.active {
      background-color: ${theme.colors.darkShades.d_15};
      padding: 12px 24px;
      border-radius: 82px;
    }
  `}
`

export const AccessButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  button {
    font-size: 18px;
    cursor: pointer;
  }
`

export const BtnSignUp = styled.button`
  background: transparent;
  border: none;
`
