import * as S from './style'

type Props = {
  buttonText: string
  type: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

const Button = ({ buttonText, type, className, onClick }: Props) => {
  return type === 'primary' ? (
    <S.ButtonPrimary className={className}>{buttonText}</S.ButtonPrimary>
  ) : (
    <S.ButtonSecondary className={className} onClick={onClick}>
      {buttonText}
    </S.ButtonSecondary>
  )
}

export default Button
