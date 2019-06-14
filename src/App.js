import React from 'react';
import logo from './binary_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Prototypes</h1>
      </header>
      <article>
        <p>
          For creating various small <code>Code</code> prototypes, in react and in node.
        </p>
        <a
          className="App-link"
          href="https://prototypes.royronalds.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View live
        </a>
      </article>
    </div>
  );
}

export default App;
