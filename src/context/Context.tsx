import { ReactNode, useContext } from "react";
import { createContext } from "react";

interface MyContextType {
  buttonStyles: string
}

const context = createContext<MyContextType>({} as MyContextType)

export function ContextStyles ({children}: {children: ReactNode}) {

  const buttonStyles: string = "px-4 py-1 rounded-xl transition-all duration-300 hover:bg-darkOrange hover:text-cosmicLatte hover:font-bold"

  return (
    <context.Provider value={{buttonStyles}}>
      {children}
    </context.Provider>
  )
}

export const useContextStyles = () => {return useContext(context)}