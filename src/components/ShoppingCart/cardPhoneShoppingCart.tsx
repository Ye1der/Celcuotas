import { Check, Minus, Plus, Trash2 } from "lucide-react";
import { Phone } from "../../types";
import { useEffect, useState } from "react";
import { useCustomContext } from "../../context/Context";
import { allPhones } from "../../data/phones";
import { useRedirect } from "../customHooks/useRedirect";

export function CardPhoneShoppingCart ({phone}: {phone: Phone}) {
  const [check, setCheck] = useState(false)
  const {reloadStorage} = useCustomContext()

  const getOriginPhone = () => {
    for (let element of allPhones) {
      if (element.name === phone.name) {
        return element
      }
    }
    return {} as Phone
  }

  const originPhone = getOriginPhone()

  const [contPhones, setContPhones] = useState(phone.price && originPhone.price ? phone.price / originPhone.price : 1)

  function deletePhone () {
    setCheck(true)

    const result = localStorage.getItem('cartPhones')

    if (result) {
      const cartPhones: Phone[] = JSON.parse(result)
      const cartPhonesFiltered = cartPhones.filter((phoneObj) => phoneObj.name !== phone.name )

      setTimeout(() => {
        setCheck(false)
        localStorage.setItem('cartPhones', JSON.stringify(cartPhonesFiltered))
        reloadStorage()
      }, 800)
    }
  }

  const countPhones = (operator: 'adition' | 'subtraction') => {
    if (operator === 'adition') {
      if (contPhones < 3) setContPhones(prev => prev + 1)
    }

    if (operator === 'subtraction') {
      if (contPhones > 1) setContPhones(prev => prev - 1)
    }
  }

  function changePrice () {
    const result = localStorage.getItem('cartPhones')
    console.log(originPhone);
    
    if (!result) return 

    const cartPhones: Phone[] = JSON.parse(result)
    var thisPhone: Phone | undefined = cartPhones.find(phoneObj => phoneObj.name === phone.name)
    
    if (thisPhone && thisPhone.price && originPhone.price){
      const indexThisPhone = cartPhones.indexOf(thisPhone)
      thisPhone.price = originPhone.price * contPhones
      cartPhones[indexThisPhone] = thisPhone
      localStorage.setItem('cartPhones', JSON.stringify(cartPhones))
      reloadStorage()
    }
  }

  useEffect(changePrice, [contPhones])
  const redirect = useRedirect()

  return (
    <div className="max-sm:shadow-around max-sm:w-[350px] w-[600px] h-[180px] rounded-xl flex items-center px-5 relative mb-10">
      <img onClick={() => {redirect(phone.name!)}} src={`/phones/${phone.name?.replace(/ /g, '-')}.webp`} alt="phone" className="h-[85%] my-auto select-none cursor-pointer" />
      <div className="h-[85%] ml-5 flex max-sm:flex-col max-sm:justify-center max-sm:mb-4 sm:items-center relative w-full">
        <div className="sm:absolute sm:top-0">
          <h1 className="font-semibold text-xl"> {phone.name} </h1>
          <h2 className="font-semibold text-lg opacity-60"> {phone.brand} </h2>
        </div>

        <div className="flex items-center">
          <h2 className="font-semibold opacity-80 text-xl"> $ {phone.price && (phone.price).toLocaleString('col')} COP</h2>
        </div>
      </div>

      <div className="flex items-center gap-5 absolute max-sm:bottom-2 max-sm:right-5 sm:top-1/2 sm:-translate-y-1/2 sm:right-8">
        <Minus onClick={() => {countPhones('subtraction')}} className="cursor-pointer hover:scale-110 transition-all duration-300 bg-darkOrange rounded-full p-[4px]" />
        <h1 className="text-lg font-semibold select-none"> {contPhones} </h1>
        <Plus onClick={() => {countPhones('adition')}} className="cursor-pointer hover:scale-110 transition-all duration-300 bg-darkOrange rounded-full p-[4px]" />
      </div>

      <button onClick={deletePhone} className={`${check ? 'bg-red-500 text-white' : ''} group flex gap-2 py-1 px-3 rounded-full font-semibold absolute right-3 top-3 max-sm:right-0 max-sm:top-2 hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300`}>
        {!check ?
          <Trash2 className="animate-scaleOp" size={22} strokeWidth={2.5}/>
          :
          <Check className="animate-scaleOp"/>
        }
        <span className={`${check ? 'w-[70px] scale-x-100' : ''} text-white w-0 scale-x-0 group-hover:w-[70px] group-hover:scale-x-100 transition-all duration-300 select-none`}> Eliminar </span>
      </button>

    </div>
  )
}