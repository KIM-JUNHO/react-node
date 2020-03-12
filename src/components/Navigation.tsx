import * as React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

export default function Navigation() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 px-3 py-2 text-lg font-bold text-white cursor-pointer"
            >
              FPMS Rules
            </Link>
            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/request"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Request
                </Link>
                <Link
                  to="/history"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  History
                </Link>
              </div>
            </div>
          </div>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
