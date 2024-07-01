import { useState } from 'react'

import themes from '../../../styles/themes'
import * as S from './styles'

type Page = 'home' | 'joinUs' | 'about' | 'security'

type Props = {
  type: 'desktop' | 'mobile'
}

const Nav = ({ type }: Props) => {
  const [activePage, setActivePage] = useState<Page>('home')

  const handleClick = (page: Page) => {
    setActivePage(page)
  }

  const setClassLink = type === 'mobile' ? 'link-mobile' : ''
  const setClassNav = type === 'mobile' ? 'nav-mobile' : ''

  const pages: { name: Page; label: string }[] = [
    { name: 'home', label: 'Home' },
    { name: 'joinUs', label: 'Trabalhe Conosco' },
    { name: 'about', label: 'Sobre' },
    { name: 'security', label: 'Segurança' }
  ]

  const variants = {
    activated: {
      backgroundColor: themes.colors.darkShades.d_15,
      padding: '12px 24px'
    },
    disabled: {
      backgroundColor: themes.colors.darkShades.d_10
    }
  }

  return (
    <S.Nav className={setClassNav}>
      {pages.map((page) => (
        <S.Link
          key={page.name}
          className={setClassLink}
          to="/"
          onClick={() => handleClick(page.name)}
          variants={variants}
          animate={activePage === page.name ? 'activated' : 'disabled'}
          transition={{ duration: 0.1 }}
        >
          {page.label}
        </S.Link>
      ))}
    </S.Nav>
  )
}

export default Nav
