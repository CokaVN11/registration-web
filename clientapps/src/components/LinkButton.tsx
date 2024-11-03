import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to: string;
  text: string;
  highlight?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, text, highlight }) => {
  return (
    <Link
      to={to}
      className={`hover:bg-gray-200 active:bg-gray-300 px-4 py-1 rounded-xl text-gray-800 hover:text-gray-600 ${highlight ? 'bg-gray-100 font-semibold' : ''}`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
