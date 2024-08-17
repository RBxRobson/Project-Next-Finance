import {
  HeroAbout,
  MissionVision,
  PressReleases
} from '../../components/organisms'
import { useGetAboutQuery } from '../../services/api'

const About = () => {
  const { data: about } = useGetAboutQuery()

  const {
    hero: heroData,
    mission: missionData,
    press_releases: pressReleasesData
  } = about!

  return (
    <>
      <HeroAbout heroData={heroData} />
      <MissionVision missionVisionData={missionData} />
      <PressReleases pressReleasesData={pressReleasesData} />
    </>
  )
}

export default About
