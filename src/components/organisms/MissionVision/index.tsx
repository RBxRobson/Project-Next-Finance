import * as S from './styles'

import { backgroundBanner } from '../../../assets/images'
import SectionContainer from '../../templates/SectionContainer'

type Props = {
  missionVisionData: About['mission']
}

const MissionVision = ({ missionVisionData }: Props) => {
  const {
    img: missionImg,
    description: missionDescription,
    title: missionTitle
  } = missionVisionData.articles.mission

  const {
    img: visionImg,
    description: visionDescription,
    title: visionTitle
  } = missionVisionData.articles.vision

  return (
    <SectionContainer
      titleSection={{ title: 'Missão & ', markText: 'Visão' }}
      descriptionSection={missionVisionData.description}
    >
      <>
        <S.ArticleContainer>
          <S.Banner>
            <S.BackgroundBanner src={backgroundBanner} />
            <S.BannerImg src={missionImg} />
          </S.Banner>
          <S.TextArticle>
            <h3>{missionTitle}</h3>
            <p>{missionDescription}</p>
          </S.TextArticle>
        </S.ArticleContainer>
        <S.ArticleContainer className="grid-reverse">
          <S.TextArticle>
            <h3>{visionTitle}</h3>
            <p>{visionDescription}</p>
          </S.TextArticle>
          <S.Banner>
            <S.BackgroundBanner src={backgroundBanner} />
            <S.BannerImg src={visionImg} />
          </S.Banner>
        </S.ArticleContainer>
      </>
    </SectionContainer>
  )
}

export default MissionVision
