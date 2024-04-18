import * as S from './styles'

type Props = {
  children: JSX.Element
}

const TabSelector = ({ children }: Props) => {
  return <S.TabSelectorWrapper>{children}</S.TabSelectorWrapper>
}

export default TabSelector
