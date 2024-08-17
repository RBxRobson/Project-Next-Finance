import * as S from './styles'

import AuthWrapper from '../../components/templates/AuthWrapper'
import { useGetAuthQuery } from '../../services/api'

const Auth = () => {
  const { data: auth } = useGetAuthQuery()

  return (
    <S.Auth>
      <AuthWrapper authContent={auth!} />
    </S.Auth>
  )
}

export default Auth
