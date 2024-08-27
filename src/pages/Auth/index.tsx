import * as S from './styles'

import { Loader } from '../../components/organisms'
import AuthWrapper from '../../components/templates/AuthWrapper'
import { useGetAuthQuery } from '../../services/api'

const Auth = () => {
  const { data: auth } = useGetAuthQuery(undefined, {
    selectFromResult: ({ data }) => ({ data })
  })

  if (!auth) {
    return <Loader smallLoader />
  }

  return (
    <S.Auth>
      <AuthWrapper authContent={auth} />
    </S.Auth>
  )
}

export default Auth
