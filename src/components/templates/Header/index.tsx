import { useEffect, useState } from 'react'

import themes from '../../../styles/themes'

import { DesktopHeader, MobileHeader } from '../../organisms'

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(Boolean)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > parseInt(themes.breakpoints.lg))
    }

    // Faz o primeiro set ao montar o componente
    handleResize()

    // Adiciona o event listener para o resize
    window.addEventListener('resize', handleResize)

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>
}

export default Header
