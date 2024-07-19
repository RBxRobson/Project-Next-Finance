import * as S from './styles'

import AuthWrapper from '../../components/templates/AuthWrapper'
import { useGetAuthQuery } from '../../services/api'

const Auth = () => {
  const { data: auth } = useGetAuthQuery()

  if (!auth) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Auth>
      <AuthWrapper authContent={auth} />
    </S.Auth>
  )
}

export default Auth
