import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkShades.d_11};
    padding: 100px 0 50px;
    margin-top: 150px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${theme.fontSize.S}
      font-weight: ${theme.fontWeight.regular};
    }
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
      font-size: ${theme.fontSize.M};
      font-weight: ${theme.fontWeight.medium};
    }
  `}
`

export const Links = styled.ul`
  ${({ theme }) => css`
    display: flex;
    margin-top: 50px;
    gap: 26px;

    a {
      color: ${theme.colors.whiteShades.w_90};
    }
  `}
`

export const InfosContact = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px 0;
    margin: 50px 0;
    border-width: 2px 0;
    border-style: solid;
    border-color: ${theme.colors.darkShades.d_15};

    li {
      display: flex;
      align-items: center;
      gap: 8px;

      p {
        color: ${theme.colors.whiteShades.w_90};
      }
    }
  `}
`

export const FinalContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100px;
    border: 2px solid ${theme.colors.darkShades.d_15};
    background-color: ${theme.colors.darkShades.d_10};

    div {
      a {
        color: ${theme.colors.darkShades.d_70};
        font-size: ${theme.fontSize.S};
        font-weight: ${theme.fontWeight.light};
      }

      & > :first-child {
        padding-right: 12px;
        border-right: 1px solid ${theme.colors.darkShades.d_70};
        margin-right: 12px;
      }
    }
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 14px;

    li {
      position: relative;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-color: ${theme.colors.greenShades.g_60};

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 24px;
        height: 24px;
      }
    }
  `}
`
