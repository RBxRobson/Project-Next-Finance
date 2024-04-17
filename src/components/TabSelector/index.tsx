import * as S from './styles'

type Props = {
  tabActive: 'CPF' | 'CNPJ'
}

const TabSelector = ({ tabActive }: Props) => {
  return (
    <S.TabSelectorWrapper>
      <button
        className={
          tabActive === 'CPF' ? 'green-button' : 'green-button--disabled'
        }
      >
        Pessoas Físicas
      </button>
      <button
        className={
          tabActive === 'CNPJ' ? 'green-button' : 'green-button--disabled'
        }
      >
        Empresas
      </button>
    </S.TabSelectorWrapper>
  )
}

export default TabSelector
