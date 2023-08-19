import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function MaxWContainer({ children }: Props) {
  return (
    <div className='mx-auto flex h-full w-full max-w-[1400px] items-center justify-center'>
      {children}
    </div>
  );
}
