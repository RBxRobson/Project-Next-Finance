import { HeroCareers, OurValues } from '../../components/organisms'
import { useGetCareersQuery } from '../../services/api'

const Home = () => {
  const { data: careers } = useGetCareersQuery()

  if (!careers) {
    return <h3>Carregando...</h3>
  }

  const { hero: heroData, our_values: ourValuesData } = careers

  return (
    <>
      <HeroCareers heroData={heroData} />
      <OurValues ourValuesData={ourValuesData} />
    </>
  )
}

export default Home
