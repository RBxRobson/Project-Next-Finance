import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import {
  iconApple,
  iconGoogle,
  iconRadialFacebook
} from '../../../assets/images'
import { RootReducer } from '../../../redux'
import { toggleAuthType } from '../../../redux/reducers/auth'
import { useFormRegisterFormik, FormRegister } from './formikForms'

type Props = {
  authContent: Auth
}

const AuthForm = ({ authContent }: Props) => {
  const dispatch = useDispatch()
  const { authType } = useSelector((state: RootReducer) => state.auth)

  const { form_register: formRegister, form_login: formLogin } = authContent
  const formInfos = authType === 'login' ? formLogin : formRegister
  const formikFormRegister = useFormRegisterFormik()

  const [showPassword, setShowPassword] = useState(false)
  const getPasswordFieldProps = (visibleProp: string, hiddenProp: string) => {
    return showPassword ? visibleProp : hiddenProp
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in formikFormRegister.touched
    const isInvalid = fieldName in formikFormRegister.errors

    if (isChanged && isInvalid) {
      return message
    }
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formInfos === formRegister) {
      formikFormRegister.handleSubmit()
    } else {
      window.alert(
        'A funcionalidade de login ainda não foi implementada com banco de dados.'
      )
    }
  }

  const setInputs = () => {
    return formInfos.inputs.map((input) => {
      const setInputType =
        input.type === 'password'
          ? getPasswordFieldProps('text', 'password')
          : input.type

      const commonProps = {
        id: input.id,
        type: setInputType,
        name: input.name,
        placeholder: input.placeholder,
        autoComplete: input.autocomplete,
        style: { paddingRight: input.icon_eye ? '56px' : '20px' }
      }

      const inputProps =
        formInfos === formRegister
          ? {
              ...commonProps,
              onChange: formikFormRegister.handleChange,
              onBlur: formikFormRegister.handleBlur,
              value: formikFormRegister.values[input.name as keyof FormRegister]
            }
          : commonProps

      return (
        <S.InputController key={input.id}>
          <S.InputBox>
            <S.Input {...inputProps} />
            {input.icon_eye && input.icon_eye_slash && (
              <S.BtnShowPassword
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                title={getPasswordFieldProps('Esconder senha', 'Exibir senha')}
              >
                <img
                  src={getPasswordFieldProps(
                    input.icon_eye,
                    input.icon_eye_slash
                  )}
                  alt={getPasswordFieldProps('Esconder senha', 'Exibir senha')}
                />
              </S.BtnShowPassword>
            )}
          </S.InputBox>
          {formInfos === formRegister && (
            <small>
              {getErrorMessage(
                input.name,
                formikFormRegister.errors[input.name as keyof FormRegister]
              )}
            </small>
          )}
        </S.InputController>
      )
    })
  }

  return (
    <S.Form onSubmit={submitForm}>
      <S.InputsWrapper $authType={authType}>{setInputs()}</S.InputsWrapper>
      <S.ButtonsWrapper>
        <S.FormConfirmBtn type="submit">
          {formInfos.button_confirm}
        </S.FormConfirmBtn>
        <S.BtnChangeAuth
          type="button"
          onClick={() => dispatch(toggleAuthType())}
        >
          {formInfos.button_change_auth}
        </S.BtnChangeAuth>
        <S.Divider>
          <p>Ou continue com</p>
        </S.Divider>
        <S.SocialButtons>
          <button>
            <img src={iconGoogle} alt="botão com ícone do google" />
          </button>
          <button>
            <img src={iconRadialFacebook} alt="botão com ícone do facebook" />
          </button>
          <button>
            <img src={iconApple} alt="botão com ícone da apple" />
          </button>
        </S.SocialButtons>
      </S.ButtonsWrapper>
    </S.Form>
  )
}

export default AuthForm
