import { useSelector } from 'react-redux'

import * as S from './styles'

import { radialDesignLeft, iconLeft } from '../../../assets/images'
import { RootReducer } from '../../../redux'
import { AuthForm } from '../../organisms'

type Props = {
  authContent: Auth
}
const AuthWrapper = ({ authContent }: Props) => {
  const { authType } = useSelector((state: RootReducer) => state.auth)

  const { form_login: formLogin, form_register: formRegister } = authContent
  const formInfos = authType === 'register' ? formRegister : formLogin

  return (
    <S.Background>
      <img src={radialDesignLeft} />
      <S.BackBtn to="/" title="Voltar para página inicial">
        <img src={iconLeft} alt="Ícone de seta para esquerda" />
      </S.BackBtn>
      <S.Wrapper>
        <S.Title>{formInfos.title}</S.Title>
        <S.Description>{formInfos.description}</S.Description>
        <AuthForm authContent={authContent} />
      </S.Wrapper>
    </S.Background>
  )
}

export default AuthWrapper
