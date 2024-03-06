import { ChevronDown } from "lucide-react";

export function Store() {
  return (
    <section className="w-full">
      <section className="w-full flex justify-center mt-16 items-center gap-20">
        <div className="w-[580px] h-[380px] bg-gray-400 rounded-xl">

        </div>
        <div>
          <h3 className="text-darkOrange text-2xl font-semibold text-center mb-3"> ¡No esperes más! </h3>
          <h1 className="text-smokyBlack text-5xl font-semibold text-center mb-5"> Encuentra tu nuevo <br /> smartphone aqui</h1>
          <h3 className="text-xl text-center"> En nuestro catálogo esta el celular que tanto <br /> habías soñado </h3>
        </div>
      </section>

      <section className="w-full px-14 my-20">
        <div className="w-[330px] border-2 border-black border-opacity-20 rounded-xl px-8 pt-3 pb-8">
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
      </section>
    </section>
  )
}