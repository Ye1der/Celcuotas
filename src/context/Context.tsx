import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import { Phone } from "../types";

interface MyContextType {
  sliderItem: number
  setSliderItem: (newValue: number) => void;
  hideItem: boolean
  setHideItem: (newValue: boolean) => void;
  filterStore: Phone
  setFilterStore: (phone: Phone) => void
  orderBy: 'none' | 'heighestPrice' | 'lowestPrice'
  setOrderBy: (type: 'none' | 'heighestPrice' | 'lowestPrice') => void
  modalSearch: boolean
  setModalSearch: (boolean: boolean) => void
  showBar: boolean
  setShowBar: Dispatch<SetStateAction<boolean>>
  listenStorage: boolean
  reloadStorage: () => void
  modalLogin: boolean
  setModalLogin: (newValue: boolean) => void
}

const context = createContext<MyContextType>({} as MyContextType)

export function ContextGlbal({ children }: { children: ReactNode }) {

  const [sliderItem, setSliderItem] = useState(0) // es el item en el que se encuentra el slider del dashboard
  const [hideItem, setHideItem] = useState(true)
  const [orderBy, setOrderBy] = useState<'none' | 'heighestPrice' | 'lowestPrice'>('none')
  const [modalSearch, setModalSearch] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const [listenStorage, setListenStorage] = useState(false)

  const reloadStorage = () => {
    setListenStorage(!listenStorage)
  }

  const [filterStore, setFilterStore] = useState<Phone>({
    name: null,
    ram: null,
    brand: null,
    batteryCapacity: null,
    cameraMpx: null,
    chargingPortType: null,
    cpu: null,
    fingerprint: null,
    os: null,
    price: null,
    screenSize: null, 
    storage: null
  })

  return (
    <context.Provider value={{ 
      sliderItem, setSliderItem, 
      hideItem, setHideItem, 
      filterStore, setFilterStore, 
      orderBy, setOrderBy, 
      modalSearch, setModalSearch, 
      showBar, setShowBar,
      reloadStorage, listenStorage,
      modalLogin, setModalLogin
    }}>
      {children}
    </context.Provider>
  )
}

export const useCustomContext = () => { return useContext(context) }