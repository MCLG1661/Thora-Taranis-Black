import { useState } from 'react'
import './App.css'

const reportUrl =
  'https://docs.google.com/document/d/1GnzVb76NM6nQHpcYHlYsfXT2NlYy0EaBM_ipUGGE9hw/edit'

const initiatives = [
  {
    number: '01',
    title: 'Conteúdo multicanal',
    status: 'Protótipo testado',
    description:
      'Um conteúdo-semente adaptado para LinkedIn, Instagram e e-mail, com identidade verbal e revisão humana.',
    impact: '4,0',
    effort: '1,7',
  },
  {
    number: '02',
    title: 'Atendimento e apoio comercial',
    status: 'Iniciativa proposta',
    description:
      'Rascunhos de respostas fundamentados no catálogo e nas condições comerciais autorizadas.',
    impact: '4,0',
    effort: '2,7',
  },
  {
    number: '03',
    title: 'Conferência de pedidos',
    status: 'Iniciativa proposta',
    description:
      'Extração de informações de documentos e identificação de pendências antes do faturamento.',
    impact: '5,0',
    effort: '4,3',
  },
]

const pillars = [
  {
    title: 'Científico e embasado',
    description:
      'Especificações e fontes sustentam os argumentos. Alegações sem comprovação ficam fora das publicações.',
  },
  {
    title: 'Empático e humano',
    description:
      'Reconhecer os desafios das equipes com respeito, sem dramatizar dores ou explorar inseguranças.',
  },
  {
    title: 'Sofisticado e premium',
    description:
      'Sobriedade, clareza e detalhes concretos para conversar com quem decide sobre espaços corporativos.',
  },
  {
    title: 'Descomplicado e acessível',
    description:
      'Traduzir recursos técnicos em explicações práticas para apoiar a tomada de decisão.',
  },
]

const examples = {
  LinkedIn: `Como planejar postos de trabalho que atendam às diferentes demandas de equipes em modelo híbrido?

A gestão de espaços corporativos exige avaliar critérios práticos de infraestrutura que vão além da estética. Lideranças de RH e Facilities precisam considerar a flexibilidade dos postos de trabalho e a adequação do mobiliário à rotina operacional.

Entre os critérios de decisão, destacam-se a presença de ajustes dinâmicos que acomodam múltiplos perfis de uso, a facilidade de alternância entre posições sentado e em pé, e o controle do conforto acústico em áreas abertas.

Convidamos gestores e equipes de Facilities para uma conversa sobre as necessidades do seu ambiente de trabalho.

#ErgonomiaCorporativa #GestãoDeEspaços #TaranisBlack`,

  Instagram: `SLIDE 1
Como avaliar o mobiliário no escritório híbrido?
Critérios essenciais para estruturar espaços corporativos funcionais.

SLIDE 2
A gestão do espaço compartilhado
Observe como as equipes utilizam o espaço para focar e colaborar.

SLIDE 3
Ajustes e adaptação de uso
A ErgoPro Executive conta com braços 4D: altura, profundidade, largura e ângulo rotacional.

SLIDE 4
Alternância de posturas na rotina
A SmartDesk Pro Dual 160 dispõe de quatro memórias de altura programáveis.

SLIDE 5
Privacidade acústica em áreas abertas
A Silence Solo é uma cabine individual para chamadas, com atenuação sonora de 30 dB, conforme o catálogo do exercício.

SLIDE 6
Alinhamento à dinâmica da equipe
A escolha do mobiliário deve refletir as necessidades específicas da operação.

SLIDE 7
Vamos conversar sobre o seu projeto?
Fale com nossa equipe para avaliar as soluções adequadas ao seu ambiente de trabalho.`,

  'E-mail': `ASSUNTO
Critérios para avaliar o ambiente de trabalho e o mobiliário corporativo

PREHEADER
Conheça aspectos para planejar o espaço corporativo da sua empresa.

Olá,

A consolidação do modelo híbrido trouxe novos desafios para as equipes de Recursos Humanos e Facilities na gestão dos espaços de trabalho.

O planejamento considera a facilidade de ajuste dos mobiliários, a alternância de posturas e a gestão do conforto acústico em ambientes integrados. Analisar esses fatores com base nas especificações de cada modelo ajuda a comparar alternativas.

Responda a este e-mail com as principais necessidades do seu espaço.

Atenciosamente,
Equipe Taranis Black`,
}

function App() {
  const [channel, setChannel] = useState('LinkedIn')
  const [copyMessage, setCopyMessage] = useState('')

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(examples[channel])
      setCopyMessage('Texto copiado.')
    } catch {
      setCopyMessage(
        'Não foi possível copiar automaticamente. Selecione o texto abaixo e use Ctrl + C.',
      )
    }
  }

  return (
    <div className="site">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="header">
        <a className="brand" href="#inicio" aria-label="Taranis Black — início">
          <span className="brand-symbol" aria-hidden="true">
            T
          </span>
          <span>
            TARANIS<span className="brand-light"> BLACK</span>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#estrategia">Estratégia</a>
          <a href="#estudio">Conteúdo</a>
          <a href="#governanca">Governança</a>
        </nav>

        <a
          className="header-link"
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver relatório ↗
        </a>
      </header>

      <main id="conteudo">
        <section className="hero section" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">
              ONE · AI FOR BUSINESS · CASE ACADÊMICO
            </p>

            <h1>
              THORA
              <br />
              <span>Uma voz.</span>
              <br />
              Múltiplos canais.
            </h1>

            <p className="hero-description">
              Assistente de IA para Marketing e Conteúdo da Taranis Black.
              Transforme uma ideia em conversas para LinkedIn, Instagram e e-mail,
              com identidade verbal e supervisão humana.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#estudio">
                Explorar demonstração <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#estrategia">
                Conhecer a estratégia
              </a>
            </div>

            <p className="hero-note">
              Empresa fictícia. Projeto desenvolvido por Marcus Corrêa Lopes
              Guedes.
            </p>
          </div>

          <aside className="hero-panel" aria-label="Visão geral do projeto">
            <div className="panel-topline">
              <span>TRANSFORMAÇÃO EM PERSPECTIVA</span>
              <span className="status-dot" aria-hidden="true" />
            </div>

            <div className="panel-heading">
              <span className="panel-number">01</span>
              <h2>Uma base estratégica. Várias possibilidades.</h2>
            </div>

            <div className="process-list">
              <div>
                <span>01 / DIAGNOSTICAR</span>
                <p>Entender os gargalos do negócio.</p>
              </div>
              <div>
                <span>02 / PRIORIZAR</span>
                <p>Escolher onde começar com IA.</p>
              </div>
              <div>
                <span>03 / EXPERIMENTAR</span>
                <p>Testar conteúdo com supervisão humana.</p>
              </div>
            </div>

            <div className="panel-footer">
              <span>ROTA ZERO + MARKETING</span>
              <span aria-hidden="true">↗</span>
            </div>
          </aside>
        </section>

        <section className="context-strip" aria-label="Dados do cenário fictício">
          <div>
            <strong>R$ 48 mi</strong>
            <span>Faturamento anual</span>
          </div>
          <div>
            <strong>280</strong>
            <span>Colaboradores</span>
          </div>
          <div>
            <strong>35%</strong>
            <span>Crescimento anual por três anos</span>
          </div>
          <div>
            <strong>4 pessoas</strong>
            <span>Na equipe de marketing</span>
          </div>
        </section>

        <section className="section strategy" id="estrategia">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / ESTRATÉGIA</p>
              <h2>Crescer exige transformar a operação.</h2>
            </div>
            <p>
              Processos manuais, comunicação fragmentada e respostas acima de
              24 horas orientaram a seleção de três oportunidades de IA.
            </p>
          </div>

          <div className="initiative-grid">
            {initiatives.map((initiative) => (
              <article className="initiative-card" key={initiative.number}>
                <div className="card-topline">
                  <span>{initiative.number}</span>
                  <span className="tag">{initiative.status}</span>
                </div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
                <div className="card-scores">
                  <span>
                    Impacto <strong>{initiative.impact}</strong>
                  </span>
                  <span>
                    Esforço <strong>{initiative.effort}</strong>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="section-note">
            Pontuações estimadas em escala de 1 a 5. A ordem proposta é conteúdo,
            atendimento e pedidos. Benefícios operacionais ainda precisam ser
            medidos em piloto.
          </p>
        </section>

        <section className="studio-section" id="estudio">
          <div className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / ESTÚDIO THORA</p>
                <h2>THORA. Uma voz. Múltiplos canais.</h2>
              </div>
              <p>
                Explore versões de um mesmo tema para três canais, com
                linguagem adaptada e revisão editorial.
              </p>
            </div>

            <div className="studio-layout">
              <aside className="seed-card">
                <span className="tag">CONTEÚDO-SEMENTE</span>
                <h3>O ambiente de trabalho híbrido</h3>
                <p>
                  O artigo do kit aborda ergonomia ativa, alternância de
                  posturas e conforto acústico em escritórios.
                </p>
                <div className="seed-divider" />
                <h4>Critério editorial</h4>
                <p>
                  As adaptações omitem estatísticas e promessas sem comprovação
                  e respeitam as especificações de cada modelo.
                </p>
                <p className="section-note">
                  Resumo do tema original. Exemplos preparados a partir do
                  exercício realizado no Gemini.
                </p>
              </aside>

              <div className="output-card">
                <div className="output-toolbar">
                  <div className="channel-tabs" aria-label="Escolher canal">
                    {Object.keys(examples).map((name) => (
                      <button
                        type="button"
                        key={name}
                        aria-pressed={channel === name}
                        className={channel === name ? 'active' : ''}
                        onClick={() => {
                          setChannel(name)
                          setCopyMessage('')
                        }}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="copy-button"
                    onClick={copyExample}
                  >
                    Copiar texto
                  </button>
                </div>

                <p className="demo-label">
                  DEMONSTRAÇÃO · EXEMPLO SALVO · SEM GERAÇÃO AO VIVO
                </p>

                <div className="output-text">{examples[channel]}</div>

                <div className="output-footer">
                  <span>Revisão humana antes da publicação</span>
                  <span role="status">{copyMessage}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section voice-section" id="identidade">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / IDENTIDADE VERBAL</p>
              <h2>A mesma marca em todos os canais.</h2>
            </div>
            <p>
              Quatro pilares orientam a escrita e ajudam a manter a consistência
              das mensagens.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <article className="pillar-card" key={pillar.title}>
                <span className="pillar-number">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section governance-section" id="governanca">
          <div className="governance-intro">
            <p className="eyebrow">04 / IA RESPONSÁVEL</p>
            <h2>Confiança faz parte do processo.</h2>
            <p>
              O uso de IA exige referências disponíveis, proteção de informações
              e pessoas responsáveis pelas decisões.
            </p>
            <a
              className="button button-primary"
              href={reportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar documentação ↗
            </a>
          </div>

          <div className="governance-list">
            <article>
              <span>01</span>
              <div>
                <h3>Precisão por modelo</h3>
                <p>
                  Garantias e características não devem ser generalizadas para
                  toda uma linha de produtos.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Referências antes da resposta</h3>
                <p>
                  No teste em uma nova conversa, o assistente solicitou o
                  catálogo antes de informar dados do produto.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Supervisão humana</h3>
                <p>
                  Aprovação de conteúdo, condições comerciais e faturamento
                  permanece com pessoas autorizadas.
                </p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>Privacidade desde o início</h3>
                <p>
                  Usar ferramentas aprovadas e limitar os dados fornecidos ao
                  necessário para cada tarefa.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          TARANIS<span className="brand-light"> BLACK</span>
        </div>
        <p>
          Case acadêmico · ONE — AI for Business
          <br />
          Marcus Corrêa Lopes Guedes
        </p>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>
    </div>
  )
}

export default App