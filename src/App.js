import './App.css';
import GamePage from './components/nonogram/GamePage'
import Header from './components/Header.jsx'
import ResultMatrixProvider from './context/ResultMatrixContext';

export default function App() {

  return (
    <div className="App">

      <ResultMatrixProvider>
        <Header/>
        <header className="App-header">
          <GamePage/>
        </header>
      </ResultMatrixProvider>
    </div>
  );
}
