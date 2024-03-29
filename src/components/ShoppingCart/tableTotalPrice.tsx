import { useEffect, useState } from "react"
import { Phone } from "../../types"
import { useCustomContext } from "../../context/Context"

export function TableTotalPrice () {

  const [priceSend] = useState(Math.round(Math.random() * 10000))
  const [subTotalPrice, setSubToltalPrice] = useState(0)
  const {listenStorage} = useCustomContext()

  useEffect(() => {
    console.log("paso");
    
    const result = localStorage.getItem('cartPhones')
    if (!result) return

    var fullPrice = 0
    const cartPhones: Phone[] = JSON.parse(result)

    for (let phone of cartPhones ) {
      fullPrice += phone.price ?? 0
    }

    setSubToltalPrice(fullPrice)
  }, [listenStorage])

  return (
    <div className="w-[350px] shadow-around bg-[#FAFAFA] p-6 rounded-xl lg:mt-[119px] text-xl select-none">
      <span className="flex flex-wrap justify-between w-full mb-1" role="subtotalPrice">
        <h1 className="font-bold"> Subtotal </h1>
        <h1 className="font-semibold opacity-70"> $ {subTotalPrice.toLocaleString('col')} COP </h1>
      </span>

      <span className="flex flex-wrap justify-between w-full mb-1 gap-10" role="sendPrice">
        <h1 className="font-bold"> Envio </h1>
        <h1 className="font-semibold opacity-70"> $ {priceSend.toLocaleString('col')} COP </h1>
      </span>

      <hr className="mx-auto my-3 border border-black rounded-full border-opacity-70" />

      <span className="flex flex-wrap justify-between w-full mb-1 gap-10" role="total">
        <h1 className="font-bold"> Total </h1>
        <h1 className="font-semibold opacity-70"> $ {(priceSend + subTotalPrice).toLocaleString('col')} COP</h1>
      </span>
    </div>
  )
}