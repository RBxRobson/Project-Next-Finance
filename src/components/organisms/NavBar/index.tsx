import { useState } from 'react'

import * as S from './styles'

import { bankLogo } from '../../../assets/images'
import Button from '../../atoms/Button'

const NavBar = () => {
  const [pageActive, setPageActive] = useState('home')

  const handleClick = (page: string) => {
    setPageActive(page)
  }

  return (
    <S.Header className="container">
      <S.Logo>
        <img src={bankLogo} alt="logo do banco" />
        <h1>Next Finance</h1>
      </S.Logo>
      <S.Nav>
        <S.Link
          className={pageActive === 'home' ? 'active' : ''}
          to="/"
          onClick={() => handleClick('home')}
        >
          Home
        </S.Link>
        <S.Link
          className={pageActive === 'work with us' ? 'active' : ''}
          to={''}
          onClick={() => handleClick('work with us')}
        >
          Trabalhe Conosco
        </S.Link>
        <S.Link
          className={pageActive === 'about' ? 'active' : ''}
          to={''}
          onClick={() => handleClick('about')}
        >
          Sobre
        </S.Link>
        <S.Link
          className={pageActive === 'security' ? 'active' : ''}
          to={''}
          onClick={() => handleClick('security')}
        >
          Segurança
        </S.Link>
      </S.Nav>
      <S.AccessButtons>
        <Button
          buttonText="Cadastre-se"
          type="primary"
          className="is--deactivated"
        />
        <Button buttonText="Login" type="primary" />
      </S.AccessButtons>
    </S.Header>
  )
}

export default NavBar
