import { HeroCareers } from '../../components/organisms'
import { useGetCareersQuery } from '../../services/api'

const Home = () => {
  const { data: careers } = useGetCareersQuery()

  if (!careers) {
    return <h3>Carregando...</h3>
  }

  const { hero: heroData } = careers

  return (
    <>
      <HeroCareers heroData={heroData} />
    </>
  )
}

export default Home
