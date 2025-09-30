---
id: design_desenvolvimento
title: Design e Desenvolvimento da Aplicação
---

# 2. Design e Desenvolvimento da Aplicação

Esta seção (2) tem como objetivo apresentar, de forma clara e estruturada, as decisões de design de experiência do usuário (UX/UI) e as etapas técnicas de desenvolvimento que deram forma ao NexPeer, aplicativo mobile desenvolvido para a QI Tech. A solução foi concebida para permitir transações financeiras peer-to-peer (P2P) de maneira intuitiva, segura e eficiente, refletindo os princípios da empresa: inovação tecnológica, conformidade regulatória, usabilidade e confiabilidade no setor financeiro.

O processo de design priorizou uma jornada de usuário simplificada, com fluxos claros para cadastro, autenticação, envio e recebimento de valores. Paralelamente, o desenvolvimento seguiu uma arquitetura modular e escalável, contemplando a modelagem do banco de dados, a implementação de uma WebAPI RESTful para comunicação entre cliente e servidor, e a integração com serviços essenciais, como autenticação segura, validação de contas e processamento de transações.

Além disso, são detalhados os componentes-chave do sistema, incluindo as camadas de persistência, lógica de negócio e interface, permitindo compreender como cada parte se conecta e opera de forma integrada para entregar uma experiência fluida e segura ao usuário final.

O objetivo desta parte da documentação é oferecer uma visão abrangente do processo de construção do NexPeer, destacando tanto as escolhas de design centradas no usuário quanto as boas práticas de engenharia de software adotadas durante o desenvolvimento, garantindo assim funcionalidade, desempenho, manutenibilidade e alinhamento com os mais altos padrões do mercado financeiro digital.

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
  <a href="#tecnologias-utilizadas" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>Tecnologias utilizadas</h3>
      <p>Ferramentas e frameworks usados no NexPeer.</p>
    </div>
  </a>

  <a href="#arquitetura" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>Arquitetura</h3>
      <p>Estrutura MVC modular e escalável.</p>
    </div>
  </a>

  <a href="#protótipo-de-alta-fidelidade" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>Protótipo de Alta Fidelidade</h3>
      <p>Simulação da experiência real do usuário.</p>
    </div>
  </a>

  <a href="#modelagem-de-banco-de-dados" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3 style={{ fontSize: '19px' }}>Modelagem de Banco de Dados</h3>
      <p>Organização de dados para usuários, empréstimos e contratos.</p>
    </div>
  </a>

  <a href="#webapi-e-endpoints" style={{ textDecoration: 'none', }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>WebAPI e Endpoints</h3>
      <p>Comunicação segura entre front-end, back-end e blockchain.</p>
    </div>
  </a>

</div>

# 2.1. Tecnologias utilizadas {#tecnologias-utilizadas}

Esta subseção (2.1) detalha o conjunto de ferramentas, frameworks e serviços que serão utilizados para o desenvolvimento do NexPeer. As decisões técnicas foram orientadas pelos critérios de segurança, escalabilidade, facilidade de manutenção e alinhamento com as boas práticas do mercado financeiro digital.

- **Aplicação Web (Full-Stack): Next.js 14+ com React 19:** Será utilizado Next.js 14 com App Router por ser um framework full-stack moderno que permitirá construir tanto a interface do usuário (com React 19) quanto a API de backend no mesmo projeto. O App Router oferece Server Components por padrão, otimizando a performance e permitindo renderização híbrida (server/client). O roteamento baseado em pastas otimizará a performance com Server Components por padrão e dará controle granular sobre a renderização no cliente. Para garantir a segurança e a qualidade do código em uma aplicação financeira complexa, será adotado o TypeScript 5, que fornecerá tipagem estática para prevenir bugs, facilitar a manutenção e habilitar autocompletar inteligente em todo o projeto.

- **Banco de Dados:** PostgreSQL hospedado no Supabase, configurado via Prisma ORM para oferecer suporte a queries complexas, relacionamentos avançados e integridade referencial. O banco será estruturado com schema complexo incluindo entidades como Usuario, Emprestimo, Investimento, ContratoCcb, Parcela, Repasse, Notificacao e logs de auditoria. O Supabase fornecerá autenticação, real-time subscriptions e APIs REST automáticas.

- **Interação com o Banco de Dados: Prisma ORM 6.16+ com Supabase**
O Prisma atuará como a camada de acesso a dados (Model), permitindo escrever consultas ao banco de dados de forma segura e em TypeScript, o que acelerará o desenvolvimento e prevenirá erros. O schema incluirá relacionamentos complexos, enums para status e tipos, e campos de auditoria (criadoEm, atualizadoEm). O Supabase fornecerá funcionalidades adicionais como autenticação integrada, real-time subscriptions e APIs REST automáticas.

- **Interface de Usuário:**
  - **Tailwind CSS 3.4+:** Framework CSS utilitário para estilização responsiva e mobile-first
  - **Radix UI:** Biblioteca de componentes acessíveis e customizáveis para elementos complexos como modais, dropdowns, selects, etc.
  - **Lucide React:** Biblioteca de ícones moderna e consistente
  - **Componentes Customizados:** Sistema de design próprio baseado em shadcn/ui

- **Validação e Formulários:**
  - **React Hook Form 7.60+:** Gerenciamento de formulários com validação
  - **Zod 3.25+:** Validação de schemas em TypeScript
  - **@hookform/resolvers:** Integração entre React Hook Form e Zod

- **Blockchain e Contratos (MVP):**
  - **Hash de Contratos:** Geração de hash para contratos assinados
  - **Armazenamento Local:** Contratos salvos localmente com hash
  - **Integração Futura:** Preparação para blockchain (não implementado no MVP)

- **Verificação de Identidade e KYC (MVP):**
  - **Upload de Documentos:** Captura de RG/CNH via câmera
  - **Upload de Selfie:** Captura de foto para verificação
  - **Validação Básica:** Verificação de campos obrigatórios
  - **Status KYC:** Controle de aprovação/rejeição manual

- **Ferramentas de Apoio:** 
  - Git e GitHub para versionamento e colaboração em equipe 
  - Figma para prototipagem e design de interfaces
  - ESLint e Prettier para qualidade e formatação de código
  - PostCSS e Autoprefixer para processamento CSS

## 2.2. Arquitetura {#arquitetura} 

Esta subseção (2.2) detalha a arquitetura do NexPeer, que será desenvolvida seguindo o padrão **Next.js App Router** com elementos de **Model-View-Controller (MVC)** para garantir uma estrutura clara, modular e escalável. O uso do App Router permitirá uma arquitetura híbrida que combina Server Components, Client Components e API Routes, facilitando a manutenção e o desenvolvimento colaborativo.

* **Camadas da Arquitetura:**

    * **View (Front-end - Client Components):** 
     Será desenvolvida em React 19 com Next.js App Router, esta camada utilizará Client Components para interatividade do usuário. Será localizada em `src/app/` (páginas) e `src/components/` (componentes reutilizáveis), onde exibirá os dados e capturará as ações do usuário, como cliques e preenchimento de formulários, enviando-os para as API Routes. A View será a camada de apresentação, focada na experiência do usuário (UX/UI) com design responsivo mobile-first.

    * **Server Components (Renderização no Servidor):** 
     Componentes React que serão renderizados no servidor, otimizando a performance e SEO. Serão utilizados para páginas estáticas e conteúdo que não requer interatividade imediata.

    * **API Routes (Controller):** 
     Serão implementadas em `src/app/api/` seguindo o padrão REST, atuando como intermediários entre a View e os Services. Receberão requisições HTTP, validarão dados e coordenarão operações entre a View e a camada de Service. Não conterão lógica de negócios, apenas direcionarão as chamadas para a camada de Service apropriada.

    * **Controllers (Lógica de Coordenação):** 
     Serão localizados em `src/controllers/`, contendo a lógica de coordenação entre a View e os Services. Exemplos: AuthController, LoanController, InvestmentController. Atuarão como intermediários entre as API Routes e os Services.

    * **Service (Lógica de Negócios):** 
     Esta camada, localizada em `src/services/`, será responsável pela lógica de negócios da aplicação. Agrupará as regras de negócio complexas, como validações de transações, cálculos de saldo, verificação de segurança (antifraude) e integração com Open Finance. O Service utilizará o Prisma Client para acessar e manipular os dados, garantindo que a lógica de negócios esteja separada do banco de dados.

    * **Model (Estrutura de Dados):** 
     Representará a estrutura de dados e as entidades do sistema através do Prisma Schema (`prisma/schema.prisma`) e TypeScript types (`src/types/`). Os Models definirão os campos, relacionamentos e validações, garantindo a integridade e a consistência dos dados em todas as camadas. Incluirá entidades como Usuario, Emprestimo, Investimento, ContratoCcb, Parcela, Repasse, Notificacao.

    * **Database Layer (Prisma + Supabase):** 
     Camada de acesso a dados implementada via Prisma Client (`src/lib/database.ts`) conectada ao Supabase. Fornecerá uma interface type-safe para interação com PostgreSQL, incluindo queries, mutations, relacionamentos e transações. O Supabase adicionará funcionalidades de autenticação, real-time e APIs REST automáticas.

    * **Blockchain Layer (MVP - Hash Local):** 
     Camada simplificada para MVP que será responsável por gerar hashes de contratos assinados e armazená-los localmente. Preparará a estrutura para futura integração com blockchain, mas no MVP focará em hash de segurança e armazenamento local.

* **Estrutura de Pastas Planejada:**
```
src/
├── app/                    # Next.js App Router (páginas e API routes)
│   ├── api/               # API Routes (Controllers)
│   ├── (pages)/           # Páginas da aplicação
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   └── ui/               # Componentes base (shadcn/ui)
├── controllers/          # Lógica de coordenação
├── services/            # Lógica de negócios
├── models/              # Modelos de dados (TypeScript)
├── types/               # Definições de tipos
├── lib/                 # Utilitários e configurações
│   ├── database.ts       # Prisma Client
│   ├── web3.ts          # Configuração blockchain
│   └── kyc.ts           # Configuração KYC
├── hooks/               # Custom React hooks
├── views/               # Componentes de view específicos
└── kyc/                 # Verificação de identidade (MVP)
    ├── components/      # Componentes de upload
    ├── utils/          # Utilitários básicos
    └── types/          # Tipos KYC
```

* **Padrões de Desenvolvimento a Serem Implementados:**
    * **Server-First:** Uso de Server Components por padrão
    * **Client Components:** Apenas quando necessário para interatividade
    * **Type Safety:** TypeScript em toda a aplicação
    * **Component Composition:** Componentes pequenos e reutilizáveis
    * **API-First:** API Routes bem estruturadas e documentadas
    * **Mobile-First:** Design responsivo com Tailwind CSS

* **Segurança e Compliance a Serem Implementados:**
    * **Validação de Dados:** Zod schemas para validação
    * **Autenticação:** JWT tokens com bcryptjs
    * **Auditoria:** Logs de ações em `LogAcao`
    * **KYC:** Verificação de identidade com status tracking
    * **Open Finance:** Integração segura com bancos
    * **LGPD:** Conformidade com proteção de dados
    * **KYC Básico:** Upload e validação manual de documentos
    * **Hash de Segurança:** Geração de hash para contratos
    * **Data Privacy:** Criptografia básica de dados sensíveis

* **Performance e Escalabilidade Planejadas:**
    * **Server Components:** Renderização otimizada no servidor
    * **Code Splitting:** Divisão automática de código por rota
    * **Image Optimization:** Next.js Image component
    * **Caching:** Estratégias de cache do Next.js
    * **Database Optimization:** Queries otimizadas com Prisma
    * **Upload Otimizado:** Compressão de imagens para upload
    * **Validação Rápida:** Verificação básica de campos obrigatórios
    * **Interface Responsiva:** Design mobile-first para captura de documentos

Esta arquitetura moderna combinará as melhores práticas do Next.js 14 com padrões estabelecidos, garantindo uma base sólida para crescimento e manutenção da plataforma NexPeer.


## 2.3. Protótipo de Alta Fidelidade {#protótipo-de-alta-fidelidade}

## 2.4. Modelagem de Banco de Dados {#modelagem-de-banco-de-dados}
Esta subseção (2.4) descreve a estrutura do banco de dados do NexPeer, projetada para ser a base robusta e escalável da nossa plataforma. A modelagem foi pensada para garantir a integridade dos dados e a eficiência nas operações financeiras, além de facilitar a rastreabilidade e a auditoria de todas as transações. Adotamos um modelo relacional que organiza as informações de forma lógica e interconectada, permitindo que a aplicação funcione de maneira fluida e segura.

### 2.4.1. Modelo Relacional
Para facilitar a visualização e o entendimento, disponibilizamos o diagrama de entidade-relacionamento (DER) em um formato gráfico.

```mermaid
erDiagram
    %% Tabela usuarios
    usuarios {
        varchar id PK "UUID v4 gerado pela aplicação"
        varchar email "Email de login, deve ser único"
        varchar senha_hash "Senha do usuário armazenada de forma segura (hash)"
        char cpf "Somente números, máscara tratada na aplicação"
        varchar nome "Primeiro nome do usuário"
        varchar sobrenome
        varchar telefone "Formato internacional, ex: +5511999999999"
        varchar tipo_perfil "Valores: 'tomador' ou 'investidor'"
        varchar status_kyc "Valores: 'pendente', 'aprovado', 'rejeitado'"
        varchar foto_usuario_url
        varchar foto_documento_url
        datetime criado_em
        datetime atualizado_em
    }

    %% Tabela perfil_tomador
    perfil_tomador {
        varchar usuario_id PK
        int score_credito "Score de 0 a 1000"
        decimal limite_credito
        json open_finance_fake "Dados simulados do Open Finance"
        datetime criado_em
    }

    %% Tabela perfil_investidor
    perfil_investidor {
        varchar usuario_id PK
        decimal renda_mensal
        decimal patrimonio_total
        varchar perfil_risco "Valores: 'conservador', 'moderado', 'agressivo'"
        decimal limite_investimento
        json open_finance_fake "Dados simulados do Open Finance"
        datetime criado_em
    }

    %% Tabela emprestimos
    emprestimos {
        varchar id PK
        varchar tomador_id FK "ID do usuário tomador"
        varchar status "Valores: 'pendente', 'financiado', 'ativo', 'concluido', 'inadimplente'"
        decimal valor_solicitado
        decimal valor_aprovado
        decimal taxa_juros "Taxa mensal em %"
        int prazo_meses
        varchar finalidade
        datetime financiado_em
        datetime criado_em
        datetime atualizado_em
    }

    %% Tabela investimentos
    investimentos {
        varchar id PK
        varchar emprestimo_id FK "1 investidor por empréstimo (MVP)"
        varchar investidor_id FK
        decimal valor_investido
        varchar status "Valores: 'ativo', 'concluido'"
        datetime criado_em
    }

    %% Tabela contratos_ccb
    contratos_ccb {
        varchar id PK
        varchar emprestimo_id FK
        varchar investidor_id FK
        varchar tomador_id FK
        varchar hash_contrato "Hash do contrato na blockchain"
        varchar pdf_url
        boolean assinado_tomador
        boolean assinado_investidor
        datetime executado_em
        datetime criado_em
    }

    %% Tabela parcelas
    parcelas {
        varchar id PK
        varchar emprestimo_id FK
        date data_vencimento
        decimal valor_parcela
        datetime pago_em
        varchar status "Valores: 'pendente', 'pago', 'atrasado'"
        datetime criado_em
    }

    %% Tabela repasses
    repasses {
        varchar id PK
        varchar parcela_id FK
        varchar investidor_id FK
        decimal valor_repassado
        decimal taxa_plataforma
        datetime data_repassado
        datetime criado_em
    }

    %% Tabela logs_acoes
    logs_acoes {
        varchar id PK
        varchar usuario_id FK
        varchar acao
        text descricao
        varchar ip_origem
        datetime criado_em
    }

    %% Tabela historico_scores
    historico_scores {
        varchar id PK
        varchar usuario_id FK
        int score
        varchar fonte_calculo "Ex: 'cadastro_inicial', 'reanalise_periodica'"
        datetime criado_em
    }

    %% Tabela notificacoes
    notificacoes {
        varchar id PK
        varchar usuario_id FK
        varchar titulo
        text mensagem
        boolean lida
        varchar tipo "Ex: 'pagamento_recebido', 'emprestimo_financiado', 'lembrete_vencimento'"
        varchar link_relacionado
        datetime criado_em
    }

    %% Relacionamentos
    usuarios ||--o{ perfil_tomador : ""
    usuarios ||--o{ perfil_investidor : ""
    usuarios ||--o{ emprestimos : "tomador_id"
    usuarios ||--o{ investimentos : "investidor_id"
    usuarios ||--o{ contratos_ccb : "investidor_id"
    usuarios ||--o{ contratos_ccb : "tomador_id"
    usuarios ||--o{ logs_acoes : ""
    usuarios ||--o{ historico_scores : ""
    usuarios ||--o{ notificacoes : ""

    emprestimos ||--o{ investimentos : "emprestimo_id"
    emprestimos ||--o{ contratos_ccb : "emprestimo_id"
    emprestimos ||--o{ parcelas : "emprestimo_id"

    parcelas ||--o{ repasses : "parcela_id"
```

A tabela `usuarios` serve como o núcleo da base de dados, contendo as informações essenciais de todos os usuários, como nome, email e CPF. O campo `tipo_perfil` determina se o usuário é um 'tomador' ou um 'investidor', vinculando-o a tabelas de perfil dedicadas (`perfil_tomador` e `perfil_investidor`) que armazenam dados específicos, como **score de crédito** ou **renda mensal**.

As operações de empréstimo e investimento são gerenciadas pelas tabelas `emprestimos` e `investimentos`, que registram as solicitações dos tomadores e conectam o investidor ao empréstimo que ele apoiou. Para administrar os pagamentos, a tabela `parcelas` armazena as obrigações do tomador, enquanto a tabela `repasses` registra os pagamentos líquidos enviados aos investidores.

Para garantir a conformidade e a segurança, a tabela `contratos_ccb` armazena os registros dos contratos, assegurando a validade jurídica das operações. Adicionalmente, a tabela `logs_acoes` funciona como um sistema de auditoria, registrando as ações importantes dos usuários para fins de rastreabilidade. Finalmente, para aprimorar a experiência do usuário, a tabela `historico_scores` armazena o histórico da pontuação de crédito, e a tabela `notificacoes` é responsável por enviar alertas e confirmações importantes.

### 2.4.2. Consultas SQL

## 2.5. WebAPI e Endpoints {#webapi-e-endpoints}
Esta subseção (2.5) mostra como a aplicação se conecta à WebAPI e aos serviços externos que sustentam o funcionamento da aplicação, incluindo a comunicação com a blockchain. O objetivo é explicar de forma clara como os endpoints disponibilizam funcionalidades essenciais, como cadastro de usuários, solicitação de empréstimos, investimentos e execução de contratos financeiros peer-to-peer (P2P).

A integração com a blockchain, através de smart contracts, garante que os contratos sejam registrados de forma imutável e auditável, oferecendo segurança jurídica e transparência nas transações. Nesta subseção, apresentamos o contrato principal utilizado no MVP e mostramos como ele se conecta à aplicação.

## 2.5.1 Integração com Smart Contract

&emsp; O contrato principal do MVP é o `SimpleP2PLoan`, que gerencia empréstimos entre tomadores e investidores, controlando valores, taxas, prazos e pagamentos. A seguir, é detalhado o funcionamento do contrato.

### Smart Contract `SimpleP2PLoan`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleP2PLoan { 
    address public borrower; 
    address public lender; 
    uint256 public principal; 
    uint256 public monthlyRate; 
    uint256 public termMonths;
    bool public isActive = true; 

    event LoanCreated(address borrower, address lender, uint256 principal, uint256 rate, uint256 term);

    constructor(
        address _borrower,
        uint256 _principal,
        uint256 _monthlyRate,
        uint256 _termMonths
    ) payable {
        require(msg.value == _principal, "Value must match loan amount"); 
        require(_termMonths == 6 || _termMonths == 12 || _termMonths == 24, "Invalid term");

        borrower = _borrower;
        lender = msg.sender;
        principal = _principal;
        monthlyRate = _monthlyRate;
        termMonths = _termMonths;

        payable(_borrower).transfer(_principal);

        emit LoanCreated(_borrower, msg.sender, _principal, _monthlyRate, _termMonths);
    }

    function repay() external payable {
        require(msg.sender == borrower, "Only borrower can repay");
        payable(lender).transfer(msg.value);
    }
}
```
#### Variáveis públicas
- **borrower** e **lender**: armazenam os endereços Ethereum do tomador e do investidor.  
- **principal**: valor total do empréstimo.  
- **monthlyRate**: taxa de juros mensal, que pode ser baseada no score de crédito do tomador.  
- **termMonths**: prazo do empréstimo em meses.  
- **isActive**: indica se o contrato ainda está em vigor.  

#### Eventos
- **LoanCreated**: emitido na criação do contrato, registra o empréstimo na blockchain. Eventos permitem que o front-end ou outros serviços externos monitorem transações de forma confiável.  

#### Construtor
- Executado apenas uma vez na criação do contrato.  
- Valida que o valor enviado corresponde ao empréstimo e que o prazo é válido (6, 12 ou 24 meses).  
- Inicializa as variáveis e transfere o valor para o tomador.  
- Emite o evento **LoanCreated**.  

#### Função `repay`
- Permite que o tomador pague de volta o empréstimo diretamente ao investidor.  
- Valida que apenas o tomador pode executar a função.  
- Transferência é feita automaticamente para o investidor.  

A utilização da blockchain no NexPeer traz diversos benefícios estratégicos e operacionais. Por ser uma tecnologia distribuída e imutável, ela garante que todas as transações realizadas por meio dos contratos P2P sejam registradas de forma segura e auditável, sem possibilidade de alteração posterior. Isso aumenta a confiança entre tomadores e investidores, pois cada empréstimo e cada pagamento ficam registrados de forma transparente e permanente. (GONZALEZ, 2025)

Além disso, a blockchain permite a automação de processos críticos por meio de smart contracts, reduzindo a necessidade de intervenção manual e minimizando erros ou fraudes. A execução automática de contratos financeiros, como a liberação de valores e o repasse de pagamentos, proporciona maior eficiência operacional e agilidade na experiência do usuário.  

Outro ponto importante é a segurança jurídica: ao registrar os contratos na blockchain, o NexPeer garante um histórico verificável das transações, o que fortalece a conformidade regulatória e a proteção dos participantes da plataforma (THE COMPLIANCE DIGEST, 2024). 

A integração do NexPeer com a blockchain, através de smart contracts como o `SimpleP2PLoan`, representa um passo fundamental para combinar tecnologia financeira de ponta com segurança, transparência e confiabilidade. Essa abordagem assegura que todas as operações P2P sejam rastreáveis, automatizadas e auditáveis, oferecendo uma experiência segura tanto para tomadores quanto para investidores, alinhada aos padrões do mercado financeiro digital.