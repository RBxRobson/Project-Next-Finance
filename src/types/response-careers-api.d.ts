type CareerHero = {
  title: string
  description: string
  img: string
}

type OurValuesCard = {
  id: number
  title: string
  description: string
}

type OurValues = {
  title: string
  description: string
  cards: OurValuesCard[]
}

type OurBenefitsCard = OurValuesCard & {
  icon: string
}

type CareerBenefit = {
  title: string
  description: string
  cards: OurBenefitsCard[]
}

type JobTag = {
  id: number
  title: string
  description: string
}

type JobRequirement = {
  id: number
  requiriment: string
}

type JobVacancies = {
  id: number
  title: string
  description: string
  tags: JobTag[]
  requiriments: JobRequirement[]
}

type JobOpenings = {
  title: string
  description: string
  vacancies: JobVacancies[]
}

type Careers = {
  hero: CareerHero
  our_values: OurValues
  our_benefits: CareerBenefit
  job_openings: JobOpenings
}
