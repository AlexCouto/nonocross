import React , { createContext , useState , useContext } from 'react';

const ResultMatrixContext = createContext();

export default function ResultMatrixProvider({children}) {
    const [ResultMatrix, setResultMatrix] = useState([
        ["#ff0000", "empty", "#ff0000"],
        ["empty", "#ff0000", "empty"],
        ["#ff0000", "#ff0000", "#ff0000"]
      ])

    return(
        <ResultMatrixContext.Provider
            value={[
                ResultMatrix,
                setResultMatrix
            ]}
        >
            {children}
        </ResultMatrixContext.Provider>
    )
}

export function useResultMatrixContext(){
    const context = useContext(ResultMatrixContext)
   const [ ResultMatrix , setResultMatrix ] = context;
    return [ ResultMatrix ,  setResultMatrix]
}