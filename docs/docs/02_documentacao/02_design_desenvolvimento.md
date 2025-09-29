---
id: design_desenvolvimento
title: Design e Desenvolvimento da Aplicação
---

# 2. Design e Desenvolvimento da Aplicação

&emsp; Esta seção tem como objetivo apresentar, de forma clara e estruturada, as decisões de design de experiência do usuário (UX/UI) e as etapas técnicas de desenvolvimento que deram forma ao NexPeer, aplicativo mobile desenvolvido para a QI Tech. A solução foi concebida para permitir transações financeiras peer-to-peer (P2P) de maneira intuitiva, segura e eficiente, refletindo os princípios da empresa: inovação tecnológica, conformidade regulatória, usabilidade e confiabilidade no setor financeiro.

&emsp; O processo de design priorizou uma jornada de usuário simplificada, com fluxos claros para cadastro, autenticação, envio e recebimento de valores. Paralelamente, o desenvolvimento seguiu uma arquitetura modular e escalável, contemplando a modelagem do banco de dados, a implementação de uma WebAPI RESTful para comunicação entre cliente e servidor, e a integração com serviços essenciais, como autenticação segura, validação de contas e processamento de transações.

&emsp; Além disso, são detalhados os componentes-chave do sistema, incluindo as camadas de persistência, lógica de negócio e interface, permitindo compreender como cada parte se conecta e opera de forma integrada para entregar uma experiência fluida e segura ao usuário final.

&emsp; O objetivo desta parte da documentação é oferecer uma visão abrangente do processo de construção do NexPeer, destacando tanto as escolhas de design centradas no usuário quanto as boas práticas de engenharia de software adotadas durante o desenvolvimento, garantindo assim funcionalidade, desempenho, manutenibilidade e alinhamento com os mais altos padrões do mercado financeiro digital.

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
  
  <a href="#tecnologias-utilizadas" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>Tecnologias utilizadas</h3>
      <p>Texto</p>
    </div>
  </a>

  <a href="#arquitetura" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>Arquitetura</h3>
      <p>Texto</p>
    </div>
  </a>

<a href="#protótipo-de-alta-fidelidade" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>Protótipo de Alta Fidelidade</h3>
      <p>Texto</p>
    </div>
  </a>

<a href="#modelagem-de-banco-de-dados" style={{ textDecoration: 'none' }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3 style={{ fontSize: '19px' }}>Modelagem de Banco de Dados</h3>
      <p>Texto</p>
    </div>
  </a>

<a href="#webapi-e-endpoints" style={{ textDecoration: 'none', }}>
    <div style={{ padding: '16px', border: '1px solid #5e5c5cff', borderRadius: '8px',}}>
      <h3>WebAPI e Endpoints</h3>
      <p>Texto</p>
    </div>
  </a>

</div>

## 2.1. Tecnologias utilizadas
Esta subseção (2.1) detalha o conjunto de ferramentas, frameworks e serviços escolhidos para o desenvolvimento do NexPeer. As decisões técnicas foram orientadas pelos critérios de segurança, escalabilidade, facilidade de manutenção e alinhamento com as boas práticas do mercado financeiro digital.

- **Front-end (Mobile App):** 
React: escolhido por sua robustez e ampla comunidade, além de possibilitar desenvolvimento multiplataforma com alto desempenho.
- **Back-end (API e lógica de negócios):**
Desenvolvido em JavaScript com Node.js e Express.js, estruturado no modelo RESTful. Essa escolha garante rapidez no desenvolvimento, ampla documentação e facilidade de integração com serviços externos, além de boa compatibilidade com o PostgreSQL (via Supabase). O backend é responsável por autenticação, gerenciamento de usuários, processamento de transações P2P e comunicação segura entre cliente e servidor.
- **Banco de Dados:** 
PostgreSQL, hospedado no Supabase: por oferecer suporte a queries complexas, boa performance e integração facilitada com serviços modernos de backend-as-a-service.
- **Ferramentas de Apoio:** 
   - Git e GitHub para versionamento e colaboração em equipe 
   - Figma para prototipagem e design de interfaces.

## 2.2. Arquitetura
Esta subseção (2.2) detalha a arquitetura do NexPeer, que foi desenvolvida seguindo o padrão **Model-View-Controller (MVC)** para garantir uma estrutura clara, modular e escalável. O uso desse padrão permite separar as responsabilidades do sistema em três componentes principais, de modo a facilitar a manutenção e o desenvolvimento colaborativo. Esta arquitetura, complementada por camadas de serviço e repositório, assegura a organização do código e a flexibilidade para futuras alterações.

* **Camadas da Arquitetura:**
    * **View (Front-end):** 
     Desenvolvida em React, esta camada é a interface com a qual o usuário interage diretamente. Ela exibe os dados e captura as ações do usuário, como cliques e preenchimento de formulários, enviando-os para o Controller. A View é a camada de apresentação, focada na experiência do usuário (UX/UI).
    * **Controller:** 
     Responsável por receber as requisições da View, ele atua como intermediário, validando os dados e coordenando as operações entre a View e o Service. O Controller não contém a lógica de negócios, apenas direciona as chamadas para a camada de Service apropriada.
    * **Service:** 
     Esta camada é o responsável pela lógica de negócios da aplicação. Ela agrupa as regras de negócio complexas, como validações de transações, cálculos de saldo e verificação de segurança (antifraude). O Service utiliza o Repository para acessar e manipular os dados, garantindo que a lógica de negócios esteja separada do banco de dados.
    * **Repository:** 
      O Repository é a camada que conversa diretamente com o banco de dados. Ele interage diretamente com o banco de dados PostgreSQL, contendo as consultas SQL e as operações de CRUD (Create, Read, Update, Delete). A grande vantagem é que ele serve como uma ponte clara para a camada de Service, isolando a lógica de negócios de como e onde os dados estão guardados.
    * **Model:** 
     Representa a estrutura de dados e as entidades do sistema. Os Models definem os campos e relacionamentos, garantindo a integridade e a consistência dos dados em todas as camadas.

## 2.3. Protótipo de Alta Fidelidade

## 2.4. Modelagem de Banco de Dados

### 2.4.1. Modelo Relacional

### 2.4.2. Consultas SQL

## 2.3. WebAPI e Endpoints