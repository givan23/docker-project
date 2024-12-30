import logo from './logo.svg';
import './App.css';
import { getAverage } from './utils/get-average/get-average';

function App() {
  const average = getAverage(2, 4, 6);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* this is only a test to verify if after the creation of the docker image, the ENV variable is set correctly */}
        <p>{process.env.REACT_APP_BASE_URL}</p>
        <h4>{average}</h4>
      </header>
    </div>
  );
}

export default App;
