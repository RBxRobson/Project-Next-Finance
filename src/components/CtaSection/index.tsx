import * as S from './styles'

import radiaDesign from '../../assets/images/design_radius_right.svg'

const CtaSection = () => {
  return (
    <S.CtaContent className="container">
      <img src={radiaDesign} />
      <div>
        <h3>
          Comece sua jornada financeira com
          <span className="green-span"> Next Finance hoje!</span>
        </h3>
        <p>
          Pronto para assumir o controle de suas finanças? Junte-se ao Next
          Finance agora e deixe-nos ajudá-lo a atingir seus objetivos
          financeiros com nossas soluções personalizadas e atendimento de alta
          qualidade
        </p>
      </div>
      <button className="green-button">Abra sua conta</button>
    </S.CtaContent>
  )
}

export default CtaSection
