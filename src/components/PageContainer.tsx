import * as React from 'react';

export default function PageContainer({ children }) {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">{children}</div>
    </div>
  );
}
