declare type Product = {
  id: number
  icon: string
  title: string
  description: string
}

declare type Statistic = {
  id: number
  name: string
  value: string
}

declare type Card = {
  id: number
  name: string
  icon: string
}

declare type CardFAQ = {
  id: number
  title: string
  description: string
}

declare type Home = {
  hero: {
    description: string
  }
  our_products: {
    description: string
    for_businesses: Product[]
    for_people: Product[]
  }
  why_choose: {
    description: string
    for_people: {
      description: string
      statistics: Statistic[]
      cards: Card[]
    }
    for_businesses: {
      description: string
      statistics: Statistic[]
      cards: Card[]
    }
  }
  FAQ: {
    description: string
    cards: CardFAQ[]
  }
}
