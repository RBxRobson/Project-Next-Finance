type Tag = {
  id: number
  title: string
  description: string
}

type Note = {
  id: number
  title: string
  tags: Tag[]
  description: string
  img: string
}

type Article = {
  title: string
  description: string
  img: string
}

type Articles = {
  mission: Article
  vision: Article
}

type Hero = {
  subTitle: string
  title: string
  description: string
  img: string
}

type Mission = {
  title: string
  description: string
  articles: Articles
}

type PressReleases = {
  title: string
  description: string
  notes: Note[]
}

type About = {
  hero: Hero
  mission: Mission
  press_releases: PressReleases
}
