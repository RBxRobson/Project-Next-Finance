import { useDispatch } from 'react-redux'

import * as S from './styles'

import { radialDesignRight } from '../../../assets/images'
import { setAuthType } from '../../../redux/reducers/auth'
import Button from '../../atoms/Button'

const CtaSection = () => {
  const dispatch = useDispatch()

  return (
    <S.CtaContent>
      <img src={radialDesignRight} alt="" aria-hidden />
      <div>
        <h2>
          Comece sua jornada financeira com
          <span className="green-span"> Next Finance hoje!</span>
        </h2>
        <p>
          Pronto para assumir o controle de suas finanças? Junte-se ao Next
          Finance agora e deixe-nos ajudá-lo a atingir seus objetivos
          financeiros com nossas soluções personalizadas e atendimento de alta
          qualidade.
        </p>
      </div>
      <Button
        buttonText="Abra sua conta"
        type="link_green"
        link="/auth"
        onClick={() => dispatch(setAuthType('register'))}
      />
    </S.CtaContent>
  )
}

export default CtaSection
