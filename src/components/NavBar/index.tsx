import { useState } from 'react'

import * as S from './styles'

import logo from '../../assets/images/bank_logo.svg'

const NavBar = () => {
  const [pageActive, setPageActive] = useState('home')

  const handleClick = (page: string) => {
    setPageActive(page)
  }

  return (
    <S.Header className="container">
      <S.Logo>
        <img src={logo} alt="logo do banco" />
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
        <S.BtnSignUp type="button">Cadastre-se</S.BtnSignUp>
        <button className="green-button" type="button">
          Login
        </button>
      </S.AccessButtons>
    </S.Header>
  )
}

export default NavBar
