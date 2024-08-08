import { HeroAbout, MissionVision } from '../../components/organisms'
import { useGetAboutQuery } from '../../services/api'

const Auth = () => {
  const { data: about } = useGetAboutQuery()

  if (!about) {
    return <h3>Carregando...</h3>
  }

  const {
    hero: heroData,
    mission: missionData,
    press_releases: pressReleasesData
  } = about

  return (
    <>
      <HeroAbout heroData={heroData} />
      <MissionVision missionVisionData={missionData} />
    </>
  )
}

export default Auth
