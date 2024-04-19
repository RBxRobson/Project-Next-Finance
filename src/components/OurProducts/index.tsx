import { useState } from 'react'

import * as S from './styles'

import iconAccount from '../../assets/images/icon_account.png'
import iconCart from '../../assets/images/icon_cart.png'
import iconCipher from '../../assets/images/icon_cipher.png'
import iconCompany from '../../assets/images/icon_company.png'
import iconMoney from '../../assets/images/icon_money.png'
import iconSave from '../../assets/images/icon_save.png'
import TabSelector from '../../components/TabSelector'

type TabType = 'CPF' | 'CNPJ'

const OurProducts = () => {
  const [tab, setTab] = useState<TabType>('CPF')

  return (
    <S.SectionContent className="container">
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
          <TabSelector>
            <>
              <button
                className={
                  tab === 'CPF' ? 'green-button' : 'green-button--disabled'
                }
                onClick={() => setTab('CPF')}
              >
                Pessoas Físicas
              </button>
              <button
                className={
                  tab === 'CNPJ' ? 'green-button' : 'green-button--disabled'
                }
                onClick={() => setTab('CNPJ')}
              >
                Empresas
              </button>
            </>
          </TabSelector>
        </div>
      </S.HeaderSection>
      <S.ArticleWrapper>
        {tab === 'CPF' ? (
          <>
            <S.Article className="padding-right">
              <img src={iconAccount} alt="" />
              <h4>Facilidades Bancárias</h4>
              <p>
                Aproveite o acesso fácil e conveniente aos seus fundos com nossa
                variedade de opções de conta corrente. Beneficie-se de recursos
                como serviços bancários on-line e móveis, cartões de débito e
                acesso gratuito a caixas eletrônicos.
              </p>
            </S.Article>
            <S.Article className="border">
              <img src={iconSave} alt="" />
              <h4>Contas Poupança</h4>
              <p>
                Aumente suas economias com nossas taxas de juros competitivas e
                opções flexíveis de contas poupança. Esteja você economizando
                para uma meta específica ou queira aumentar seu patrimônio ao
                longo do tempo, temos a conta certa para você.
              </p>
            </S.Article>
            <S.Article className="padding-left">
              <img src={iconMoney} alt="" />
              <h4>Empréstimos e hipotecas</h4>
              <p>
                Realize seus sonhos com nossas opções flexíveis de empréstimos e
                hipotecas. De empréstimos pessoais a hipotecas residenciais,
                nossos experientes agentes de crédito estão aqui para orientá-lo
                durante o processo de inscrição e ajudá-lo a garantir os fundos
                necessários.
              </p>
            </S.Article>
          </>
        ) : (
          <>
            <S.Article className="padding-right">
              <img src={iconCompany} alt="" />
              <h4>Startups e Empreendedores</h4>
              <p>
                Explore um universo de oportunidades com nossas soluções
                dedicadas a startups e empreendedores. Oferecemos suporte
                adaptado às suas necessidades específicas. Aproveite recursos
                especializados, orientação estratégica e acesso a uma rede de
                mentores e parceiros.
              </p>
            </S.Article>
            <S.Article className="border">
              <img src={iconCipher} alt="" />
              <h4>Soluções de Pagamento</h4>
              <p>
                Simplifique seu dia a dia financeiro e concentre-se no
                crescimento do seu negócio, confiante de que suas transações
                estão em boas mãos. Desde processamento rápido e seguro até
                opções flexíveis de pagamento, com tecnologia de ponta e suporte
                dedicado.
              </p>
            </S.Article>
            <S.Article className="padding-left">
              <img src={iconCart} alt="" />
              <h4>Expansão empresarial</h4>
              <p>
                Busque o crescimento e prosperidade com nossas soluções
                personalizadas de expansão empresarial. De estratégias de
                mercado a parcerias estratégicas, vamos ajudar a expandir seus
                negócios de forma inteligente e eficaz. Aproveite nossa
                experiência e recursos para conquistar novos mercados.
              </p>
            </S.Article>
          </>
        )}
      </S.ArticleWrapper>
    </S.SectionContent>
  )
}

export default OurProducts
