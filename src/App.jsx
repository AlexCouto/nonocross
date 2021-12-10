import './App.css';
import { useEffect, useState } from 'react';
import GamePage from './components/nonogram/GamePage'
import Header from './components/Header.jsx'
import ResultMatrixProvider from './context/ResultMatrixContext';
import { useAuthContext } from './context/auth';
import axios from 'axios';
import Login from './components/login';
import Loader from "react-loader-spinner";



export default function App() {

  const [isAuthenticated,setIsAuthenticated] = useAuthContext();
  const [loading,setLoading] = useState(true);

  useEffect( () => {
    async function get_isAuthenticated() {
        try {
            const response = await axios.get('/api/auth/isAuthenticated');
            if(response.data.authenticated)
              setIsAuthenticated(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    get_isAuthenticated()
},[])

  return (
    <div className="App">
        <ResultMatrixProvider>
          <Header/>
          <header className="App-header">
          {loading ? <Loader 
                        type="Oval" 
                        color="#00ace6"
                        height={230} width={230}
                        /> : isAuthenticated ? <GamePage/> : <Login/>  }
            
          </header>
        </ResultMatrixProvider>
      
    </div>
  );
}
