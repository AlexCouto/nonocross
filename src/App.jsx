import './App.css';
import GamePage from './components/nonogram/GamePage'
import Header from './components/Header.jsx'
import ResultMatrixProvider from './context/ResultMatrixContext';
import { useAuthContext } from './context/auth';
import Login from './components/login'

export default function App() {

  const [isAuthenticated] = useAuthContext();

  return (
    <div className="App">
        <ResultMatrixProvider>
          <Header/>
          <header className="App-header">
            {isAuthenticated? <GamePage/> : <Login/>}
          </header>
        </ResultMatrixProvider>
      
    </div>
  );
}
