import React from 'react';

export function NavLogo() {
  return (
    <a 
      href="/" 
      className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
      aria-label="Action Maker Home"
    >
      <img
        src="/logo.png"
        alt=""
        // className="h-8 w-auto"
        aria-hidden="true"
        className="w-[150px] h-[75px]"
      />
    </a>
  );
}