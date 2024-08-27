import * as S from './styles'

type Props = {
  children: JSX.Element
}

const MainContainer = ({ children }: Props) => {
  return (
    <S.Main
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </S.Main>
  )
}

export default MainContainer
