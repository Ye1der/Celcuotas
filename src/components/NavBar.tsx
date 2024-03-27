import { AlignLeft, Search, X } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import { User } from "lucide-react"
import { useEffect, useState } from "react"
import { useCustomContext } from "../context/Context"

interface Props {
  modalSearch: boolean
  setModalSearch: (param: boolean) => void
}

export function NavBar({ setModalSearch, modalSearch }: Props) {

  const {showBar, setShowBar} = useCustomContext()
  const buttonStyles = "px-4 py-1 rounded-xl transition-all duration-300 hover:bg-darkOrange hover:text-cosmicLatte"

  const [zIndex, setZIndex] = useState('')

  useEffect(() => { // espera a que el modal se esconda para bajar el zindex, asi evita que parpadee
    if (modalSearch) setZIndex('z-10')
    else setTimeout(() => { setZIndex('') }, 300)
  }, [modalSearch])

  return (
    <>
      <button onClick={() => { setShowBar(!showBar) }} className="lg:hidden absolute right-5 top-5 hover:text-darkOrange transition-all duration-300 z-40">
        {showBar ? <X className="icon" strokeWidth={2.3} size={27} /> : <AlignLeft className="icon" strokeWidth={2.3} size={27} />}
      </button>

      <section className={`${zIndex} bg-cosmicLatte h-[70px] lg:w-full flex lg:justify-between absolute top-0 transition-all duration-300 ${showBar ? 'max-lg:left-0' : 'max-lg:-left-full'} max-lg:flex-col max-lg:items-center max-lg:h-svh max-lg:w-fit max-lg:z-40 max-lg:py-10 max-lg:justify-between`}>
        <div className="flex lg:h-full items-center gap-8 font-semibold text-lg max-lg:flex-col">
          <a href="/">
            <img src="/logo.svg" alt="Logo" className="w-36 mr-10 ml-10 max-lg:mb-10" />
          </a>

          <a href="/store" className={`${buttonStyles} ${window.location.pathname.includes('store') ? 'bg-darkOrange text-white' : ''}`}>
            Tienda
          </a>

          <a href="" className={`${buttonStyles}`}>
            Nuestra marca
          </a>

          <a href="" className={`${buttonStyles}`}>
            Servicios
          </a>
        </div>

        <div className="flex lg:h-full items-center gap-5 lg:pr-10 max-lg:justify-center max-lg:mb-5">
          <button className={`${modalSearch ? 'bg-darkOrange text-white' : ''} hover:bg-darkOrange hover:text-white p-2 rounded-full transition-colors duration-300`}
          onClick={() => { setModalSearch(!modalSearch); setShowBar(false); }}>
            <Search size={22} strokeWidth={2.4} />
          </button>

          <a href="/shoppingCart" className={` ${window.location.pathname.includes('shoppingCart') ? 'bg-darkOrange text-white' : ''} hover:bg-darkOrange hover:text-white p-2 rounded-full transition-colors duration-300`}>
            <ShoppingCart size={22} strokeWidth={2.4} />
          </a>

          <button className="p-2 rounded-full">
            <User size={22} strokeWidth={2.4} />
          </button>
        </div>
      </section>
    </>
  )
}