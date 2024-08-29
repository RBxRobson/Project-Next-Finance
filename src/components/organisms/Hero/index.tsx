import { useDispatch } from 'react-redux'

import * as S from './styles'

import { abstractDesignHero, verifyIcon } from '../../../assets/images'
import { setAuthType } from '../../../redux/reducers/auth'
import Button from '../../atoms/Button'

type Props = {
  heroData: Home['hero']
}

const Hero = ({ heroData }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.HeroContent>
      <S.HeroTitleWrapper>
        <S.Tag>
          <img src={verifyIcon} alt="" aria-hidden />
          <span>Sem verificação de crédito</span>
        </S.Tag>
        <h2>
          Bem vindo ao Next Finance, venha capacitar sua
          <span className="green-span"> jornada financeira</span>
        </h2>
        <p>{heroData.description}</p>
        <Button
          buttonText="Abra sua conta"
          type="link_green"
          link="/auth"
          onClick={() => dispatch(setAuthType('register'))}
        />
      </S.HeroTitleWrapper>
      <S.AbstractDesign src={abstractDesignHero} alt="" aria-hidden />
    </S.HeroContent>
  )
}

export default Hero
