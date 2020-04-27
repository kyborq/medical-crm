import React from 'react';

import { LoginForm } from '../components/LoginForm';

import './AuthPage.css';

export function AuthPage() {
  return (
    <div className='auth-page'>
      <LoginForm />
    </div>
  );
}
