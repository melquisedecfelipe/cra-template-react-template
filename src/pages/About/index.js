import React from 'react';
import { Link } from 'react-router-dom';

import Item from '../../components/Item';

import './styles.scss';

export default function About() {
  return (
    <div className="about">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h3>About</h3>
        <p>My bootstrap template to use in react</p>
        <div>
          <Item
            title="Axios"
            description="Promise based HTTP client for the browser and node.js"
            link="https://github.com/axios/axios"
          />
          <Item
            title="Commitlint"
            description="Lint commit messages"
            link="https://github.com/conventional-changelog/commitlint"
          />
          <Item
            title="Commitizen"
            description="The commitizen command line utility"
            link="https://github.com/commitizen/cz-cli"
          />
          <Item
            title="Eslint"
            description="Find and fix problems in your JavaScript code"
            link="https://eslint.org/"
          />
          <Item
            title="Eslint import helpers"
            description="ESLint plugin to help enforce a configurable order for import statements"
            link="https://github.com/Tibfib/eslint-plugin-import-helpers"
          />
          <Item
            title="Husky"
            description="Git hooks made easy"
            link="https://github.com/typicode/husky"
          />
          <Item
            title="React"
            description="A JavaScript library for building user interfaces"
            link="https://reactjs.org/"
          />
          <Item
            title="React icons"
            description="svg react icons of popular icon packs"
            link="https://react-icons.netlify.com/"
          />
          <Item
            title="React router"
            description="Declarative routing for React"
            link="https://reacttraining.com/react-router/"
          />
        </div>
      </main>
    </div>
  );
}
