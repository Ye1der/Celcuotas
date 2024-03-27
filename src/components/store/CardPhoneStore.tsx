import { Check, Plus } from "lucide-react";
import { Phone } from "../../types";
import { useState } from "react";
import { useCustomContext } from "../../context/Context";

interface Props {
  phone: Phone
}

export function CardPhoneStore({ phone }: Props) {
  const [check, setCheck] = useState(false)
  const {reloadStorage} = useCustomContext()

  function addShoppingCart () {
    console.log("paso");

    const data = localStorage.getItem('cartPhones')

    if (data) {
      const cartPhones: Phone[] = JSON.parse(data)
      const thisPhoneExist = cartPhones.some((obj) => obj.name === phone.name)
      if (!thisPhoneExist) cartPhones.push(phone)
      localStorage.setItem('cartPhones', JSON.stringify(cartPhones))

    } else {
      localStorage.setItem('cartPhones', JSON.stringify([phone]))
    }

    setCheck(true)
    setTimeout(() => {setCheck(false)}, 1000)
    reloadStorage()
  }

  return (
    <div className="animate-fadeIn hover:scale-[105%] cursor-pointer w-[280px] h-[370px] bg-gray-200 rounded-2xl flex flex-col items-center justify-center px-7 gap-3 relative transition-all duration-300">

      <button onClick={addShoppingCart} className={`${!check ? 'hover:rotate-90' : ''} text-white bg-darkOrange rounded-full p-[2px] absolute top-3 right-3 transition-transform duration-300`}> 
        {!check ?
          <Plus className="animate-scaleOp" strokeWidth={2.4} />
          :
          <Check className="animate-scaleOp" strokeWidth={2.4}/>
        }
      </button>

      <img className="h-[200px] select-none" src={`/phones/${phone.name?.replace(/ /g, "-")}.webp`} alt="phone" loading="lazy"/>
      <div className="w-full">
        <h4 className="font-semibold text-md opacity-60"> {phone.brand} </h4>
        <h1 className="font-semibold text-xl"> {phone.name} </h1>
        <h3 className="text-xl mt-2"> $ {phone.price?.toLocaleString('es-CO')} COP</h3>
      </div>
    </div>
  )
}