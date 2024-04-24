import { useParams } from "react-router-dom"
import { type Phone } from "../types"
import { OptionsPhone } from "../components/phone/OptionsPhone"
import { PhoneSpecifications } from "../components/phone/PhoneSpecifications"
import { allPhones } from "../data/phones"
import { useRedirect } from "../components/customHooks/useRedirect"
import { useState } from "react"

export default function Phone() {
  const { namePhone } = useParams()
  const phone = allPhones.find(phone => phone.name === namePhone?.replace(/-/g, ' '))
  const redirect = useRedirect()
  const [phonesRecomended] = useState(allPhones.filter(element => element.brand === phone?.brand).sort(() => Math.random() - 0.5).slice(0, 6))

  return (
    <section className="w-full min-h-svh flex flex-col items-center pt-14">
      <div className="flex flex-wrap justify-center items-center w-fit h-fit gap-3 sm:gap-14 mb-5">
        <img src={`/phones/${namePhone}.webp`} alt="Phone" className="max-sm:h-[300px] h-[400px]" />
        <OptionsPhone phone={phone ?? {} as Phone} />
      </div>

      <PhoneSpecifications phone={phone ?? {} as Phone} />

      <h1 className="text-4xl font-semibold text-smokyBlack text-opacity-[85%] mt-10 mb-14 text-center"> Tambien te podrian interezar </h1>
      <div className="flex flex-wrap gap-x-14 gap-y-[70px] mb-16 justify-center">
        {phonesRecomended.map((phoneObj, index) => {
          const url = `/phones/${phoneObj.name?.replace(/ /g, "-")}.webp`
          if (phoneObj.name != phone?.name) return (
            <div onClick={() => { redirect(phoneObj.name!) }}
              key={index} className={`hover:bg-gray-300 cursor-pointer animate-fadeIn flex flex-col items-center bg-gray-200 p-3 rounded-2xl scale-125 w-fit h-fit transition-all duration-300`}>
              <img src={url} alt="phone" className="min-w-[100px] max-w-[100px] min-h-[130px] max-h-[130px] z-[10]" loading="lazy" />
              <h1 className="text-center font-semibold mt-3 text-sm"> {phoneObj.name?.slice(0, 14)} </h1>
            </div>
          )
        })}
      </div>
    </section>
  )
}