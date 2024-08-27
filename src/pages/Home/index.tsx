import {
  FAQ,
  Hero,
  Loader,
  OurProducts,
  OurTestimonials,
  WhyChoose
} from '../../components/organisms'
import { useGetHomeQuery } from '../../services/api'

const Home = () => {
  const { data: home } = useGetHomeQuery(undefined, {
    selectFromResult: ({ data }) => ({ data })
  })

  if (!home) {
    return <Loader smallLoader />
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
