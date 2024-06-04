import {
  CtaSection,
  FAQ,
  Footer,
  Hero,
  NavBar,
  OurProducts,
  WhyChoose
} from '../../components/organisms'
import { useGetHomeQuery } from '../../services/api'

const Home = () => {
  const { data: home } = useGetHomeQuery()

  if (!home) {
    return <h3>Carregando...</h3>
  }

  const {
    FAQ: faqData,
    hero: heroData,
    our_products: ourProductsData,
    why_choose: whyChooseData
  } = home

  return (
    <>
      <NavBar />
      <Hero heroData={heroData} />
      <OurProducts ourProductsData={ourProductsData} />
      <WhyChoose whyChooseData={whyChooseData} />
      <FAQ faqData={faqData} />
      <CtaSection />
      <Footer />
    </>
  )
}

export default Home
