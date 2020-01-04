import React from 'react';
import { MdArrowForward } from 'react-icons/md';

import './styles.scss';

export default function Item({ title, description, link }) {
  return (
    <div className="item">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={link}>
        <MdArrowForward />
      </a>
    </div>
  );
}
