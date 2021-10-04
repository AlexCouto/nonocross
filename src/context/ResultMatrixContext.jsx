import React , { createContext , useState , useContext } from 'react';

const ResultMatrixContext = createContext();

export default function ResultMatrixProvider({children}) {
    // matriz default que aparece quando o site é aberto
    const [resultMatrix, setresultMatrix] = useState(
        [["#ff0000","empty","#00ff00"],
          ["empty","#ff0000","empty"],
        ["#ff0000","#ff0000","#ff0000"]]
      )

    return(
        <ResultMatrixContext.Provider
            value={[
                resultMatrix,
                setresultMatrix
            ]}
        >
            {children}
        </ResultMatrixContext.Provider>
    )
}

export function useResultMatrixContext(){
    const context = useContext(ResultMatrixContext)
   const [ resultMatrix , setresultMatrix ] = context;
    return [ resultMatrix ,  setresultMatrix]
}