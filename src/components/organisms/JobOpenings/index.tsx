import * as S from './styles'

import Button from '../../atoms/Button'
import SectionContainer from '../../templates/SectionContainer'

type Props = {
  jobOpeningsData: Careers['job_openings']
}

const JobOpenings = ({ jobOpeningsData }: Props) => {
  return (
    <SectionContainer
      titleSection={{ title: 'Vagas', markText: ' Disponíveis' }}
      descriptionSection={jobOpeningsData.description}
    >
      <S.Vacancies>
        {jobOpeningsData.vacancies.map((vacancy) => (
          <S.Vacancy key={vacancy.id}>
            <h3>{vacancy.title}</h3>
            <S.TagsContainer>
              {vacancy.tags.map((tag) => (
                <S.Tag key={tag.id}>{`${tag.title} ${tag.description}`}</S.Tag>
              ))}
            </S.TagsContainer>
            <h4>Sobre a Vaga</h4>
            <S.Description>{vacancy.description}</S.Description>
            <h4>Requisitos</h4>
            <S.Requiriments>
              {vacancy.requiriments.map((requiriment) => (
                <S.Requirement key={requiriment.id}>
                  <img
                    src="https://next-finance-fake-api-rbxrobsons-projects.vercel.app/bag.png"
                    alt="ícone mala"
                  />
                  <p>{requiriment.requiriment}</p>
                </S.Requirement>
              ))}
            </S.Requiriments>
            <Button buttonText="Candidatar-se" type="btn_green" />
          </S.Vacancy>
        ))}
      </S.Vacancies>
    </SectionContainer>
  )
}

export default JobOpenings
