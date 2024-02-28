import { Search } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import { User } from "lucide-react"
import { Globe } from "lucide-react"

export function NavBar() {

  const buttonStyles = "px-4 py-1 rounded-xl transition-all duration-300 hover:bg-darkOrange hover:text-cosmicLatte hover:font-bold"

  return (
    <section className="bg-cosmicLatte h-[70px] w-full flex justify-between absolute top-0">
      <div className="flex h-full items-center gap-8 font-semibold text-lg">
        <img src="/logo.svg" alt="Logo" className="w-36 mr-10 ml-10" />
        <a href="" className={`${buttonStyles}`}>
          Tienda
        </a>

        <a href="" className={`${buttonStyles}`}>
          Servicios
        </a>

        <a href="" className={`${buttonStyles}`}>
          Nuestra marca
        </a>
      </div>

      <div className="flex h-full items-center gap-8 pr-10">
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
  )
}