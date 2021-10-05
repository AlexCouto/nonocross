import React , { createContext , useState , useContext } from 'react';

const HoverContext = createContext();

export default function HoverContextProvider({children}) {
    // matriz default que aparece quando o site é aberto
    const [hover, setHover] = useState([null,null])

    return(
        <HoverContext.Provider
            value={[
                hover,
                setHover
            ]}
        >
            {children}
        </HoverContext.Provider>
    )
}

export function useHoverContext(){
    const context = useContext(HoverContext)
    const [ hover , setHover ] = context;
    return [ hover ,  setHover]
}