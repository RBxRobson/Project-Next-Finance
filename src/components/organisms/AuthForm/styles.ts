import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

import { BtnGreen } from '../../atoms/Button/style'

export const Form = styled.form`
  display: ruby;
`

export const InputsWrapper = styled.div<{ $authType: string }>`
  ${({ $authType, theme }) => css`
    display: grid;
    grid-template-columns: ${$authType === 'register' ? '1fr 1fr' : '1fr'};
    gap: 30px;
    margin-bottom: 50px;
    width: 100%;

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      grid-template-columns: 1fr;
    }
  `}
`

export const InputController = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`

export const BtnShowPassword = styled(motion.button)`
  cursor: pointer;
  border: none;
  background: transparent;

  img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    filter: brightness(0.38);
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkShades.d_10};
    border: 2px solid ${theme.colors.darkShades.d_35};
    outline: none;
    border-radius: 88px;
    padding: 16px 20px;
    width: 100%;
    transition: all 300ms ease-in-out;

    &::placeholder {
      color: ${theme.colors.darkShades.d_35};
    }

    &:focus {
      border: 2px solid ${theme.colors.greenShades.g_65};
    }
  `}
`

export const ButtonsWrapper = styled.div`
  width: 100%;
`

export const FormConfirmBtn = styled(BtnGreen)`
  width: 100%;
  max-width: 490px;
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
    max-width: 520px;
    margin: 24px auto;

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
