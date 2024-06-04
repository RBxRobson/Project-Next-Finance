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
        type="secondary"
        buttonText={firstBtn.name}
        className={position === 'left' ? '' : 'is--deactivated'}
        onClick={firstBtn.onClick}
      />
      <Button
        type="secondary"
        buttonText={secondBtn.name}
        className={position === 'right' ? '' : 'is--deactivated'}
        onClick={secondBtn.onClick}
      />
    </S.TabSelectorWrapper>
  )
}

export default TabSelector
