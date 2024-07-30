import { HeroCareers, OurBenefits, OurValues } from '../../components/organisms'
import { useGetCareersQuery } from '../../services/api'

const Home = () => {
  const { data: careers } = useGetCareersQuery()

  if (!careers) {
    return <h3>Carregando...</h3>
  }

  const {
    hero: heroData,
    our_values: ourValuesData,
    our_benefits: benefitsData
  } = careers

  return (
    <>
      <HeroCareers heroData={heroData} />
      <OurValues ourValuesData={ourValuesData} />
      <OurBenefits benefitsData={benefitsData} />
    </>
  )
}

export default Home
