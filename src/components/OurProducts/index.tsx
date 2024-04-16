import * as S from './styles'

import iconAccount from '../../assets/images/icon_account.png'
import iconMoney from '../../assets/images/icon_account.png'
import iconSave from '../../assets/images/icon_account.png'

const OurProducts = () => {
  return (
    <section className="container">
      <S.HeaderSection>
        <h2>
          Nossos <span>Produtos</span>
        </h2>
        <div>
          <p>
            Descubra uma gama de produtos bancários abrangentes e
            personalizáveis, o Next Finance é projetado para atender às suas
            necessidades financeiras exclusivas e aspirações.
          </p>
        </div>
      </S.HeaderSection>
      <S.ArticleWrapper>
        <S.Article className="padding-right">
          <img src={iconAccount} alt="" />
          <h4>Facilidades Bancárias</h4>
          <p>
            Aproveite o acesso fácil e conveniente aos seus fundos com nossa
            variedade de opções de conta corrente. Beneficie-se de recursos como
            serviços bancários on-line e móveis, cartões de débito e acesso
            gratuito a caixas eletrônicos.
          </p>
        </S.Article>
        <S.Article className="border">
          <img src={iconSave} alt="" />
          <h4>Contas Poupança</h4>
          <p>
            Aumente suas economias com nossas taxas de juros competitivas e
            opções flexíveis de contas poupança. Esteja você economizando para
            uma meta específica ou queira aumentar seu patrimônio ao longo do
            tempo, temos a conta certa para você.
          </p>
        </S.Article>
        <S.Article className="padding-left">
          <img src={iconSave} alt="" />
          <h4>Empréstimos e hipotecas</h4>
          <p>
            Realize seus sonhos com nossas opções flexíveis de empréstimos e
            hipotecas. De empréstimos pessoais a hipotecas residenciais, nossos
            experientes agentes de crédito estão aqui para orientá-lo durante o
            processo de inscrição e ajudá-lo a garantir os fundos necessários.
          </p>
        </S.Article>
      </S.ArticleWrapper>
    </section>
  )
}

export default OurProducts
