import { ChevronDown } from "lucide-react";

export function FilterBy () {
  
  return (
    <div className="w-[330px] h-fit border-2 border-black border-opacity-20 rounded-xl px-8 pt-3 pb-8">
          <button className="w-full flex justify-between items-center border-b border-b-black border-opacity-30 py-4">
            <h1 className="text-xl"> Marca </h1>
            <ChevronDown color="orange" strokeWidth={2.3} size={25} />
          </button>

          <button className="w-full flex justify-between items-center border-b border-b-black border-opacity-30 py-4">
            <h1 className="text-xl"> Precio </h1>
            <ChevronDown color="orange" strokeWidth={2.3} size={25} />
          </button>

          <button className="w-full flex justify-between items-center border-b border-b-black border-opacity-30 py-4">
            <h1 className="text-xl"> Memoria </h1>
            <ChevronDown color="orange" strokeWidth={2.3} size={25} />
          </button>

          <button className="w-full flex justify-between items-center border-b border-b-black border-opacity-30 py-4">
            <h1 className="text-xl"> Camara </h1>
            <ChevronDown color="orange" strokeWidth={2.3} size={25} />
          </button>

          <button className="w-full flex justify-between items-center border-b border-b-black border-opacity-30 py-4">
            <h1 className="text-xl"> Pantalla </h1>
            <ChevronDown color="orange" strokeWidth={2.3} size={25} />
          </button>

          <button className="w-full flex justify-between items-center border-b border-b-black border-opacity-30 py-4">
            <h1 className="text-xl"> Descuentos </h1>
            <ChevronDown color="orange" strokeWidth={2.3} size={25} />
          </button>
        </div>
  )
}