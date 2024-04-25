import * as S from './styles'

import abstractLeft from '../../assets/images/design_radius_lf.svg'
import abstractRight from '../../assets/images/design_radius_right.svg'
import iconBank from '../../assets/images/icon_bank.png'
import iconBook from '../../assets/images/icon_book.png'
import iconMoneyBag from '../../assets/images/icon_money_bag.png'
import iconSaveMoney from '../../assets/images/icon_save_money.png'

const UseCases = () => {
  return (
    <S.UseCaseSection className="container">
      <h2>
        Porque escolher o <span className="green-span">Next Finance</span>
      </h2>
      <p>
        No Next Finance, atendemos às diversas necessidades de pessoas físicas e
        jurídicas, oferecendo uma ampla gama de soluções financeiras
      </p>
      <S.UseCaseArticle>
        <S.CardsWrapper>
          <img src={abstractRight} className="position_left" />
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
        </S.CardsWrapper>
        <S.DescriptionContainer>
          <h4>Para Pessoas</h4>
          <p>
            Nossos serviços de hipoteca abrem o caminho para a aquisição de uma
            casa própria, e nossos empréstimos pessoais flexíveis fornecem
            suporte vital durante vários marcos da vida. Também priorizamos o
            planejamento da aposentadoria, garantindo um futuro financeiramente
            seguro para nossos clientes
          </p>
          <S.StaticsWrapper>
            <div>
              <span>78%</span>
              <p>Planejamento de aposentadoria</p>
            </div>
            <div>
              <span>63%</span>
              <p>Gerenciamento de dívidas</p>
            </div>
            <div>
              <span>91%</span>
              <p>Redução de encargos financeiros</p>
            </div>
          </S.StaticsWrapper>
        </S.DescriptionContainer>
      </S.UseCaseArticle>
      <S.UseCaseArticle>
        <S.DescriptionContainer>
          <h4>Para Pessoas</h4>
          <p>
            Nossos serviços de hipoteca abrem o caminho para a aquisição de uma
            casa própria, e nossos empréstimos pessoais flexíveis fornecem
            suporte vital durante vários marcos da vida. Também priorizamos o
            planejamento da aposentadoria, garantindo um futuro financeiramente
            seguro para nossos clientes
          </p>
          <S.StaticsWrapper>
            <div>
              <span>78%</span>
              <p>Planejamento de aposentadoria</p>
            </div>
            <div>
              <span>63%</span>
              <p>Gerenciamento de dívidas</p>
            </div>
            <div>
              <span>91%</span>
              <p>Redução de encargos financeiros</p>
            </div>
          </S.StaticsWrapper>
        </S.DescriptionContainer>
        <S.CardsWrapper>
          <img src={abstractLeft} className="position_right" />
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Gerenciamento de finanças pessoais</p>
          </S.Card>
        </S.CardsWrapper>
      </S.UseCaseArticle>
    </S.UseCaseSection>
  )
}

export default UseCases
