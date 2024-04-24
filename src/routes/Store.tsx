import { CardPhoneStore } from "../components/store/CardPhoneStore";
import { OrderBy } from "../components/store/OrderBy";
import { FilterButton } from "../components/store/FilterButton";
import { useEffect, useState } from "react";
import { allPhones } from "../data/phones";
import { Phone } from "../types";
import { useCustomContext } from "../context/Context";
import { IconConfusedPhone } from "../components/IconConfusedPhone";
import { Pagination } from "../components/Pagination";
import { useParams } from "react-router-dom";
import Spline from '@splinetool/react-spline';

export function Store() {

  // ejecutamos el metodo sort con una funcion que retorna numeros aleatorios para que el arreglo se desordene
  const [phones, setPhones] = useState(allPhones.sort(() => { return Math.random() - 0.5 }))
  const { brand } = useParams()
  const { filterStore, orderBy, setFilterStore } = useCustomContext()
  const [page, setPage] = useState(1) // indica la pagina en la paginacion

  useEffect(() => { // Si ya hay un filtro desde la url lo aplica
    if (brand) {
      setFilterStore({
        brand: brand,
        batteryCapacity: null,
        cameraMpx: null,
        chargingPortType: null,
        cpu: null,
        fingerprint: null,
        name: null,
        os: null,
        price: null,
        ram: null,
        screenSize: null,
        storage: null
      })
    } else {
      setFilterStore({
        brand: null,
        batteryCapacity: null,
        cameraMpx: null,
        chargingPortType: null,
        cpu: null,
        fingerprint: null,
        name: null,
        os: null,
        price: null,
        ram: null,
        screenSize: null,
        storage: null
      })
    }
  }, [])

  function filter() {
    const phonesFiltered = allPhones.filter((phone) => {
      if (compareObjects(phone, filterStore)) {
        return phone
      }
    })

    setPage(1)
    setPhones(sort(phonesFiltered)) // le pasamos el arreglo ordenado como el usuario tenga seleccionado
  }

  function compareObjects(first: Phone, second: Phone): boolean {
    const objectKeys = Object.keys(first) //Obtenemos un arreglo de strings con los nombres de cada atributo del objeto

    for (const key of objectKeys) { // Comparamos las propiedades de los objetos, si son iguales retorna true
      if (second[key as keyof Phone] !== null) { // Hacemos que solo compare las propiedades que no son null
        if (first[key as keyof Phone] !== second[key as keyof Phone]) {
          return false // Si alguna propiedad no es igual retornamos false
        }
      }
    }
    // si todas las propiedades son iguales o el objeto second es null retornamos true
    return true
  }

  function sort(array: Phone[]): Phone[] {
    const arrayPhones = Array.from(array)
    arrayPhones.sort((first, second) => {
      if (first.price != null && second.price != null) { // comprobamos que los precios no sean nulos
        if (orderBy == 'heighestPrice') { // si es esta opcion organizamos de mayor a menor
          return second.price - first.price

        } else if (orderBy == 'lowestPrice') { // si es esta otra organizamos de menor a mayor
          return first.price - second.price

        } else return Math.random() - 0.5 // si no es ninguna devolvemos valores ramdom
      }

      return 0
    })

    return arrayPhones
  }

  useEffect(filter, [filterStore, orderBy])

  return (
    <section className="w-full">
      <section className="w-full flex justify-center mt-16 items-center gap-20">
        <Spline scene="https://prod.spline.design/jzOwPFiVMFRzUdQh/scene.splinecode" />

        <div>
          <h3 className="text-darkOrange text-2xl font-semibold text-center mb-3 animate-bounce"> ¡No esperes más! </h3>
          <h1 className="text-smokyBlack text-5xl max-sm:text-4xl font-semibold text-center mb-5"> Encuentra tu nuevo <br /> smartphone aqui</h1>
          <h3 className="text-xl max-sm:text-lg text-center"> En nuestro catálogo esta el celular que tanto <br /> habías soñado </h3>
        </div>
      </section>

      <section className="w-full px-14 my-20 flex justify-between gap-10 mb-10">
        <section className="w-full ">

          <div className="w-full flex max-lg:flex-col gap-10 justify-between items-center">
            <div className="flex items-center gap-4">
              <OrderBy />
              <FilterButton />
            </div>

            <Pagination array={phones} page={page} setPage={setPage} />
          </div>

          <div className={`mt-8 flex justify-center gap-8 flex-wrap`}>
            {phones.length > 0 ?
              // solo renderiza 12 elementos a partir de la pagina en la que este
              phones.slice(12 * (page - 1), 12 + (12 * (page - 1))).map((phone, index) => {
                return <CardPhoneStore key={index} phone={phone} />
              })
              :
              <div className="animate-fadeIn w-full h-full flex flex-wrap justify-center items-center">
                <IconConfusedPhone className="opacity-80 scale-90" />
                <h1 className="text-3xl font-extrabold opacity-80 text-center mb-8 -ml-5 "> No se encontraron <br /> referencias </h1>
              </div>
            }
          </div>

          <div className="w-full flex justify-center mt-10 mb-5">
            <Pagination array={phones} page={page} setPage={setPage} />
          </div>

        </section>
      </section>
    </section>
  )
}