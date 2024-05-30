import CtaSection from '../../components/CtaSection'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import OurProducts from '../../components/OurProducts'
import UseCases from '../../components/UseCases'
import { useGetHomeQuery } from '../../services/api'

const Home = () => {
  const { data: home } = useGetHomeQuery()

  if (!home) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <NavBar />
      <Hero home={home} />
      <OurProducts home={home} />
      <UseCases home={home} />
      <FAQ home={home} />
      <CtaSection />
      <Footer />
    </>
  )
}

export default Home
