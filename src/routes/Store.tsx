import { ChevronLeft, ChevronRight} from "lucide-react";
import { CardPhoneStore } from "../components/store/CardPhoneStore";
import { OrderBy } from "../components/store/OrderBy";
import { FilterButton } from "../components/store/FilterButton";
import { useEffect, useState } from "react";
import { allPhones } from "../data/phones";
import { Phone } from "../types";
import { useCustomContext } from "../context/Context";

export function Store() {

  // ejecutamos el metodo sort con una funcion que retorna numeros aleatorios para que el arreglo se desordene
  const [phones, setPhones] = useState(allPhones.sort(() => {return Math.random() - 0.5}))
  const {filterStore, orderBy} = useCustomContext()

  function filter () {
    const phonesFiltered = phones.filter((phone) => {
      if (compareObjects(phone, filterStore)){
        return phone
      }
    })

    setPhones(phonesFiltered)
  }

  function compareObjects (first: Phone, second: Phone): boolean {
    const objectKeys = Object.keys(first) //Obtenemos un arreglo de strings con los nombres de cada atributo del objeto

    for (const key of objectKeys){ // Comparamos las propiedades de los objetos, si son iguales retorna true
      if (second[key as keyof Phone] !== null) { // Hacemos que solo compare las propiedades que no son null
        if (first[key as keyof Phone] !== second[key as keyof Phone]) {
          return false // Si alguna propiedad no es igual retornamos false
        }
      }
    }
    // si todas las propiedades son iguales o el objeto second es null retornamos true
    return true
  }

  function order () {
    const arrayPhones = phones.slice()
    arrayPhones.sort((first, second) => {
      if (first.price != null && second.price != null) { // comprobamos que los precios no sean nulos
        if (orderBy == 'heighestPrice') { // si es esta opcion organizamos de mayor a menor
          return second.price - first.price

        } else if (orderBy == 'lowestPrice'){ // si es esta otra organizamos de menor a mayor
          return first.price - second.price

        } else return Math.random() - 0.5 // si no es ninguna devolvemos valores ramdom
      }

      return 0
    })

    setPhones(arrayPhones)
  }

  useEffect(filter, [filterStore])
  useEffect(order, [orderBy])

  return (
    <section className="w-full">
      <section className="w-full flex justify-center mt-16 items-center gap-20">
        <img src="/mainStore.png" alt="" className="w-[580px] rounded-xl" />

        <div>
          <h3 className="text-darkOrange text-2xl font-semibold text-center mb-3 animate-bounce"> ¡No esperes más! </h3>
          <h1 className="text-smokyBlack text-5xl font-semibold text-center mb-5"> Encuentra tu nuevo <br /> smartphone aqui</h1>
          <h3 className="text-xl text-center"> En nuestro catálogo esta el celular que tanto <br /> habías soñado </h3>
        </div>
      </section>

      <section className="w-full px-14 my-20 flex justify-between gap-10 mb-10">
        <section className="w-full ">
          <div className="w-full flex justify-between items-center">

            <div className="flex items-center gap-4">
              <OrderBy/>
              <FilterButton/>
            </div>

            <div className="flex items-center gap-3">
              <ChevronLeft />
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 1 </button>
              <button className="font-semibold hover:opacity-100 bg-darkOrange rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 2 </button>
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 3 </button>
              <button className="font-semibold hover:opacity-100 opacity-60 rounded-full h-8 w-8 flex items-center justify-center transition-all duration-300"> 4 </button>
              <ChevronRight />
            </div>
          </div>

          <div className="w-full mt-8 flex flex-wrap gap-4">
            {phones.map((phone, index) => {
              return <CardPhoneStore key={index} phone={phone}/>
            })}

            <div className="flex items-center justify-center gap-3 mt-5 w-full">
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