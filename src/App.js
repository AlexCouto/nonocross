import './App.css';
import GamePage from './components/nonogram/GamePage'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <GamePage/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
