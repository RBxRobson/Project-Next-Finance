import {
  HeroCareers,
  OurBenefits,
  OurValues,
  JobOpenings,
  Loader
} from '../../components/organisms'
import { useGetCareersQuery } from '../../services/api'

const Home = () => {
  const { data: careers } = useGetCareersQuery(undefined, {
    selectFromResult: ({ data }) => ({ data })
  })

  if (!careers) {
    return <Loader smallLoader />
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
