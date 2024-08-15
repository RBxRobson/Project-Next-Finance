import {
  HeroCareers,
  OurBenefits,
  OurValues,
  JobOpenings
} from '../../components/organisms'
import { useGetCareersQuery } from '../../services/api'

const Home = () => {
  const { data: careers } = useGetCareersQuery()

  if (!careers) {
    return <h3>Carregando...</h3>
  }

  const {
    hero: heroData,
    our_values: ourValuesData,
    our_benefits: benefitsData,
    job_openings: jobOpeningsData
  } = careers

  return (
    <>
      <HeroCareers heroData={heroData} />
      <OurValues ourValuesData={ourValuesData} />
      <OurBenefits benefitsData={benefitsData} />
      <JobOpenings jobOpeningsData={jobOpeningsData} />
    </>
  )
}

export default Home
