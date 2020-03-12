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
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white"
    >
      Logout
    </button>
  ) : (
    <div className="hidden"></div>
  );
}
