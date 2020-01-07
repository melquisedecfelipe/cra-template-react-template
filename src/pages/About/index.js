import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Item from '../../components/Item';

import api from '../../services/api';

import './styles.scss';

export default function About() {
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    async function getItems() {
      const { data } = await api.get('5e133f493100005a8ad476cc');

      setItem(data);
    }

    getItems();
  }, []);

  return (
    <div className="about">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h3>About</h3>
        <p>My bootstrap template to use in react</p>
        <div>
          {item.map(elem => (
            <Item title={elem.title} description={elem.description} link={elem.link} />
          ))}
        </div>
      </main>
    </div>
  );
}
