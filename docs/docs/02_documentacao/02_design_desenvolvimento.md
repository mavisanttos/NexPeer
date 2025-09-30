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

## 2.1. Tecnologias utilizadas {#tecnologias-utilizadas}
Esta subseção (2.1) detalha o conjunto de ferramentas, frameworks e serviços escolhidos para o desenvolvimento do NexPeer. As decisões técnicas foram orientadas pelos critérios de segurança, escalabilidade, facilidade de manutenção e alinhamento com as boas práticas do mercado financeiro digital.

- **Aplicação Web (Full-Stack): Next.js 14+ (com React):** Escolhemos Next.js por ser um framework full-stack robusto que nos permite construir tanto a interface do usuário (com React) quanto a nossa API de backend no mesmo projeto. Essa abordagem monolítica simplifica o desenvolvimento e o deploy, eliminando a necessidade de gerenciar repositórios e infraestruturas separadas. Utilizamos o App Router, que otimiza a performance com Server Components por padrão e nos dá um controle granular sobre a renderização no cliente. Para garantir a segurança e a qualidade do código em uma aplicação financeira complexa, adotamos o TypeScript, que nos fornece tipagem estática para prevenir bugs, facilitar a manutenção e habilitar um autocompletar inteligente em todo o projeto.
- **Banco de Dados:** 
PostgreSQL, hospedado no Supabase: por oferecer suporte a queries complexas, boa performance e integração facilitada com serviços modernos de backend-as-a-service.
- **Interação com o Banco de Dados: Prisma ORM**
O Prisma atua como a nossa camada de acesso a dados (Model), permitindo-nos escrever consultas ao banco de dados de forma segura e em TypeScript, o que acelera o desenvolvimento e previne erros.
- **Ferramentas de Apoio:** 
   - Git e GitHub para versionamento e colaboração em equipe 
   - Figma para prototipagem e design de interfaces.

## 2.2. Arquitetura {#arquitetura} 
Esta subseção (2.2) detalha a arquitetura do NexPeer, que foi desenvolvida seguindo o padrão **Model-View-Controller (MVC)** para garantir uma estrutura clara, modular e escalável. O uso desse padrão permite separar as responsabilidades do sistema em três componentes principais, de modo a facilitar a manutenção e o desenvolvimento colaborativo. Esta arquitetura, complementada por camadas de serviço e repositório, assegura a organização do código e a flexibilidade para futuras alterações (BARBOSA, 2021).

* **Camadas da Arquitetura:**
    * **View (Front-end):** 
     Desenvolvida em React, esta camada é a interface com a qual o usuário interage diretamente. Ela exibe os dados e captura as ações do usuário, como cliques e preenchimento de formulários, enviando-os para o Controller. A View é a camada de apresentação, focada na experiência do usuário (UX/UI).
    * **Controller:** 
     Responsável por receber as requisições da View, ele atua como intermediário, validando os dados e coordenando as operações entre a View e o Service. O Controller não contém a lógica de negócios, apenas direciona as chamadas para a camada de Service apropriada. Implementado com as Next.js API Routes dentro da pasta src/app/api/. Atua como o intermediário: recebe as requisições da View, valida os dados e chama a camada de Serviço (Model) para executar a lógica de negócio.
    * **Service:** 
     Esta camada é o responsável pela lógica de negócios da aplicação. Ela agrupa as regras de negócio complexas, como validações de transações, cálculos de saldo e verificação de segurança (antifraude). O Service utiliza o Repository para acessar e manipular os dados, garantindo que a lógica de negócios esteja separada do banco de dados.
    * **Repository:** 
      O Repository é a camada que conversa diretamente com o banco de dados. Ele interage diretamente com o banco de dados PostgreSQL, contendo as consultas SQL e as operações de CRUD (Create, Read, Update, Delete). A grande vantagem é que ele serve como uma ponte clara para a camada de Service, isolando a lógica de negócios de como e onde os dados estão guardados.
    * **Model:** 
     Representa a estrutura de dados e as entidades do sistema. Os Models definem os campos e relacionamentos, garantindo a integridade e a consistência dos dados em todas as camadas.

## 2.3. Protótipo de Alta Fidelidade {#protótipo-de-alta-fidelidade}

&emsp; O protótipo de alta fidelidade, serve como a representação visual e interativa de todo o fluxo de navegação da aplicação NexPeer. Ele é a ponte entre o design conceitual e a experiência final do usuário. Para facilitar a interpretação dos diferentes caminhos e jornadas do usuário, foi implementado um sistema de cores nas setas de navegação do diagrama. Esta legenda de cores é fundamental para compreender rapidamente a função de cada transição de tela.

&emsp; Para uma visualização interativa e completa do protótipo de alta fidelidade, acesse o link do Figma abaixo. Recomenda-se consultar a Legenda de Cores, também presente neste documento, para facilitar a compreensão das conexões e dos diferentes caminhos de usuário no diagrama visual.

Link do Protótipo no Figma

### 2.3.1. Legenda de Cores para Navegação

&emsp; As cores das setas no diagrama de fluxo representam diferentes tipos de ações e jornadas do usuário, conforme detalhado abaixo:

🔵 Setas Azuis: Representam o fluxo comum, percorrido por todos os usuários durante as etapas iniciais da aplicação, como a tela de Splash e a de Login.

🟢 Setas Verdes: Identificam o fluxo do Tomador. Elas indicam a jornada específica do usuário que está solicitando um empréstimo.

🌐 Setas Ciano: Identificam o fluxo do Investidor. Elas guiam o caminho exclusivo do usuário que deseja investir na plataforma.

🟡 Setas Amarelas: Direcionam para o fluxo de criação de conta. Embora seja um fluxo comum, esta cor o diferencia da navegação inicial.

🟣 Setas Roxas: Indicam o fluxo de recuperação de senha, uma ação específica acionada a partir da tela de Login.

🔴 Setas Vermelhas: Representam uma ação de retroceder ou voltar. Elas indicam que o usuário está retornando a uma tela anterior no fluxo.

### 2.3.2. Fluxo Comum de Entrada e Autenticação

#### A. Tela Inicial (Splash Screen) e Tela de Login

1. A Tela Incial é o ponto de entrada. Ela apresenta a marca e possui um único botão de ação, "Iniciar".

2. Seguindo a seta azul (fluxo comum), a ação de clicar em "Iniciar" leva o usuário para a Tela de Login.

3. A Tela de Login funciona como um hub central de autenticação, de onde partem múltiplos caminhos, identificados pelas setas coloridas:
  - Ao preencher os dados e clicar em "Entrar", o usuário seguirá o fluxo de Tomador (seta verde) ou Investidor (seta ciano), dependendo do seu perfil.
  - Clicando em "Crie aqui", o usuário inicia o fluxo de Cadastro de nova conta (seta amarela).
  - Clicando em "Esqueci minha senha?", o usuário é direcionado para o fluxo de Recuperação de Senha (seta roxa).

#### B. Recuperação de Senha

1. A partir da Tela de Login, ao clicar no link "Esqueci minha senha?", o usuário inicia este fluxo, seguindo a seta roxa.

2. A primeira tela (Formulário de Recuperação) solicita que o usuário digite seu email e clique no botão "Enviar instruções".

3. Após o clique, a seta roxa indica a transição para a segunda tela (Confirmação), que exibe a mensagem de sucesso "Email enviado!".

3. Na tela de Confirmação, a ação principal é clicar no botão "Voltar ao login". A seta vermelha partindo deste botão mostra que a ação redireciona o usuário de volta para a Tela de Login

4. Como caminho alternativo, em qualquer uma das etapas, o usuário pode clicar no link "Fazer login". A seta vermelha indica que esta ação também o leva de volta para a Tela de Login, cancelando o processo de recuperação.

#### C. Fluxo de Cadastro e Verificação de Identidade

1. O fluxo é iniciado a partir da Tela de Login ao clicar em "Crie aqui". Na Tela de Cadastro, o usuário preenche o formulário com suas informações pessoais e clica em "Continuar".

2. Seguindo a seta amarela, após o cadastro, o usuário é direcionado para a Tela de Escolha de Perfil

3. Nesta etapa, o usuário define seu objetivo na plataforma, escolhendo uma das duas opções:

- "Preciso de um empréstimo" (Tomador)

- "Quero investir" (Investidor)

4. A partir da escolha, o fluxo avança para a Tela de Verificação de Identidade. A cor da seta indica o perfil que foi selecionado no passo anterior:

- A seta verde representa a jornada do Tomador.

- A seta ciano representa a jornada do Investidor.

5. Na Tela de Verificação, o usuário confirma seus dados e realiza duas etapas de segurança: o escaneamento de um documento de identidade e a verificação facial (KYC).

6. Após concluir a verificação com sucesso, o fluxo se divide novamente, com as setas verde (Tomador) e ciano (Investidor) apontando para a próxima etapa específica de cada perfil.

7. Como caminho alternativo, nas telas de Cadastro e Escolha de Perfil, o link "Faça login" (seta vermelha) permite ao usuário abandonar o processo e retornar para a Tela de Login.

#### D. Fluxo de Configuração do Investidor

1. Após a conclusão da Verificação de Identidade (KYC), o usuário com perfil de Investidor é direcionado pela seta ciano para a primeira tela de configuração: Dados Financeiros do Investidor.

2. Nesta tela, o usuário preenche suas informações financeiras (renda, gastos, etc.) e clica no botão "Continuar para Questionário" para prosseguir.

3. O usuário entra na tela Questionário de Perfil de Risco que consiste em um questionário de múltiplas etapas para definir seu perfil de investidor. Ele navega entre as perguntas com os botões "Próxima" e "Anterior". A seta vermelha indica a ação de voltar para a pergunta anterior.

4. Ao responder a última pergunta, o usuário clica em "Finalizar". O sistema processa as respostas e exibe uma tela com o resultado: seu perfil de risco definido (ex: "Perfil Arrojado") e o limite de investimento calculado.

5. Na tela de resultado do perfil, o usuário clica em "Continuar para Open Finance". A seta ciano indica a transição para a tela OpenFinance Investidor.

6. Nesta última etapa, o usuário é apresentado a uma lista de instituições financeiras e pode conectar suas contas bancárias através do fluxo seguro do Open Finance.

7. Após realizar as conexões desejadas, o fluxo continua (indicado pela seta ciano na parte inferior) para o painel principal do investidor, o Dashboard Investidor.

8. A seta vermelha no topo da tela de Open Finance indica que o usuário pode, a qualquer momento, retornar para a tela de resultado do Perfil de Risco.

#### E. Fluxo do Tomador

1. Após a verificação de identidade (KYC), o usuário com perfil de Tomador é direcionado pela seta verde para a Tela Análise de Crédito.

2. Nesta tela, o usuário conecta sua conta bancária através do Open Finance para permitir a análise do seu perfil de crédito. Após selecionar as instituições, ele clica em "Autorizar Conexão Segura".

3. Com a análise concluída, a seta verde indica a transição para a tela principal, o Dashboard Tomador. Esta tela é organizada em uma navegação por abas na parte inferior.

4. A aba inicial padrão é a "Pedir Empréstimo". Aqui, o usuário visualiza seu score de crédito, limite disponível e pode preencher um formulário para solicitar um novo empréstimo.

5. O usuário pode navegar entre as abas para gerenciar suas atividades. As setas verdes ilustram as transições entre elas:

- Aba "Boletos": Exibe as parcelas e faturas em aberto, com a opção de baixar para pagamento.

- Aba "Empréstimos Ativos": Lista os contratos de empréstimo vigentes, mostrando o progresso do pagamento de cada um.

- Aba "Análises": Apresenta gráficos e relatórios sobre a saúde financeira do usuário, como a evolução do seu score e a distribuição de risco.

#### F. Fluxo do Investidor

1. Após finalizar a etapa de configuração (Perfil de Risco e Open Finance), o usuário é direcionado pela seta ciano para a tela principal, o Dashboard Investidor.

2. A aba inicial padrão é a "Oportunidades". Ela exibe um resumo da carteira (saldo, total investido) e uma lista de empréstimos disponíveis para investimento.

3. Ao clicar em uma oportunidade específica na lista, a seta ciano indica que o usuário é levado para uma tela de "Detalhes do Empréstimo". Ali, ele pode analisar todas as informações do tomador e da proposta antes de decidir investir.

4. A seta vermelha mostra que, a partir da tela de detalhes, o usuário pode retornar ao dashboard principal.

5. O usuário pode navegar para outras seções usando a barra de abas inferior. As setas ciano ilustram as transições entre elas:

- Aba "Investimentos": Lista todos os aportes que o usuário já realizou, mostrando o status e o progresso de cada um.

- Aba "Notificações": Apresenta um histórico de alertas importantes, como pagamentos recebidos e novas oportunidades.

- Aba "Análises": Oferece gráficos e relatórios sobre o desempenho e a rentabilidade da carteira de investimentos.

#### G. Tela de Perfil do Usuário

1. A Tela de Perfil é acessível a partir dos dashboards de Tomador e Investidor através de um ícone de usuário.

2. Nela, o usuário pode visualizar e editar suas informações pessoais, endereço e conferir um resumo financeiro da sua conta.

3. A principal ação de navegação é o botão "Sair da Conta". A seta vermelha indica que, ao clicar nele, o usuário encerra sua sessão e é redirecionado para a Tela de Login.

4. A seta vermelha no topo da tela (ícone de voltar) indica a ação de retornar para a tela anterior, que seria o dashboard de origem.

#### H. Tela de Notificações

1. A funcionalidade de Notificações é acessível a partir dos dashboards de Tomador e Investidor, acionada por um ícone de sino na interface.

2. As setas verde (Tomador) e ciano (Investidor) apontando para o ícone de notificações indicam que esta funcionalidade é compartilhada e acessível em ambos os perfis.

3. Ao ser acionada, a tela aparece como uma janela modal sobreposta ao dashboard, permitindo uma consulta rápida sem sair da tela atual.

4. Nesta janela, o usuário visualiza uma lista de todos os alertas e atualizações de sua conta.

5. O usuário pode fechar a janela de notificações clicando no ícone 'X', retornando imediatamente para a visualização do dashboard em que estava.

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