import { useState } from 'react'

import themes from '../../../styles/themes'
import * as S from './styles'

type Page = 'home' | 'joinUs' | 'about' | 'security'

type Props = {
  type: 'desktop' | 'mobile'
  isOpen?: boolean
}

const Nav = ({ type, isOpen = false }: Props) => {
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

  const linkVariants = {
    activated: {
      backgroundColor: themes.colors.darkShades.d_15,
      padding: '12px 24px'
    },
    disabled: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  }

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1
      }
    },
    closed: {
      opacity: 0,
      y: -20
    }
  }

  const navAnimate = isOpen ? 'open' : 'closed'

  return (
    <S.Nav className={setClassNav} variants={navVariants} animate={navAnimate}>
      {pages.map((page) => (
        <S.Link
          key={page.name}
          className={setClassLink}
          to="/"
          onClick={() => handleClick(page.name)}
          variants={linkVariants}
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
