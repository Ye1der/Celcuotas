import { FilterX, ListFilter, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FilterAccordion } from "./FilterAccordion";
import { useCustomContext } from "../../context/Context";
import { Phone } from "../../types";

interface Props {
  closeModal: () => void
}

export function FilterBy({ closeModal }: Props) {

  const {filterStore, setFilterStore} = useCustomContext() // el filtro que se aplica
  const [accordion, setAccordion] = useState('') // indica que parte debe de expandirse
  const [filterObject, setFilterObject] = useState(filterStore) // para ir construyendo el filtro antes de filtrar
  
  type defaultTitlesFilter = {
    brand: 'Marca', 
    storage: 'Almacenamiento', 
    cameraMpx: 'Cámara', 
    screenSize: 'Pantalla',
    ram: 'Ram'
  }
  
  let defaultTitles: defaultTitlesFilter = {
    brand: 'Marca', 
    storage: 'Almacenamiento', 
    cameraMpx: 'Cámara', 
    screenSize: 'Pantalla',
    ram: 'Ram'
  }

  const [titles, setTitles] = useState(defaultTitles) // lo titulos de las opciones cambian dependiendo de la aopcion elegida

  useEffect(() => {
    setAccordion('')
  }, [closeModal])

  function filter () { // funcion que cambia el valor de filterStore por el filtro costruido
    setFilterStore(filterObject) // cuando filterStore cambia se ejecuta un useEffect en Store.jsx
    closeModal()
  }

  function clearFilter () {
    let objectClean: Phone = {
      batteryCapacity: null,
      brand: null,
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
    }

    setTitles(defaultTitles)
    setFilterStore(objectClean)
    setFilterObject(objectClean)

    closeModal()
  }

  function selectOption (value: any, option: keyof Phone) {
    setFilterObject({...filterObject, [option]: value}) // agrega un valor a una propiedad del objectFilter
  
    const unit = option == 'storage' || option == 'ram' ? 'GB' : option == 'cameraMpx' ? 'Mpx' : option == 'screenSize' ? '"' : ""
    setTitles({...titles, [option]: `${value ? value : defaultTitles[option as keyof defaultTitlesFilter]} ${value ? unit : ''}`}) // cambia el titulo de la opcion

    setAccordion('') // cierra el acordeon
  }

  return (
    <div className="w-[330px] relative h-fit bg-[#fafafa] rounded-2xl px-8 pt-3 pb-8">

      <div className="w-full flex justify-end h-7 ">
        <button onClick={closeModal} className="p-1 rounded-full  hover:rotate-90 transition-all duration-300 absolute right-3 bg-cosmicLatte">
          <X size={17} />
        </button>
      </div>

      <FilterAccordion category="Marca" title={titles.brand} setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden grid grid-cols-2 px-3 pt-2 gap-1">
          <button onClick={() => {selectOption(null, 'brand')}} className="text-left text-darkOrange"> Todas </button>
          <button onClick={() => {selectOption('Samsung', 'brand')}} className="text-left"> Samsung </button>
          <button onClick={() => {selectOption('Xiaomi', 'brand')}} className="text-left"> Xiaomi </button>
          <button onClick={() => {selectOption('Huawei', 'brand')}} className="text-left"> Huawei </button>
          <button onClick={() => {selectOption('Apple', 'brand')}} className="text-left"> Apple </button>
          <button onClick={() => {selectOption('Motorola', 'brand')}} className="text-left"> Motorola </button>
          <button onClick={() => {selectOption('Vivo', 'brand')}} className="text-left"> Vivo </button>
          <button onClick={() => {selectOption('Google', 'brand')}} className="text-left"> Google </button>
          <button onClick={() => {selectOption('Honor', 'brand')}} className="text-left"> Honor </button>
          <button onClick={() => {selectOption('OnePlus', 'brand')}} className="text-left"> One Plus </button>
        </div>
      </FilterAccordion>

      <FilterAccordion category="Almacenamiento" title={titles.storage} setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden grid grid-cols-2 px-3 pt-2 gap-1">
          <button onClick={() => {selectOption(null, 'storage')}} className="text-left text-darkOrange"> Todos </button>
          <button onClick={() => {selectOption(32, 'storage')}} className="text-left"> 32 GB </button>
          <button onClick={() => {selectOption(64, 'storage')}} className="text-left"> 64 GB </button>
          <button onClick={() => {selectOption(128, 'storage')}} className="text-left"> 128 GB </button>
          <button onClick={() => {selectOption(256, 'storage')}} className="text-left"> 256 GB </button>
          <button onClick={() => {selectOption(512, 'storage')}} className="text-left"> 512 GB </button>
        </div>
      </FilterAccordion>

      <FilterAccordion category="Ram" title={titles.ram} setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden grid grid-cols-2 px-3 pt-2 gap-1">
          <button onClick={() => {selectOption(null, 'ram')}} className="text-left text-darkOrange"> Todas </button>
          <button onClick={() => {selectOption(2, 'ram')}} className="text-left"> 2 GB </button>
          <button onClick={() => {selectOption(3, 'ram')}} className="text-left"> 3 GB </button>
          <button onClick={() => {selectOption(4, 'ram')}} className="text-left"> 4 GB </button>
          <button onClick={() => {selectOption(6, 'ram')}} className="text-left"> 6 GB </button>
          <button onClick={() => {selectOption(8, 'ram')}} className="text-left"> 8 GB </button>
          <button onClick={() => {selectOption(12, 'ram')}} className="text-left"> 12 GB </button>
        </div>
      </FilterAccordion>

      <FilterAccordion category="Cámara" title={titles.cameraMpx} setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden grid grid-cols-2 px-3 pt-2 gap-1">
          <button onClick={() => {selectOption(null, 'cameraMpx')}} className="text-left text-darkOrange"> Todos </button>
          <button onClick={() => {selectOption(12, 'cameraMpx')}} className="text-left"> 12 MPX </button>
          <button onClick={() => {selectOption(13, 'cameraMpx')}} className="text-left"> 13 MPX </button>
          <button onClick={() => {selectOption(16, 'cameraMpx')}} className="text-left"> 16 MPX </button>
          <button onClick={() => {selectOption(48, 'cameraMpx')}} className="text-left"> 48 MPX </button>
          <button onClick={() => {selectOption(50, 'cameraMpx')}} className="text-left"> 50 MPX </button>
          <button onClick={() => {selectOption(64, 'cameraMpx')}} className="text-left"> 64 MPX </button>
          <button onClick={() => {selectOption(108, 'cameraMpx')}} className="text-left"> 108 MPX </button>
        </div>
      </FilterAccordion>

      <div className="w-full flex justify-center mt-8 gap-8">
        <button onClick={clearFilter} className="flex w-fit items-center justify-center gap-2 px-3 py-1 rounded-xl bg-gray-200 opacity-80 hover:opacity-100 transition-all duration-300">
          <h1 className="font-semibold"> Limpiar </h1>
          <FilterX size={19} />
        </button>

        <button onClick={filter} className="flex w-fit items-center justify-center gap-2 px-3 py-1 rounded-xl  bg-darkOrange opacity-80 text-white hover:opacity-100 transition-all duration-300">
          <h1 className="font-semibold"> Filtrar </h1>
          <ListFilter size={20} />
        </button>
      </div>
    </div>
  )
}