import styled, { css } from 'styled-components'

import { ButtonPrimary } from '../../atoms/Button/style'

export const Form = styled.form`
  display: ruby;
`

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  width: 100%;
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkShades.d_10};
    border: 1px solid ${theme.colors.darkShades.d_15};
    border-radius: 88px;
    padding: 16px;
    padding-left: 20px;

    &::placeholder {
      color: ${theme.colors.darkShades.d_35};
    }

    &:focus {
      outline: 1px solid ${theme.colors.greenShades.g_60};
    }
  `}
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`

export const FormConfirmBtn = styled(ButtonPrimary)`
  width: 100%;
`

export const BtnChangeAuth = styled(FormConfirmBtn)`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkShades.d_15};
    color: ${theme.colors.absoluteColors.white};
    margin-top: 24px;
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 24px 0;

    p {
      padding: 0 16px;
    }

    &::after,
    &::before {
      content: '';
      border-bottom: 1px solid ${theme.colors.darkShades.d_70};
      flex: 1 0 auto;
      height: 1px;
    }
  `}
`

export const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  button {
    position: relative;
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 80px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
