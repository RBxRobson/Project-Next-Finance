import * as S from './styles'

import { bankLogo } from '../../../assets/images'

type Props = {
  smallLoader?: boolean
}

const Loader = ({ smallLoader = false }: Props) => {
  const loaderAnimate = {
    opacity: [1, 0.5, 1],
    transition: {
      repeat: Infinity,
      ease: 'easeInOut',
      duration: 0.7,
      delay: 1.5
    }
  }

  const logoVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.5
      }
    }
  }

  const titleVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.5,
        delay: 0.2
      }
    }
  }

  return (
    <>
      {!smallLoader && <S.Background />}
      <S.LoaderWrapper
        className={smallLoader ? 'loader-xs' : ''}
        animate={loaderAnimate}
        aria-label="Carregando aplicação"
      >
        <S.Logo
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          src={bankLogo}
          alt="Logo"
        />
        <S.TitleLoader
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Next Finance
        </S.TitleLoader>
      </S.LoaderWrapper>
    </>
  )
}

export default Loader
