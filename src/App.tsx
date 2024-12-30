import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getAverage } from './utils/get-average/get-average';

function App() {
  const average = getAverage(2, 4, 6);

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>Learn CI-CD</h1>
        <img src={logo} className={'App-logo'} alt={'logo'} />
        <p>{process.env.REACT_APP_BASE_URL}</p>
        <h4>{average}</h4>
      </header>
    </div>
  );
}

export default App;
