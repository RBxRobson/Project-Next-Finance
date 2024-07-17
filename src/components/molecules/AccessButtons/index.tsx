import * as S from './styles'

import Button from '../../atoms/Button'

const AccessButtons = () => {
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
      />
      <Button link="/auth" type="link_green" buttonText="Login" />
    </S.AccessButtons>
  )
}

export default AccessButtons
