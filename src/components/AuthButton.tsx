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
      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Logout
    </button>
  ) : (
    <div className="hidden"></div>
  );
}
