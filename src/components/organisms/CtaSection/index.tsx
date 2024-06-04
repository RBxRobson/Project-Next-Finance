import * as S from './styles'

import { radialDesignRight } from '../../../assets/images'
import Button from '../../atoms/Button'

const CtaSection = () => {
  return (
    <S.CtaContent className="container">
      <img src={radialDesignRight} />
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
      <Button buttonText="Abra sua conta" type="primary" />
    </S.CtaContent>
  )
}

export default CtaSection
