// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="NexPeer"
      description="A camada de confiança para o crédito descentralizado."
    >
      <div style={{ padding: '2rem' }}>
        <h1>Bem-vindo à NexPeer</h1>
        <p>Plataforma de empréstimo e investimento peer-to-peer com transparência total.</p>
        <Link to="/docs/intro">
          <button style={{ padding: '10px 20px', backgroundColor: '#2E7D32', color: 'white', border: 'none', borderRadius: '4px' }}>
            Ver Documentação
          </button>
        </Link>
      </div>
    </Layout>
  );
}