import * as S from './styles'

import { bankLogo } from '../../../assets/images'

const Slogan = () => {
  return (
    <S.Slogan>
      <img src={bankLogo} alt="logo do banco" />
      <h1>Next Finance</h1>
    </S.Slogan>
  )
}

export default Slogan
