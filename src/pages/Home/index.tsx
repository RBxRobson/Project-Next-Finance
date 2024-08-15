import {
  FAQ,
  Hero,
  OurProducts,
  OurTestimonials,
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
    why_choose: whyChooseData,
    our_testimonials: ourTestimonialsData
  } = home

  return (
    <>
      <Hero heroData={heroData} />
      <OurProducts ourProductsData={ourProductsData} />
      <WhyChoose whyChooseData={whyChooseData} />
      <OurTestimonials ourTestimonialsData={ourTestimonialsData} />
      <FAQ faqData={faqData} />
    </>
  )
}

export default Home
