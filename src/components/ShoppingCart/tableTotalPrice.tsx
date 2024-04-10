import { useEffect, useState } from "react"
import { Phone } from "../../types"
import { useCustomContext } from "../../context/Context"

export function TableTotalPrice() {

  const [priceSend] = useState(Math.round(Math.random() * 10000))
  const [subTotalPrice, setSubToltalPrice] = useState(0)
  const { listenStorage } = useCustomContext()

  useEffect(() => {
    const result = localStorage.getItem('cartPhones')
    if (!result) return

    var fullPrice = 0
    const cartPhones: Phone[] = JSON.parse(result)

    for (let phone of cartPhones) {
      fullPrice += phone.price ?? 0
    }

    setSubToltalPrice(fullPrice)
  }, [listenStorage])

  return (
    <div className="w-[350px] border-2 border-black border-opacity-40 p-6 rounded-xl text-xl select-none">
      <span className="flex flex-wrap justify-between w-full mb-1" role="subtotalPrice">
        <h1 className="font-bold"> Subtotal </h1>
        <h1 className="font-semibold opacity-70 text-[18px]"> $ {subTotalPrice.toLocaleString('col')} COP </h1>
      </span>

      <span className="flex flex-wrap justify-between w-full mb-1 gap-10" role="sendPrice">
        <h1 className="font-bold"> Envio </h1>
        <h1 className="font-semibold opacity-70 text-[18px]"> $ {priceSend.toLocaleString('col')} COP </h1>
      </span>

      <hr className="mx-auto my-3 border border-black rounded-full border-opacity-70" />

      <span className="flex flex-wrap justify-between w-full mb-1 gap-10" role="total">
        <h1 className="font-bold"> Total </h1>
        <h1 className="font-semibold opacity-70 text-[18px]"> $ {(priceSend + subTotalPrice).toLocaleString('col')} COP</h1>
      </span>
    </div>
  )
}