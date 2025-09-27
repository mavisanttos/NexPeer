// src/screens/DashboardScreen.jsx
import React from 'react';
import LoanCard from '../components/LoanCard';

export default function DashboardScreen({ onLoanSelect }) {
  const loans = [
    {
      id: 1,
      borrower: "Ana Silva",
      amount: "R$ 5.000",
      rate: "2.5%",
      risk: "Baixo",
      description: "Reforma residencial"
    },
    {
      id: 2,
      borrower: "Carlos Souza",
      amount: "R$ 10.000",
      rate: "3.0%",
      risk: "Médio",
      description: "Equipamentos médicos"
    },
    {
      id: 3,
      borrower: "Empresa TechFlow",
      amount: "R$ 25.000",
      rate: "3.8%",
      risk: "Alto",
      description: "Expansão de equipe"
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>📊 Oportunidades de Investimento</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Escolha um empréstimo para analisar e investir.
      </p>
      
      {loans.map(loan => (
        <LoanCard
          key={loan.id}
          loan={loan}
          onClick={() => onLoanSelect(loan)}
        />
      ))}
    </div>
  );
}