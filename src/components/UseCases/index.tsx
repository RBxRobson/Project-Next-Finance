import * as S from './styles'

import abstractLeft from '../../assets/images/design_radius_lf.svg'
import abstractRight from '../../assets/images/design_radius_right.svg'
import iconHome from '../../assets/images/icon_bank.png'
import iconBook from '../../assets/images/icon_book.png'
import iconCart from '../../assets/images/icon_cart.png'
import iconCipher from '../../assets/images/icon_cipher.png'
import iconCompany from '../../assets/images/icon_company.png'
import iconMoneyBag from '../../assets/images/icon_money_bag.png'
import iconMoney from '../../assets/images/icon_money.png'
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
            <img src={iconHome} alt="Ícone da estrutura de uma casa" />
            <p>Conquiste sua casa própria</p>
          </S.Card>
          <S.Card>
            <img
              src={iconSaveMoney}
              alt="Ícone com mãos em formato de coração e um cifrão dentro "
            />
            <p>Economize para o futuro</p>
          </S.Card>
          <S.Card>
            <img
              src={iconMoneyBag}
              alt="Ícone de uma mão com uma bolsa de dinheiro sobre"
            />
            <p>Gerencie suas finanças pessoais</p>
          </S.Card>
          <S.Card>
            <img src={iconBook} alt="Ícone de um livro aberto" />
            <p>Financie sua faculdade dos sonhos</p>
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
          <h4>Para empresas</h4>
          <p>
            Para as empresas, potencializamos o crescimento com soluções de
            capital de giro que otimizam o fluxo de caixa, e nossas opções de
            financiamento personalizadas estimulam a expansão dos negócios.
            Quaisquer que sejam as suas aspirações financeiras, o Next Finance
            está empenhado em fornecer as ferramentas e o apoio certos para
            alcançá-las
          </p>
          <S.StaticsWrapper>
            <div>
              <span>65%</span>
              <p>Gestão de Fluxo de Caixa</p>
            </div>
            <div>
              <span>70%</span>
              <p>Impulso na expansão dos negócios</p>
            </div>
            <div>
              <span>45%</span>
              <p>Agilize o processamento da folha de pagamento</p>
            </div>
          </S.StaticsWrapper>
        </S.DescriptionContainer>
        <S.CardsWrapper>
          <img src={abstractLeft} className="position_right" />
          <S.Card>
            <img
              src={iconCart}
              alt="Ícone de um quadro com gráfico empresarial"
            />
            <p>Solicite uma análise de dados</p>
          </S.Card>
          <S.Card>
            <img
              src={iconCompany}
              alt="Ícone ilustrando estrutura de um prédio empresarial"
            />
            <p>Apoio para expansão empresarial</p>
          </S.Card>
          <S.Card>
            <img src={iconCipher} alt="Ícone de uma cifra" />
            <p>Encontre soluções de pagamentos</p>
          </S.Card>
          <S.Card>
            <img src={iconMoney} alt="Ícone de uma nota de dinheiro em papel" />
            <p>Melhore seu fluxo de caixa</p>
          </S.Card>
        </S.CardsWrapper>
      </S.UseCaseArticle>
    </S.UseCaseSection>
  )
}

export default UseCases
