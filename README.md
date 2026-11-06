# THORA — Uma voz. Múltiplos canais.

[![Demo online](https://img.shields.io/badge/Demo-online-B2ED84?style=for-the-badge&logo=vercel&logoColor=black)](https://thora-taranis-black.vercel.app/)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ONE G11](https://img.shields.io/badge/ONE_G11-AI_for_Business-6F3D85?style=for-the-badge)

**Assistente de IA para Marketing e Conteúdo da Taranis Black.**

Case acadêmico que conecta estratégia de negócios, identidade verbal e inteligência artificial generativa à produção de conteúdo multicanal, com supervisão humana.

🔗 **[Acessar a demonstração](https://thora-taranis-black.vercel.app/)**  
📄 **[Consultar o relatório do projeto](https://docs.google.com/document/d/1GnzVb76NM6nQHpcYHlYsfXT2NlYy0EaBM_ipUGGE9hw/edit)**

## Sobre o projeto

A THORA foi desenvolvida a partir do Challenge Taranis Black, da formação **ONE G11 — AI for Business**, com foco na **Rota 2: IA para Marketing e Conteúdo**.

Taranis Black é uma empresa fictícia de ergonomia corporativa. THORA é o nome atribuído ao assistente de conteúdo apresentado neste projeto.

A proposta combina diagnóstico, priorização de oportunidades de IA, governança e uma demonstração de adaptação de conteúdo para diferentes canais.

## O problema

No cenário do desafio, uma equipe de marketing com quatro pessoas atende múltiplos canais e enfrenta:

- Inconsistência no tom de voz da marca.
- Dependência de produção visual externa.
- Tempo de resposta nas redes superior a 24 horas.
- Necessidade de adaptar conteúdos para públicos e formatos distintos.

A iniciativa priorizada foi um assistente de conteúdo multicanal, orientado por referências da marca e revisão humana.

## A solução

A THORA apoia a transformação de um conteúdo-semente em peças para:

| Canal | Entrega |
| --- | --- |
| LinkedIn | Publicação com abordagem executiva e consultiva |
| Instagram | Roteiro de carrossel com sete slides |
| E-mail | Mensagem com assunto, preheader, conteúdo e chamada para ação |

A identidade verbal utiliza quatro pilares:

- **Embasado:** precisão e uso responsável de referências.
- **Humano:** empatia e atenção às necessidades do público.
- **Sofisticado:** comunicação profissional e posicionamento premium.
- **Acessível:** clareza e linguagem descomplicada.

## O que está disponível no site

- Apresentação do cenário e da proposta.
- Três oportunidades de aplicação de IA.
- Priorização com estimativas de impacto e esforço.
- Estúdio THORA com exemplos para LinkedIn, Instagram e e-mail.
- Alternância entre canais e cópia dos textos.
- Pilares de identidade verbal.
- Diretrizes de governança e supervisão humana.
- Acesso ao relatório acadêmico.
- Layout responsivo.

## Como a IA foi utilizada

A configuração e os testes do assistente foram realizados no **Gemini**, com documentos de referência, incluindo manual de tom de voz, catálogo de produtos e conteúdo-semente.

O fluxo de trabalho adotado foi:

1. Fornecer as referências e o objetivo da comunicação.
2. Solicitar a adaptação para os canais desejados.
3. Conferir informações, tom de voz e condições comerciais.
4. Revisar os conteúdos antes de qualquer publicação.

**O site apresenta exemplos previamente produzidos e revisados. Esta versão não possui integração com uma API de IA e não gera novos conteúdos em tempo real.**

## Estratégia e governança

Além da especialização em marketing, o trabalho contempla a base estratégica obrigatória do desafio:

- Mapeamento de três casos de uso.
- Classificação das aplicações de IA.
- Definição de pontos de supervisão humana.
- Priorização por esforço e impacto.
- Proposta de métricas e gestão da mudança.
- Diretrizes de IA responsável e proteção de dados.

As outras oportunidades mapeadas foram apoio ao atendimento comercial e extração e conferência de pedidos. Essas iniciativas permanecem como propostas; somente o assistente de conteúdo foi configurado e testado no projeto.

### Regras de precisão

- Não inventar estatísticas, fontes, preços ou descontos.
- Não generalizar especificações de um produto para toda a linha.
- Não prometer resultados de saúde ou produtividade sem comprovação.
- Conferir informações com as referências autorizadas.
- Submeter os conteúdos à revisão humana.

## Resultados e limites

O projeto produziu um manual de tom de voz, instruções do assistente, exemplos multicanais e registros de testes de qualidade.

Os testes exploraram situações como generalizações de características de produtos, ofertas comerciais não autorizadas e ausência de referências.

As avaliações de impacto e esforço são estimativas para priorização. Não foram comprovados ganhos quantitativos de produtividade, economia financeira ou redução de tempo de resposta.

Os dados da empresa pertencem ao cenário acadêmico simulado. Os conteúdos demonstrativos não foram publicados nos canais de uma empresa real.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React | Interface e interações |
| JavaScript | Lógica da aplicação |
| CSS | Identidade visual e responsividade |
| Vite | Ambiente de desenvolvimento e build |
| ESLint | Verificação estática do código |
| Vercel | Hospedagem da demonstração |
| Gemini | Configuração e testes do assistente de conteúdo |

## Executar localmente

Requisitos: Node.js e npm compatíveis com as versões das dependências do projeto.

Ambiente utilizado no desenvolvimento: **Node.js 24.11.1** e **npm 11.19.0**.

```bash
git clone https://github.com/MCLG1661/Thora-Taranis-Black.git
cd Thora-Taranis-Black
npm ci
npm run dev
```

Abra o endereço indicado no terminal.

### Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o ambiente de desenvolvimento |
| `npm run build` | Gerar a versão de produção em `dist` |
| `npm run preview` | Visualizar localmente o build de produção |
| `npm run lint` | Executar a verificação estática |

A demonstração atual não exige chave de API.

## Validação

Antes da publicação, foram executados:

- Build de produção.
- Verificação com ESLint.
- Conferência manual da navegação, alternância entre canais, cópia dos textos e acesso ao relatório na versão publicada.

## Possíveis evoluções

- Integração com API de IA por meio de um backend.
- Entrada de conteúdo-semente e briefing pelo usuário.
- Gestão de referências e versões dos conteúdos.
- Fluxo de revisão e aprovação editorial.
- Avaliação estruturada de qualidade e tempo de execução.

Esses itens representam possibilidades futuras e não funcionalidades disponíveis nesta versão.

## Autoria e contexto acadêmico

**Marcus Corrêa Lopes Guedes**

Desenvolvido no contexto do **Challenge Taranis Black — ONE G11, AI for Business**, formação Oracle Next Education em parceria com a Alura.

A interface web foi criada como extensão de portfólio para apresentar a proposta e seus exemplos.

[GitHub do autor](https://github.com/MCLG1661) · [LinkedIn do autor](https://www.linkedin.com/in/marcusguedes/)
