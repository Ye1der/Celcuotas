import { AlignLeft, Search, X } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import { User } from "lucide-react"
import { Globe } from "lucide-react"
import './NavBar.css'
import { useState } from "react"

export function NavBar() {

  const [showBar, setShowBar] = useState(false)
  const buttonStyles = "px-4 py-1 rounded-xl transition-all duration-300 hover:bg-darkOrange hover:text-cosmicLatte"

  return (
    <>
      <button onClick={() => { setShowBar(!showBar) }} className="lg:hidden absolute right-5 top-5 hover:text-darkOrange transition-all duration-300 z-40">
        {showBar ? <X className="icon" strokeWidth={2.3} size={27} /> : <AlignLeft className="icon" strokeWidth={2.3} size={27} />}
      </button>

      <section className={`bg-cosmicLatte h-[70px] lg:w-full flex lg:justify-between absolute top-0 transition-all duration-300 max-lg:${showBar ? '-left-0' : '-left-full'} max-lg:flex-col max-lg:items-center max-lg:h-svh max-lg:w-fit max-lg:z-40 max-lg:py-10 max-lg:justify-between`}>
        <div className="flex lg:h-full items-center gap-8 font-semibold text-lg max-lg:flex-col">
          <a href="/">
            <img src="/logo.svg" alt="Logo" className="w-36 mr-10 ml-10 max-lg:mb-10" />
          </a>
          
          <a href="/store" className={`${buttonStyles}`}>
            Tienda
          </a>

          <a href="" className={`${buttonStyles}`}>
            Nuestra marca
          </a>

          <a href="" className={`${buttonStyles}`}>
            Servicios
          </a>
        </div>

        <div className="flex lg:h-full items-center gap-8 lg:pr-10 max-lg:justify-center max-lg:mb-5">
          <button>
            <Search size={22} strokeWidth={2.4} />
          </button>

          <button>
            <ShoppingCart size={22} strokeWidth={2.4} />
          </button>

          <button>
            <User size={22} strokeWidth={2.4} />
          </button>

          <button>
            <Globe size={22} strokeWidth={2.4} />
          </button>
        </div>
      </section>
    </>
  )
}