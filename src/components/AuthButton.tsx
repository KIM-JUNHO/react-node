import * as React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { fakeAuth } from '../utils/fakeAuth';

export default function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  return fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push('/'));
      }}
    >
      logout
    </button>
  ) : (
    <Link to="/login">Login</Link>
  );
}
