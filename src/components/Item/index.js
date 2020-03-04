import React from 'react';
import { MdArrowForward } from 'react-icons/md';

import './styles.scss';

export default function Item({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="item">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span>
        <MdArrowForward />
      </span>
    </a>
  );
}
