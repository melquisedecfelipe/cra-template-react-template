import React, { useState, useEffect } from 'react';
import { MdArrowForward } from 'react-icons/md';

import './styles.scss';

export default function Item({ title, description, link }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="item">
      <div>
        <h3 className={loading ? 'loading title' : ''}>{loading ? '' : title}</h3>
        <p className={loading ? 'loading description' : ''}>{loading ? '' : description}</p>
      </div>
      <a className={loading ? 'loading link' : ''} href={link}>
        {loading ? '' : <MdArrowForward />}
      </a>
    </div>
  );
}
