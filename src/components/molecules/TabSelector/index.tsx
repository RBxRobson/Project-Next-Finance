import * as S from './styles'

import Button from '../../atoms/Button'

type Props = {
  firstBtn: {
    name: string
    onClick: () => void
  }
  secondBtn: {
    name: string
    onClick: () => void
  }
  position: string
}

const TabSelector = ({ firstBtn, secondBtn, position }: Props) => {
  return (
    <S.TabSelectorWrapper>
      <Button
        type="btn_green--lg"
        buttonText={firstBtn.name}
        className={position === 'left' ? '' : 'btn--disabled'}
        onClick={firstBtn.onClick}
      />
      <Button
        type="btn_green--lg"
        buttonText={secondBtn.name}
        className={position === 'right' ? '' : 'btn--disabled'}
        onClick={secondBtn.onClick}
      />
    </S.TabSelectorWrapper>
  )
}

export default TabSelector
