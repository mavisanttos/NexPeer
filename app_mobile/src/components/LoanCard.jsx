// src/components/LoanCard.jsx
import React from 'react';

export default function LoanCard({ loan, onClick }) {
  const riskColor = 
    loan.risk === 'Baixo' ? '#4CAF50' : 
    loan.risk === 'Médio' ? '#FF9800' : '#F44336';

  return (
    <div 
      onClick={onClick}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      <h3 style={{ margin: '0 0 8px', color: '#333' }}>{loan.borrower}</h3>
      <p style={{ margin: '4px 0', color: '#555' }}>
        <strong>Valor:</strong> {loan.amount}
      </p>
      <p style={{ margin: '4px 0', color: '#555' }}>
        <strong>Taxa:</strong> {loan.rate} ao mês
      </p>
      <span 
        style={{
          display: 'inline-block',
          backgroundColor: riskColor,
          color: 'white',
          padding: '4px 10px',
          borderRadius: '20px',
          fontSize: '12px',
          marginTop: '8px'
        }}
      >
        Risco: {loan.risk}
      </span>
      <div style={{ fontSize: '10px', color: '#777', marginTop: '8px', display: 'flex', alignItems: 'center' }}>
        📜 Registro imutável na blockchain
      </div>
    </div>
  );
}