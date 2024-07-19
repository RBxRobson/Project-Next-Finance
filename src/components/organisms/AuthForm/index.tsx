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

type Props = {
  authContent: Auth
}

const AuthForm = ({ authContent }: Props) => {
  const dispatch = useDispatch()
  const { authType } = useSelector((state: RootReducer) => state.auth)

  const { form_register: formRegister, form_login: formLogin } = authContent
  const formInfos = authType === 'login' ? formLogin : formRegister
  const setGrid = formInfos.inputs.length > 2 ? '1fr 1fr' : '1fr'

  const [showPassword, setShowPassword] = useState(false)
  const getPasswordFieldProps = (visibleProp: string, hiddenProp: string) => {
    return showPassword ? visibleProp : hiddenProp
  }

  const setInputs = () => {
    return formInfos.inputs.map((input) => {
      const setInputType =
        input.type === 'password'
          ? getPasswordFieldProps('text', 'password')
          : input.type

      return (
        <S.InputController key={input.id}>
          <S.Input
            id={input.id}
            type={setInputType}
            name={input.name}
            placeholder={input.placeholder}
            autoComplete={input.autocomplete}
            style={{ paddingRight: input.icon_eye ? '56px' : '20px' }}
          />
          {input.icon_eye && input.icon_eye_slash && (
            <S.BtnShowPassword
              type="button"
              onClick={() => setShowPassword(!showPassword)}
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
        </S.InputController>
      )
    })
  }

  return (
    <S.Form action="">
      <S.InputsWrapper
        style={{
          gridTemplateColumns: setGrid
        }}
      >
        {setInputs()}
      </S.InputsWrapper>
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
