import { useState } from 'react'

import * as S from './styles'

type Page = 'home' | 'joinUs' | 'about' | 'security'

type Props = {
  type: 'floating' | 'fixed'
}

const Nav = ({ type }: Props) => {
  const [pageActive, setPageActive] = useState<Page>('home')

  const handleClick = (page: Page) => {
    setPageActive(page)
  }

  const classActive = type === 'floating' ? 'active' : 'active-secondary'

  return (
    <S.Nav>
      <S.Link
        className={pageActive === 'home' ? classActive : ''}
        to="/"
        onClick={() => handleClick('home')}
      >
        Home
      </S.Link>
      <S.Link
        className={pageActive === 'joinUs' ? classActive : ''}
        to="/"
        onClick={() => handleClick('joinUs')}
      >
        Trabalhe Conosco
      </S.Link>
      <S.Link
        className={pageActive === 'about' ? classActive : ''}
        to="/"
        onClick={() => handleClick('about')}
      >
        Sobre
      </S.Link>
      <S.Link
        className={pageActive === 'security' ? classActive : ''}
        to="/"
        onClick={() => handleClick('security')}
      >
        Segurança
      </S.Link>
    </S.Nav>
  )
}

export default Nav
