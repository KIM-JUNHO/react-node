import * as React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/request">Request</Link>
      <Link to="/history">History</Link>
      <AuthButton />
    </nav>
  );
}
