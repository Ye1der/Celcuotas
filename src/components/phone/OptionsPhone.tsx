import { useState } from "react"
import { Check, ShoppingCartIcon } from "lucide-react"
import { type Phone } from "../../types"
import { useCustomContext } from "../../context/Context"

export function OptionsPhone({ phone }: { phone: Phone }) {
  const [colorOption, setColorOption] = useState(1)
  const [check, setCheck] = useState(false)
  const [storageOption, setStorageOption] = useState(false)
  const { reloadStorage } = useCustomContext()

  function addShoppingCart() {
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
    setTimeout(() => { setCheck(false) }, 1000)
    reloadStorage()
  }

  return (
    <section className="max-sm:scale-75 max-sm:-my-10 h-[480px] w-[450px] bg-black bg-opacity-[5%] rounded-2xl p-8 relative">
      {/* <button className={`${check ? 'bg-darkOrange text-white' : ''} group flex gap-2 py-1 px-3 rounded-full font-semibold absolute right-3 top-3 max-sm:right-0 max-sm:top-2 hover:bg-darkOrange hover:text-white cursor-pointer transition-all duration-300`}>
        {!check ?
          <ShoppingCartIcon className="animate-scaleOp" size={22} strokeWidth={2.5} />
          :
          <Check className="animate-scaleOp" />
        }
        <span className={`${check ? 'w-[150px] scale-x-100 opacity-100' : ''} text-white opacity-0 text-nowrap w-0 scale-x-0 group-hover:opacity-100 group-hover:w-[150px] group-hover:scale-x-100 transition-all duration-300 select-none`}> Agregar al carrito </span>
      </button> */}

      <h2 className="text-lg font-semibold text-opacity-70 text-black"> {phone?.brand} </h2>
      <h1 className="text-2xl font-semibold"> {phone?.name} </h1>

      <div className="flex w-full mt-7">
        <div className="w-1/2 flex flex-col gap-3 border-r-2 border-black border-opacity-40 ">
          <h1 className="font-semibold text-black text-opacity-80"> Capacidad </h1>

          <div className="flex gap-3">
            <button onClick={() => { setStorageOption(!storageOption) }} className={`${!storageOption ? 'bg-darkOrange text-white' : 'text-darkOrange'} hover:bg-darkOrange hover:text-white text-sm py-[1px] font-semibold px-3 border-2 border-darkOrange rounded-full transition-colors duration-300`}>
              {phone?.storage} GB
            </button>

            <button onClick={() => { setStorageOption(!storageOption) }} className={`${storageOption ? 'bg-darkOrange text-white' : 'text-darkOrange'} hover:bg-darkOrange hover:text-white text-sm py-[1px] font-semibold px-3 border-2 border-darkOrange rounded-full transition-colors duration-300`}>
              {phone?.storage! * 2} GB
            </button>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-[9px] pl-8">
          <h1 className="font-semibold text-black text-opacity-80"> Color </h1>

          <div className="flex pl-1 gap-2">
            <div onClick={() => { setColorOption(1) }} className={`${colorOption === 1 ? 'border-darkOrange' : 'border-transparent'} w-8 h-8 cursor-pointer rounded-full border-[3px] hover:border-darkOrange p-[1px] transition-colors duration-300`}>
              <button className="w-full h-full bg-black rounded-full"></button>
            </div>

            <div onClick={() => { setColorOption(2) }} className={`${colorOption === 2 ? 'border-darkOrange' : 'border-transparent'} w-8 h-8 cursor-pointer rounded-full border-[3px] hover:border-darkOrange p-[1px] transition-colors duration-300`}>
              <button className="w-full h-full bg-blue-900 rounded-full"></button>
            </div>

            <div onClick={() => { setColorOption(3) }} className={`${colorOption === 3 ? 'border-darkOrange' : 'border-transparent'} w-8 h-8 cursor-pointer rounded-full border-[3px] hover:border-darkOrange p-[1px] transition-colors duration-300`}>
              <button className="w-full h-full bg-gray-800 rounded-full"></button>
            </div>

            <div onClick={() => { setColorOption(4) }} className={`${colorOption === 4 ? 'border-darkOrange' : 'border-transparent'} w-8 h-8 cursor-pointer rounded-full border-[3px] hover:border-darkOrange p-[1px] transition-colors duration-300`}>
              <button className="w-full h-full bg-red-900 rounded-full"></button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-black text-opacity-80 mt-8"> Desde </h1>
      <h1 className="font-semibold text-black text-2xl mt-1"> $ {phone?.price?.toLocaleString('col')} COP</h1>

      <h1 className="font-semibold text-black text-opacity-80 mt-8"> Paga con </h1>
      <div className="flex gap-4 mt-1 items-center">
        <img src="/visa.webp" alt="" className="h-[14px]" />
        <img src="/mercadoPago.webp" alt="" className="h-[27px]" />
        <img src="/mastercard.webp" alt="" className="h-[22px]" />
        <img src="/paypal.webp" alt="" className="h-[20px]" />
      </div>

      <div className="w-full flex justify-center">
        <button onClick={addShoppingCart} className="hover:shadow-orange flex items-center gap-2 px-4 py-1 bg-darkOrange rounded-full text-lg text-white font-semibold absolute bottom-7 transition-shadow duration-300">
          Agregar al carrito

          {!check ?
            <ShoppingCartIcon size={20} className="animate-scaleOp" />
            :
            <Check size={20} className="animate-scaleOp" />
          }
        </button>
      </div>
    </section>
  )
}