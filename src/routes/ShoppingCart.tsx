import { useEffect, useState } from "react";
import { CardPhoneShoppingCart } from "../components/ShoppingCart/cardPhoneShoppingCart";
import { TableTotalPrice } from "../components/ShoppingCart/tableTotalPrice";
import { IconConfusedPhone } from "../components/IconConfusedPhone";
import { useCustomContext } from "../context/Context";

export function ShoppingCart() {

  const [phones, setPhones] = useState([])
  const {listenStorage} = useCustomContext()

  useEffect(() => {
    const cartPhones = localStorage.getItem('cartPhones')
    cartPhones && setPhones(JSON.parse(cartPhones))
  }, [listenStorage])

  if (phones.length == 0) {
    return (
      <div className="animate-fadeIn w-full h-full flex justify-center items-center -mt-8">
        <IconConfusedPhone className="scale-75 max-sm:scale-[60%] max-sm:-ml-20"/>
        <h1 className="text-center font-extrabold max-sm:text-2xl text-3xl -mt-3 -ml-6 max-sm:-ml-10"> No hay telefonos <br/> agregados </h1>
      </div>
    )
  }

  return (
    <section className="w-full min-h-full flex justify-center">

      <div className="flex justify-center gap-10 lg:gap-20 flex-wrap">
        <section role="products">
          <h1 className="w-fit text-4xl font-semibold my-10 text-smokyBlack opacity-80"> Tus productos</h1>

          {phones.map((phone, index) => {
            return <CardPhoneShoppingCart key={index} phone={phone}/>
          })}
          
        </section>

        <section className="flex flex-col items-center max-lg:mb-20" role="totalPrice">
          <TableTotalPrice/>

          <button className="hover:shadow-orange w-[290px] bg-darkOrange rounded-full py-[10px] mt-5 transition-all duration-300" role="pay">
            <h1 className="text-xl font-bold text-white select-none"> Ir a comprar </h1>
          </button>
        </section>
      </div>

    </section>
  )
}