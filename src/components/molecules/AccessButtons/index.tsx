import { useDispatch } from 'react-redux'

import * as S from './styles'

import { setAuthType } from '../../../redux/reducers/auth'
import Button from '../../atoms/Button'

const AccessButtons = () => {
  const dispatch = useDispatch()

  const buttonsVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      y: -100
    }
  }

  return (
    <S.AccessButtons variants={buttonsVariant}>
      <Button
        link="/auth"
        type="link_green"
        className="btn__register"
        buttonText="Cadastre-se"
        onClick={() => dispatch(setAuthType('register'))}
      />
      <Button
        link="/auth"
        type="link_green"
        buttonText="Login"
        onClick={() => dispatch(setAuthType('login'))}
      />
    </S.AccessButtons>
  )
}

export default AccessButtons
