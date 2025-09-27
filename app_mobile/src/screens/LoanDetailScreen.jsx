// src/screens/LoanDetailScreen.jsx
import React from 'react';

export default function LoanDetailScreen({ loan, onBack, onAccept }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: '20px',
          color: '#7B1FA2',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        ← Voltar ao Dashboard
      </button>

      <h2 style={{ color: '#333' }}>📄 Detalhes do Empréstimo</h2>
      
      <p><strong>Tomador:</strong> {loan.borrower}</p>
      <p><strong>Valor solicitado:</strong> {loan.amount}</p>
      <p><strong>Taxa de juros:</strong> {loan.rate} ao mês</p>
      <p><strong>Nível de risco:</strong> {loan.risk}</p>
      <p><strong>Finalidade:</strong> {loan.description}</p>

      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '12px', 
        borderRadius: '8px', 
        marginTop: '20px',
        fontSize: '14px'
      }}>
        <strong>🔒 Segurança:</strong> Este contrato será registrado como smart contract na blockchain Polygon. 
        Após aceite, é imutável e auditável por todas as partes.
      </div>

      <button
        onClick={onAccept}
        style={{
          marginTop: '24px',
          padding: '14px 28px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        ✅ Aceitar Proposta e Assinar na Blockchain
      </button>
    </div>
  );
}