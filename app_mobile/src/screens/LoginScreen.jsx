// src/screens/LoginScreen.jsx
import React from 'react';

export default function LoginScreen({ onLogin }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '16px', color: '#1976D2' }}>NexPeer</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>
        Plataforma P2P com IA, blockchain e segurança
      </p>
      
      <button
        onClick={() => onLogin('investor')}
        style={{
          padding: '14px 28px',
          fontSize: '16px',
          backgroundColor: '#7B1FA2',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '12px',
          width: '100%',
          maxWidth: '300px'
        }}
      >
        Entrar como Investidor
      </button>

      <button
        onClick={() => alert('Funcionalidade em breve para tomadores!')}
        style={{
          padding: '12px 24px',
          fontSize: '14px',
          background: 'none',
          color: '#7B1FA2',
          border: '1px solid #7B1FA2',
          borderRadius: '6px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '300px'
        }}
      >
        Entrar como Tomador
      </button>
    </div>
  );
}