import React from 'react';

interface HijoProps {
  children: React.ReactNode;
}

export default function Hijo({ children }: HijoProps) {
  return (
    <div>
      este es mi hijo{children}
    </div>
  );
}