import React from 'react';

interface SubTitleProps {
  text: string;
  className?: string;
}

export default function SubTitle({ text, className = '' }: SubTitleProps) {
  return (
    <span
      className={`inline-block text-amber-500 bg-amber-500/20 text-sm font-medium leading-[19px] px-5 py-2 rounded-md mb-3 ${className}`}
    >
      {text}
    </span>
  );
}


