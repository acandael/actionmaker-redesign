import React from 'react';

export function FooterLogo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/logo.svg"
        alt="Action Maker Logo"
        className="h-12 w-auto"
      />
    </div>
  );
}