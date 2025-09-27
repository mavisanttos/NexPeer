// src/App.js
import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoanDetailScreen from './screens/LoanDetailScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleLogin = (role) => {
    setCurrentScreen('dashboard');
  };

  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan);
    setCurrentScreen('loan-detail');
  };

  const handleBack = () => {
    setCurrentScreen('dashboard');
  };

  const handleAccept = () => {
    alert('✅ Proposta aceita!\nContrato registrado na blockchain.\nID: 0x7a3...f9b2');
    setCurrentScreen('dashboard');
  };

  // Renderiza a tela atual
  if (currentScreen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (currentScreen === 'dashboard') {
    return <DashboardScreen onLoanSelect={handleLoanSelect} />;
  }

  if (currentScreen === 'loan-detail' && selectedLoan) {
    return (
      <LoanDetailScreen 
        loan={selectedLoan} 
        onBack={handleBack} 
        onAccept={handleAccept} 
      />
    );
  }

  return <LoginScreen onLogin={handleLogin} />;
}