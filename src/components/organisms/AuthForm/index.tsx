import * as S from './styles'

import {
  iconApple,
  iconGoogle,
  iconRadialFacebook
} from '../../../assets/images'

type Props = {
  type?: 'login' | 'register'
}

const AuthForm = ({ type }: Props) => {
  return (
    <S.Form action="">
      <S.InputsWrapper>
        <S.Input placeholder="Seu nome" />
        <S.Input placeholder="Seu nome" />
        <S.Input placeholder="Seu nome" />
        <S.Input placeholder="Seu nome" />
      </S.InputsWrapper>
      <S.ButtonsWrapper>
        <S.FormConfirmBtn>Cadastrar-se</S.FormConfirmBtn>
        <S.BtnChangeAuth>Login</S.BtnChangeAuth>
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
