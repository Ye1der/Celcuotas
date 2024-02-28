import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface MyContextType {
  sliderItem: number
  setSliderItem: (newValue: number) => void;
  hideItem: boolean
  setHideItem: (newValue: boolean) => void;
}

const context = createContext<MyContextType>({} as MyContextType)

export function ContextGlbal({ children }: { children: ReactNode }) {

  const [sliderItem, setSliderItem] = useState(0) // es el item en el que se encuentra el slider del dashboard
  const [hideItem, setHideItem] = useState(true)

  return (
    <context.Provider value={{ sliderItem, setSliderItem, hideItem, setHideItem }}>
      {children}
    </context.Provider>
  )
}

export const useCustomContext = () => { return useContext(context) }