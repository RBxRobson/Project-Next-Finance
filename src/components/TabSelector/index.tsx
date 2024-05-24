import * as S from './styles'

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
      <button
        className={
          position === 'left' ? 'green-button' : 'green-button--disabled'
        }
        onClick={firstBtn.onClick}
      >
        {firstBtn.name}
      </button>
      <button
        className={
          position === 'right' ? 'green-button' : 'green-button--disabled'
        }
        onClick={secondBtn.onClick}
      >
        {secondBtn.name}
      </button>
    </S.TabSelectorWrapper>
  )
}

export default TabSelector
