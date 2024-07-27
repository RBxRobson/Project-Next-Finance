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

  const linkVariant = {
    activated: {
      backgroundColor: themes.colors.darkShades.d_15,
      padding: '12px 24px'
    },
    disabled: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  }

  const navVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.4
      }
    },
    closed: {
      opacity: 0,
      y: -100
    }
  }

  return (
    <S.Nav className={setClassNav} variants={navVariant}>
      {pages.map((page) => (
        <S.Link
          to={page.name === 'home' ? '/' : page.name}
          key={page.name}
          variants={linkVariant}
          animate={activePage === page.name ? 'activated' : 'disabled'}
          transition={{ duration: 0.2 }}
          className={setClassLink}
          onClick={() => handleClick(page.name)}
        >
          {page.label}
        </S.Link>
      ))}
    </S.Nav>
  )
}

export default Nav
