import {ChevronLeft, ChevronRight } from "lucide-react";
import { CardPhoneStore } from "../components/store/CardPhoneStore";
import { OrderBy } from "../components/store/OrderBy";
import { FilterBy } from "../components/store/FilterBy";

export function Store() {


  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <section className="w-full">
      <section className="w-full flex justify-center mt-16 items-center gap-20">
        <img src="/mainStore.png" alt="" className="w-[580px] rounded-xl" />

        <div>
          <h3 className="text-darkOrange text-2xl font-semibold text-center mb-3"> ¡No esperes más! </h3>
          <h1 className="text-smokyBlack text-5xl font-semibold text-center mb-5"> Encuentra tu nuevo <br /> smartphone aqui</h1>
          <h3 className="text-xl text-center"> En nuestro catálogo esta el celular que tanto <br /> habías soñado </h3>
        </div>
      </section>

      <section className="w-full px-14 my-20 flex justify-between gap-10 mb-10">
        
        <FilterBy/>

        <section className="w-full ">
          <div className="w-full flex justify-between items-center">

            <OrderBy/>

            <div className="flex items-center gap-3">
              <ChevronLeft />
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 1 </button>
              <button className="font-semibold hover:opacity-100 bg-darkOrange rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 2 </button>
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 3 </button>
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 4 </button>
              <ChevronRight />
            </div>
          </div>

          <div className="w-full mt-8 flex flex-wrap gap-4 justify-center">
            {array.map((_, index) => {
              return <CardPhoneStore key={index}/>
            })}

            <div className="flex items-center gap-3 mt-5">
              <ChevronLeft />
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 1 </button>
              <button className="font-semibold hover:opacity-100 bg-darkOrange rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 2 </button>
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 3 </button>
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 4 </button>
              <ChevronRight />
            </div>
          </div>

        </section>
      </section>
    </section>
  )
}