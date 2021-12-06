import React , { createContext , useState , useContext } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({children}) {
   
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <AuthContext.Provider
            value={[
                isAuthenticated,
                setIsAuthenticated
            ]}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    const context = useContext(AuthContext)
    const [ isAuthenticated , setIsAuthenticated ] = context;
    return [ isAuthenticated ,  setIsAuthenticated]
}