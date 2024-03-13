import { FilterX, ListFilter, X } from "lucide-react";
import { useState } from "react";
import { FilterAccordion } from "./FilterAccordion";
import { useCustomContext } from "../../context/Context";
import { Phone } from "../../types";

interface Props {
  closeModal: () => void
}

export function FilterBy({ closeModal }: Props) {

  const {filterStore, setFilterStore} = useCustomContext()
  const [accordion, setAccordion] = useState('')
  const [filterObject, setFilterObject] = useState(filterStore)

  function filter () {
    setFilterStore(filterObject)
  }

  function clearFilter () {
    let objectClean = filterObject

    for (let key in objectClean) {
      objectClean[key as keyof Phone] = null
    }

    setFilterStore(objectClean)
  }

  function selectOption (value: any, option: keyof Phone) {
    setFilterObject({...filterObject, [option]: value})
  }

  return (
    <div className="w-[330px] h-fit bg-[#fafafa] rounded-2xl px-8 pt-3 pb-8">

      <div className="w-full flex justify-end h-7 ">
        <button onClick={closeModal} className="p-1 rounded-full  hover:rotate-90 transition-all duration-300 absolute right-3 bg-cosmicLatte">
          <X size={15} />
        </button>
      </div>

      <FilterAccordion title="Marca" setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden flex flex-col px-3 pt-2 gap-1">
          <button onClick={() => {selectOption('Samsung', 'brand')}} className="text-left"> Samsung </button>
          <button onClick={() => {selectOption('Xiaomi', 'brand')}} className="text-left"> Xiaomi </button>
          <button onClick={() => {selectOption('Huawei', 'brand')}} className="text-left"> Huawei </button>
          <button onClick={() => {selectOption('Apple', 'brand')}} className="text-left"> Apple </button>
          <button onClick={() => {selectOption('Motorola', 'brand')}} className="text-left"> Motorola </button>
          <button onClick={() => {selectOption('Vivo', 'brand')}} className="text-left"> Vivo </button>
          <button onClick={() => {selectOption('Google', 'brand')}} className="text-left"> Google </button>
          <button onClick={() => {selectOption('Honor', 'brand')}} className="text-left"> Honor </button>
          <button onClick={() => {selectOption('One PLus', 'brand')}} className="text-left"> One Plus </button>
        </div>
      </FilterAccordion>

      <FilterAccordion title="Almacenamiento" setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden flex flex-col px-3 pt-2 gap-1">
          <button className="text-left"> 32 GB </button>
          <button className="text-left"> 64 GB </button>
          <button className="text-left"> 128 GB </button>
          <button className="text-left"> 256 GB </button>
          <button className="text-left"> 512 GB </button>
          <button className="text-left"> 1 TB </button>
        </div>
      </FilterAccordion>

      <FilterAccordion title="Cámara" setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden flex flex-col px-3 pt-2 gap-1">
          <button className="text-left"> 48 MPX </button>
          <button className="text-left"> 50 MPX </button>
          <button className="text-left"> 64 MPX </button>
          <button className="text-left"> 100 MPX </button>
          <button className="text-left"> 108 MPX </button>
          <button className="text-left"> 200 MPX </button>
        </div>
      </FilterAccordion>

      <FilterAccordion title="Pantalla" setAccordion={setAccordion} accordion={accordion}>
        <div className="overflow-hidden flex flex-col px-3 pt-2 gap-1">
          <button className="text-left"> menos de 6" </button>
          <button className="text-left"> 6 a 6.3" </button>
          <button className="text-left"> 6.4 a 6.7" </button>
          <button className="text-left"> 6.8" o más </button>
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