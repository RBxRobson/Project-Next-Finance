type Cards = {
  id: number
  title: string
  description: string
  icon: string
}

type Security = {
  hero: {
    title: string
    description: string
    banner: string
  }
  how_we_protect: {
    title: string
    description: string
    cards: Cards[]
  }
}
