import * as S from './style'

type Props = {
  children: JSX.Element
  titleSection: {
    title: string
    markText: string
  }
  descriptionSection: string
  tabSelector?: JSX.Element
}

const SectionContainer = ({
  children,
  titleSection,
  descriptionSection,
  tabSelector
}: Props) => {
  return (
    <S.Section className="container">
      <h2>
        {titleSection.title}
        <span>{titleSection.markText}</span>
      </h2>
      {tabSelector ? (
        <S.WrapperTabSelector>
          <p>{descriptionSection}</p>
          {tabSelector}
        </S.WrapperTabSelector>
      ) : (
        <p>{descriptionSection}</p>
      )}
      {children}
    </S.Section>
  )
}

export default SectionContainer
