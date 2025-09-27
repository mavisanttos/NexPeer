// src/pages/index.js
import React from 'react';
import { Navigate } from '@docusaurus/router';

export default function Home() {
  return <Navigate to="/docs/intro" replace />;
}
