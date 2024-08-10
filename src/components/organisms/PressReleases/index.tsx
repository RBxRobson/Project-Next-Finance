import * as S from './styles'

import SectionContainer from '../../templates/SectionContainer'

type Props = {
  pressReleasesData: About['press_releases']
}
const PressReleases = ({ pressReleasesData }: Props) => {
  return (
    <SectionContainer
      titleSection={{ title: 'Comunicados de ', markText: 'imprensa' }}
      descriptionSection={pressReleasesData.description}
    >
      <S.NotesList>
        {pressReleasesData.notes.map((note) => (
          <S.Note key={note.id}>
            <img src={note.img} />
            <h3>{note.title}</h3>
            <S.TagsContainer>
              {note.tags.map((tag) => (
                <span key={tag.id}>{tag.title + tag.description}</span>
              ))}
            </S.TagsContainer>
            <p>{note.description}</p>
          </S.Note>
        ))}
      </S.NotesList>
    </SectionContainer>
  )
}

export default PressReleases
