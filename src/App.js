import './App.css';
import GamePage from './components/nonogram/GamePage'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <GamePage/>
      </header>
    </div>
  );
}
