import theme from '../../../styles/themes'

import * as S from './style'

type Props = {
  buttonText: string
  type: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

const Button = ({ buttonText, type, className, onClick }: Props) => {
  return type === 'primary' ? (
    <S.ButtonPrimary
      className={className}
      whileTap={{ scale: 1.1 }}
      whileHover={{ filter: 'brightness(0.9)' }}
    >
      {buttonText}
    </S.ButtonPrimary>
  ) : (
    <S.ButtonSecondary
      className={className}
      onClick={onClick}
      whileTap={{ scale: 1.1 }}
    >
      {buttonText}
    </S.ButtonSecondary>
  )
}

export default Button
