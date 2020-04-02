import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Home() {
  return (
    <div className="home">
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <h3>React Template</h3>
        <a href="https://github.com/melquisedecfelipe/react-template">
          github.com/melquisedecfelipe
        </a>
      </main>
    </div>
  );
}
