import { SearchIcon } from "lucide-react";
import { allPhones } from "../data/phones";
import { useEffect, useState } from "react";
import { IconConfusedPhone } from "./IconConfusedPhone";
import { useCustomContext } from "../context/Context";

export function Search() {

  const [textSearch, setTextSearch] = useState('')
  const [filteredPhones, setFilteredPhones] = useState(allPhones)
  const {setModalSearch} = useCustomContext()
  
  function filterPhones () {
    setFilteredPhones(allPhones.filter(
      phone => phone.name?.toLowerCase().includes(textSearch.toLowerCase().trim())
      ))
  }

  useEffect(filterPhones, [textSearch])

  return (
    <section onClick={() => {setModalSearch(false)}} className="h-svh pt-[70px] flex justify-center max-lg:items-center">
      <div onClick={(e) => {e.stopPropagation()}} className="bg-white max-lg:w-[95%] lg:w-[700px] h-[450px] rounded-b-2xl max-lg:rounded-t-2xl flex flex-col items-center p-4 gap-8">
        <div className="w-[90%] min-h-12 h-12 border-2 border-black border-opacity-60 rounded-2xl flex justify-between items-center px-5">
          <input className="w-4/5 bg-transparent outline-none font-semibold text-lg placeholder:text-black placeholder:opacity-60"
            type="text"
            autoComplete="off"
            spellCheck={false}
            value={textSearch}
            onChange={(event) => { setTextSearch(event.target.value) }}
            placeholder="Que telefono buscas?" />

          <SearchIcon />
        </div>

        <div className="w-[90%] h-full flex justify-center flex-wrap overflow-auto scrollbar-none gap-5">
          {filteredPhones.length > 0 ? filteredPhones.slice(0, 10).map((phone, index) => {
    
            const url = `/phones/${phone.name?.replace(/ /g, "-")}.webp`
            return (
              <div key={index} className={`animate-fadeIn flex flex-col items-center bg-gray-200 p-3 rounded-2xl w-fit h-fit transition-all duration-300`}>
                <img src={url} alt="phone" className="min-w-[100px] max-w-[100px] min-h-[130px] max-h-[130px] z-[10]" loading="lazy"/>
                <h1 className="text-center font-semibold mt-3 text-sm"> {phone.name?.slice(0, 14)} </h1>
              </div>
            )})
            : 
            <div className="animate-fadeIn flex items-center justify-center -ml-10">
              <IconConfusedPhone className="scale-50" />
              <h1 className="font-extrabold text-xl text-center -ml-16"> No se encontraron <br /> referencias </h1>
            </div>
          }
        </div>
      </div>
    </section>
  )
}